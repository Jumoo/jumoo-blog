---
title: Permission based Umbraco dashboards
date: 2021-01-29 07:27:01
tags:
- umbraco
- dev-notes
- code
---

This week we released an update to [Translation Manager](https://jumoo.co.uk/translate) with a few new features such as job history, better error UI and a batch translate dashboard 🎉. 

In doing so we had to do some tweaking of how Umbraco manages what dashboards a user can see, so we could hide/show the dashboard based on a users permissions not their group membership. Here is a quick rundown of what we did.

## Batch Translate dashboard
The batch translate dashboard lets you pick individual bits content from around your site, and bundle it all into a single translation job. Its been a think people have been asking for for a while. 

![Batch translate dashboard](/images/2021/batchtranslate.png)

We put this dashboard on the content section because well its a content thing, but we had a problem - ideally only people who can translate content should be able to use the translation dashboard. 

## Dashboard security
Umbraco allows you to [secure dashboards based on user group](https://our.umbraco.com/documentation/Extending/Dashboards/#specifying-permissions), so for example you can restrict a dashboard to the Admin group. 

```json
{
    "dashboards":  [
        {
            "alias": "myCustomDashboard2",
            "view":  "/App_Plugins/myCustom/dashboard.html",
            "sections": [ "content", "settings" ],
            "weight": -10,
            "access": [
                { "deny": "translator" },
                { "grant": "admin" }
            ]
        }
    ]
}
```

However while 'translator' is a group in Umbraco, who can manage translations is actually managed at a permissions level. Within any group _(or against any content node)_ you can assign the 'Translate' permission, and then users in that group can create translation jobs via the "send to translate" menu. 

![Translate permissions](/images/2021/translatepermissions.png)

This means we can't really use the default permissions config to restrict the dashboard we have go a little deeper.

## EditorModel Events
One of the great things about umbraco is the number of places you can customize and tweak the process, and one such place is the [EditorModel Events](https://our.umbraco.com/documentation/Reference/Events/EditorModel-Events/). 

The EditorModel events fire just before Umbraco sends information to the client. and this allows you to customize things before the back office UI displays them - for example you [can change what languages are shown to a user](http://tooorangey.co.uk/posts/umbraco-v8-variants-and-limiting-editor-access-by-language-an-adventure-story/) _(with some extra tweaking too)_.

## SendingDashboardSlimModel
In our case we want to look at the `SendingDashboardSlimModel` which if fired just before dashboards are sent to the client. 

To hook into a event, you first need to have a component that ran run when Umbraco starts. within this you can then setup code to 'listen' for the event

```cs
EditorModelEventManager.SendingDashboardSlimModel += SendingDashboardSlimModel;
```

Then whenever a dashboard is sent to the client our `SendingDashboardSlimModel` event will be called.

What we need to do is check if the user has permission to translate.

### User permissions
You can retrieve what permissions a user may have for any content node via the user service.

```cs
var permissions = _userService.GetPermissions(user, path);
```

For us, we need the current user, and as we are working with a dashboard not content, we are using the 'top level' path of -1. 

### Current user ?
The tricky thing here can be finding the current user, as it is in different places on different events. for the SendingDashboardSlimModel event, the `EditorModelEventArgs` contains a reference to the UmbracoContext, which we can use to get the current user.

```cs
var currentUser = e.UmbracoContext.Security.CurrentUser;
```

### Assigned permissions
Permissions are a little odd in umbraco in that they are actually stored as a series of letters. once you have the user permissions `AssignedPermissions` is an array of letters and you check to see if your required letter is there. 

In our case we want to know when the user *doesn't* have permission to translate - because we are going to remove the dashboard if they don't

```cs
if (!permissions.Any(x => x.AssignedPermissions.Contains(Translate.Permissions.Send))) {
    // user doesn't have permission
}
```
_here we use a constant value for our letter, as we also use it in other places_


### Remove dashboard
Within the `EditorModelEventArgs` passed to our method, the `Model` contains a `IEnumerable<Tab<IDashboardSlim>>` which is a list of dashboard tabs. Now because its `IEnumerable` we can't just remove the dashboard tab. but what we can do is assign a new Enumerable which contains everything but the tab we want to remove. 

```cs
e.Model = e.Model.Where(x => x.Alias != "translationPicker");
```
This way the user gets only the dashboards they have permission to see and we can remove our translationPicker dashboard when they shouldn't see it.

## Show me the code
So with all that put together, we have a setup where we can 
remove the dashboard if the user doesn't have the correct permissions

```cs
// Register the Component at startup.
[RuntimeLevel(MinLevel = Umbraco.Core.RuntimeLevel.Run)]
public class TranslationPickerComposer : ComponentComposer<TranslationPickerComponent> { }

// Component to control dashboard permissions
public class TranslationPickerComponent : IComponent
{
    private readonly IUserService _userService;

    // Grab a reference to the UserService
    public TranslationPickerComponent(IUserService userService)
    {
        _userService = userService;
    }

    public void Initialize()
    {
        // hook into the dashboard event
        EditorModelEventManager.SendingDashboardSlimModel += SendingDashboardSlimModel;
    }

    public void Terminate()
    {
        // clean up when site terminates 
        EditorModelEventManager.SendingDashboardSlimModel -= SendingDashboardSlimModel;
    }

    private void SendingDashboardSlimModel(
        HttpActionExecutedContext sender, 
        EditorModelEventArgs<IEnumerable<Tab<IDashboardSlim>>> e)
    {
        // does the dashboard list contain the translationPicker dashboard ?
        if (e.Model.Any(x => x.Alias == "translationPicker"))
        {
            // get user permissions
            var permissions = _userService.GetPermissions(e.UmbracoContext.Security.CurrentUser, -1);

            // does the user NOT have translate permissions?
            if (!permissions.Any(x => x.AssignedPermissions.Contains(Translate.Permissions.Send)))
            {
                // update tab list to contain all other dashboards
                e.Model = e.Model.Where(x => x.Alias != "translationPicker");
            }
        }
    }
}
```