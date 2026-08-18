---
title: Opening infinite editors from the action menu
date: 2021-02-04 13:06:17
tags:
- Umbraco
- code
- dev-notes
---

if you have used either [Translation Manager](https://jumoo.co.uk/translate/) or [uSync.Complete](http://jumoo.co.uk/usync/complete) on thing you might have noticed is that a lot of the action menu items open up on the right hand side of the screen not the left 

![opening on the right](/images/2021/open-right.gif)

We made this choice because of the different way the left hand menu and the right hand 'dialogs' behave. 

## Modal vs non-modal dialogs 

If open up a left hand menu item and click anywhere else on a page you will see that the item closes. where as if you open up an item on a right hand dialog and click away, it remains open. Dialog items are essentially modal within Umbraco 8.

For us this is useful because both Translation Manager and uSync perform long running multi-step tasks and we don't want the user closing the dialog accidentally and things stopping. 

## Adding an action

[Adding an action to the menu is documented in the umbraco docs](https://our.umbraco.com/documentation/Extending/Section-Trees/trees#menurendering) briefly it requires adding a listener for Menu Rendering event, checking the tree and adding an action.

When you add your action you will typically add a view to tell Umbraco what to open.

```cs
var i = new Umbraco.Web.Models.Trees.MenuItem("itemAlias", "Item name");

// optional, if you want to load a legacy page, otherwise it will follow convention
i.AdditionalData.Add("actionUrl", "my/long/url/to/webformshorror.aspx");

// optional, if you don't want to follow the naming conventions, but do want to use a angular view
// you can also use a direct path "../App_Plugins/my/long/url/to/view.html"
i.AdditionalData.Add("actionView", "my/long/url/to/view.html");

// sets the icon to icon-wine-glass
i.Icon = "wine-glass";

// insert at index 5
e.Menu.Items.Insert(5, i);
```

The problem with all of these options is that they will open a view on the left hand side of the site, which as discussed can be closed losing progress and not necessarily getting you where you want to be. 

## Adding a jsAction to a menu item.

After quite a bit of Umbraco source code diving, we found the trick here is to add another bit of `additionalData` to your menu item that tells umbraco to run a javascript method when the action is selected. 

```cs
i.AdditionalData["jsAction"] = "myFunkyDialogManager.openCreateDialog";
```

this will call the method `openCreateDialog` in the `myFunkyDialogManager` factory within Angular. it passes an options object which has things like the id of the current content node in it. and a callback, you can use to tell Umbraco how it went _(I am not sure what Umbraco does with this information)_

## An Angular 'dialogManager' factory.

it took some trial and error but we eventually got to the method string is the name of a factory object in the angular app followed by the method name. - this method gets passed a number of arguments by Umbraco. so in our code we have written ourself a custom  `myFunkyDialogManager` class (you can call it anything you want).

```js
(function () {
    'use strict';

    function dialogManager($timeout, editorService, navigationService) {

        return {
            openCreateDialog: openCreateDialog,
            openDictionaryDialog: openDictionaryDialog,
            openItem: openItem,
            openJob: openJob,
            openSet: openSet
        };

        function openCreateDialog(options, cb) {
            // do the funky here...
        }
    }

    angular.module('umbraco')
        .factory('myFunkyDialogManager', dialogManager);
)();
```

## Opening an infinite editor. 
once you have the action menu calling your custom code, you can do anything you like! - but here we want to open a dialog on the right. Right handed dialogs are all "infiniteEditors" in umbraco and called from the [editorService](https://our.umbraco.com/apidocs/v8/ui/#/api/umbraco.services.editorService).

```js
function openCreateDialog(options, cb) {
    editorService.open({
        entity: {
            id: options.entity.id * 1,
            name: options.entity.name
        },
        languages: options.languages,
        title: 'Create',
        view: Umbraco.Sys.ServerVariables.application.pluginPath + '/myApp/createDialog.html',
        size: 'small',
        submit: function (done) {
            editorService.close();
            navigationService.hideNavigation();
            if (cb !== undefined) {
                cb(true);
            }
        },
        close: function () {
            editorService.close();
            navigationService.hideNavigation();
            if (cb !== undefined) {
                cb(false);
            }
        }
    });
}
```

So with all these bits in place you get the menu item opening on the right, and not disappearing if the user clicks off. 

![Opening an item on the right](/images/2021/open-right.gif)


## Show me the code ! 
So there are quite a few moving parts here, and we are spanning both c# and javascript code, the core of the process is done in two files. 

### CustomTreeComponent.cs

```cs
public class CustomTreeComponent : IComponent
{

    public void Initialize()
    {
        TreeControllerBase.MenuRendering += Tree_MenuRendering;
    }

    public void Terminate()
    {
        TreeControllerBase.MenuRendering -= Tree_MenuRendering;
    }

    private void Tree_MenuRendering(TreeControllerBase sender, MenuRenderingEventArgs e)
    {
        // if this isn't the content tree, we don't care. 
        if (sender.TreeAlias != Constants.Trees.Content) return;

        // the node id will be passed as a string (not all tree nodes are integers)
        // for content we want to turn this into an int, so we can do a permissions check
        if (int.TryParse(e.NodeId, out int nodeId)) {

            // permissions check does this your have our 'send to translate' permission ?
            var permissions = sender.Services
                                    .UserService
                                    .GetPermissions(sender.Security.CurrentUser,nodeId);

            if (!permissions.Any(x => x.AssignedPermissions.Contains(Translate.Permissions.Send)))
            {
                // user doesn't have permission to send
                return;
            }
        }

        // here - we are on the content tree and the user has the right permissions for us.

        // we do some translation manager permission set stuff here... removed for simplicity.

        // if the menu doesn't already have the item (it shouldn't but we check.)
        if (!e.Menu.Items.Any(x => x.Alias == "langTrans"))
        {
            // create a menu item
            var translationItem = new MenuItem("langTrans", "Send to translate")
            {
                Icon = "globe",
                SeparatorBefore = true,
                OpensDialog = true,
            };

            // this is the trick! - additional data jsAction, tells Umbraco to call this method 
            // when the user clicks on the content, not the standard 'open a view' stuff.
            translationItem.AdditionalData["jsAction"] = "translateDialogManager.openCreateDialog";
            
            // stick it in just above the last item (reload)
            e.Menu.Items.Insert(e.Menu.Items.Count-1, translationItem);
        }
    }
}
```

### CustomDialogManager.js

```javascript
(function () {
    'use strict';

    function dialogManager($timeout, editorService, navigationService) {

        return {
            openCreateDialog: openCreateDialog,
            openDictionaryDialog: openDictionaryDialog,
            openItem: openItem,
            openJob: openJob,
            openSet: openSet
        };

        function openCreateDialog(options, cb) {
            editorService.open({
                entity: {
                    id: options.entity.id * 1,
                    name: options.entity.name
                },
                languages: options.languages,
                title: 'Create',
                view: Umbraco.Sys.ServerVariables.application.pluginPath + '/myApp/createDlg.html',
                size: 'small',
                submit: function (done) {
                    editorService.close();
                    navigationService.hideNavigation();
                    if (cb !== undefined) {
                        cb(true);
                    }
                },
                close: function () {
                    editorService.close();
                    navigationService.hideNavigation();
                    if (cb !== undefined) {
                        cb(false);
                    }
                }
            });
        }
    }

    angular.module('umbraco')
        .factory('myFunkyDialogManager', dialogManager);
)();
```
