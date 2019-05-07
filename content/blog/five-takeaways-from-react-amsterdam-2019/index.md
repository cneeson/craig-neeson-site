---
title: Five Takeaways from ReactAmsterdam 2019
date: '2019-04-13T23:59:59.121Z'
timeToRead: '3 minute'
isNote: false
isPublished: false
---

![react-amsterdam](./reactamsterdam.png)

As one of the biggest React conferences in Europe, ReactAmsterdam has attracted some of the worlds top speakers since its inception in 2016. In 2019, I had the chance to see some of these speakers and to get an idea of where the world of React is going.

The conference events last for 4 days. Workshops are held over the first two days on a variety of topics (give examples), the third is the conference day, and the last is a comprehensive tour day around the city of Amsterdam for attendees. I attended the main track of the conference day, the main track was for normal React developers, and the second track was focused on React Native.

I have a terrible memory, and so one of the things that I knew I would need to do is [document](/react-amsterdam-notes/) every bit of information from the day, else it be lost forever. Looking back over the notes, it is clear that there are a few trends lying in the conference content, and these trends best represent the takeaways from the conference as a whole.


## Write your own tools sometimes but not always

One of the themes for me personally this year is attempting to make a more conscious decision around when to build utilities and helpers from scratch, when to just vendor them in. In a separate article I discuss the various trials and tribulations I went through with iterating over this blog platform's design, which included alot of 'reinventing the wheel', but ultimately allowed me to learn alot about areas of the stack that I otherwise would never touch.

There were a few powerful anecdotes from ReactAmsterdam around this very topic. The day kicked off with a [talk](https://youtu.be/4KfAS3zrvX8?t=1400) from [Kent C. Dodds](https://kentcdodds.com/) called 'Requisite React'. Kent explored the various abstractions that we, as React developers take for granted every day. Kent explained that if we really wanted to level-up our React skills, the best way is to take some of the more common abstractions and look under the hood. The best example given was the thick layer of syntactic sugar that JSX provides us. Understanding how the compiler will eventually convert these JSX expressions into normal Javascript function calls can help us to debug our code alot faster. To this same point, Kent theorises that one of the best ways that we can learn anything in programming is to rebuild a familiar tool from scratch, not anything as arbitrary as a Todo app, but some more utility-based, like lodash. Ultimately the concept of writing a tool from scratch in this instance is purely academic, with the overall goal being to learn something new.

 Conversely, [Max Stoiber's](https://mxstbr.com/) [talk](https://youtu.be/4KfAS3zrvX8?t=17559) dealt with some of the bad decisions made while architecting his newest product [Spectrum](https://spectrum.chat/). Max explained that one of the more damaging decisions made was to write areas of the stack from scratch where they shouldn't have been. The two most time-consuming and stressful examples were a custom SSR (Server Side Rendering) engine, and a custom WYSIWYG text editor. Max emphasises that naivety played a part in deciding to write both from scratch and in the case of the WYSIWYG editor, a simple markdown conversion package was just as effective. In the case of this production app, it made a lot more sense to go with hardened technologies, whose authors have already been through the pains of bug-catching and extensive user-testing. 

 An obvious takeaway is that we should evaluate technology decisions for a production stack in a vastly different way than for side projects. There is value in taking the time to write tools for ourselves if we want to level up our skills.

## Continued desire for better communication between developers and designers

An interesting secondary tone for the conference was that of good communication. Both [Andrey Okonetchnikov](https://okonet.ru/) and [Mark Dalgleish](http://markdalgleish.com/) gave talks around the fact that transfer of information between developers and designers has historically not been everything it could be. 

Andrey's talk focused around a paradigm shift that would see developers starting to use more primitive components for their libraries in order to better align with the language and terminology that designers use. He made a good comparison between how a developer sees a button component, and how a designer sees it. The developer sees an HTML button, with a few layers of CSS which applies their organisation's custom interaction and styling traits. The designer sees a rect or polygon, with a text element overlayed. Andrey theorises that, if we want to truely bridge this communication gap, developers will need to start writing their code on a more primitive level, using the same terms for components like `rect`, `polygon` and `text` in the same way that React native does. Andrey mentions a tool called [html-sketchapp](https://github.com/brainly/html-sketchapp) which allows for React components written in this manner to be imported into a designer's Sketch instance. This would be the ultimate goal, the actual Sketch shapes and symbols would be generated from React JSX and props, but at the cost of more complex code.

Mark's talk 'Designing with React' explores the idea that design systems are all about bridging the divide between design and development. React components essentially allow developer to create their own domain specific languages, using terms and phrases that make sense specifically for their organisation. Mark mentions that we should be striving to get our components to a point where they are intuitive enough for designers to use them to create mockups. Mark and his company have developed an excellent tool called Playroom, which can be used as a component library REPL. It allows anyone to start typing intellisense-enabled JSX to build a layout using the library's components.

The combination of both talks one after another highlight a drive for consistency of terminology and workspaces for developers and designers alike.

## With the right pattern, SVG use in React can be super graceful
## Hooks are here to stay and can replace many patterns such as HOCs and render props

One of the more pervasive topics of every talk was the use of the relatively new Hooks API. Talk of hooks and how different people were implementing them permeated many of the conversations in the breakout areas. 

## Agility and experiementation continue to be importatn, Max Gallo and Max Stoiber both touched on this

Mention the fact that I didnt get to see the last two talks

Make sure and use the note blocks for quotes