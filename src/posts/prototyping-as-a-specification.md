---
title: Prototyping as a specification
tags:
  - agile
  - Digital
  - LocalGov
  - project delivery
date: 2014-02-05 11:52:01
---

Often getting a clear idea of just what someone wants and what a solution will do can be difficult. It is hard to take a dry few thousand words in a proposal document and understand what it might look like.

This is often how projects get off on the wrong foot; one set of people think the document says one thing, while the person who wrote it meant something completely different. Problems only emerge once the system is built and people can press the buttons and see what it does.



If you are managing your project in a traditional top down ‘waterfall’ way you can be a very long way into the process before someone notices that things aren’t working out in the way they expected. At this point, cost to change can be high and timescales will leap out of the nearest window.

Agile development handles this better, because you get to see things sooner. You can correct any misunderstandings early on in the process, meaning fewer things to change, quicker delivery and cheaper projects, but misunderstandings during the “architecting” phase of a project can and do still happen.

### Prototype as project design

One solution which I have used in the past, is to build prototypes as the specification.

Anyone who has had the misfortune to have to write project proposal and initiation documents will tell you they take days and people only read the bullet points in scope and the price on the back page. It doesn’t offer anyone in the process much in terms of value and is open to massive interpretation based on your world view.

A prototype is different. It looks like a something, it has bits you can press and most of all its dynamic, it reacts to being used just like the real thing might.

As someone with a bit of a development background, I can tell you it takes a lot less time to make a simple prototype than a proposal, and the feedback is vastly superior.

I know the non-developers amongst you are now running for the hills but it really doesn’t need in-depth skills to produce a prototype. If you don’t have the skills or time, drawings handed to a friendly html wrangler will almost certainly get a you a prototype in a day – as long as you don’t let it get out of hand.

### Specification prototype

In order for a specification prototype to work, it needs to communicate how the finished product might work, but it also needs to be something that can be produced quickly. It loses all value if it involves someone disappearing into a corner for weeks, trying to solve all the problems by themselves and second guessing what people want. To that end, my tips for building a prototype for specification are:

#### 

#### Just write everything static

HTML is your friend. You don’t need to write functionality into a prototype. It only needs to _behave_ like it works. So you don’t need anything more than a text editor - if your process has 3 steps, have three pages one for each one, with the answers hard coded onto the page.

#### Use a framework to get it looking ‘ok’

There is no getting away from it, people go on looks, so a prototype shouldn’t look to glossy. In fact, avoid colours and images, people will just spend weeks talking about them. For speed don’t go hand styling things use a simple html framework: with something like [bootstrap](getbootstrap.com) you can get a few pages up and running really quick, with nice buttons and labels, working on desktop and mobile with very little effort.

#### Fake interactions

Doing everything static means you won’t be able to make the prototype respond dynamically but it doesn’t matter. You just fake the interactions. Write out the results of the same query, regardless of what the user puts in – your results will always show a list of Daves, even though they wrote Eric in the box. It doesn’t need to work as a search, it just needs to show how it would return a search if it did.

#### Explain how it works on the page

As you go on through the process, some things will be happening behind the scenes of your prototype – or at least, they would if it was real. Write those things down. Write them down within the prototype itself, either as a sidebar, in a pop-up, or in the body text. So, for example, when the user clicks a submit button, your next page tells them what happens: _“We send an email which adds the submission to system **x,** here. Then someone does thing **y** with it.”_  This will help people understand the flow of your prototype, and it will give you a good jumping off point, for defining the functions required to make it all work.

#### If you don’t know the answer – just say so

The prototyper doesn’t need know all the answers. If you get to a part of the prototype where you just don’t know how it will work, then guess. You will either be right or wrong, and it doesn’t matter either way - the prototype is there to get everyone thinking. When people see it, they will soon tell you if it’s not right, and if you haven’t spent seven weeks thinking about it, you won’t be too precious if someone has a better idea.

### What that looks like?

That’s all very good, but as I said at the top, it’s hard to take a load of dry words and turn that into something in your head. So, as a practical example I have uploaded [a quick prototype that I did a while back for a bulky item collection form](http://jumoo.co.uk/code/bobdemo/part1.html). The form is how someone would request the council-run service to come and collect something from their house.

[![bobprototype](/images/2014/02/bobprototype_thumb.png "a simple prototype")](/images/2014/02/bobprototype.png)

The prototype itself probably took around 30 minutes to an hour to produce, but it gave everyone in the project a clear insight into how it might work, and prompted many questions about what to ask when. For speed, it:

*   was built with bootstrap,
*   was made up of 5 html pages, each with a bit of the form on, just linking to each other,
*   had all the lists and buttons in place,  implying their function, but not changing things,
*   described (in orange) just how things would happen behind the scenes.
With another 30 minutes you could actually make the buttons and lists work, but for this simple example it was enough that the pages suggested their functionality. The other advantage of this prototype is that it is mobile friendly, so you can see how this might work on a mobile device.

As proof that it was an agile project, here is [the completed form](http://liverpool.gov.uk/bins-and-recycling/bulky-item-collection/bulky-bob/collection-form/?UPRN=38027163) – not quite the same, many things were moved around, but the basic principles have stayed.

### There is still a document

Sadly (there is still a kicker to this, I’m afraid), your prototype won’t completely replace your documentation. Unless you are very lucky you will still need to produce a document of sorts for people to sign-off, but with an agreed prototype in place people are more willing to accept a brief document outlining the solution, because they have already seen what it really means, and what is likely  to happen.