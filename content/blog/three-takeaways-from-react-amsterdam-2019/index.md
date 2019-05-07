---
title: Three Takeaways from ReactAmsterdam 2019
date: '2019-05-07T23:59:59.121Z'
timeToRead: '3 minute'
isNote: false
isPublished: true
---

![react-amsterdam](./reactamsterdam.png)

As one of the biggest React conferences in Europe, [ReactAmsterdam](https://react.amsterdam/) has attracted some of the worlds top speakers since its inception in 2016. This year, I had the chance to see some of these speakers and to get an idea of where the world of React is going.

The conference events lasted for four days. Workshops are held over the first two days on a topics like GraphQL and Serverless, each led by experts in their fields. The third is the conference day, and the last is a comprehensive tour day around the city of Amsterdam. 

The conference day was split into two tracks, one for React and one for React Native. The organisers had made alot of effort to accomodate people who wanted to attend talks from both tracks, intentionally leaving five minutes between sessions to allow attendees to get to the other hall.

I have a terrible memory, and so one of the things that I knew I would need to do is [document](/react-amsterdam-notes/) every bit of information from the day, else it be lost forever. Looking back over the notes, it is clear that there are a few trends lying in the conference content, and these trends best represent the takeaways from the conference as a whole:


## Write your own tools sometimes, but know when not to.

One of the themes for me personally this year is attempting to make a more conscious decision around when to build utilities and helpers from scratch and when to just vendor them in. In a separate article I discuss the various trials and tribulations I went through with iterating over this blog platform's design, which included alot of 'reinventing the wheel', but ultimately allowed me to learn alot about areas of the stack that I otherwise would never touch.

There were a few potent anecdotes from ReactAmsterdam around this very topic. The day kicked off with a [talk](https://youtu.be/4KfAS3zrvX8?t=1400) from React Trainer [Kent C. Dodds](https://kentcdodds.com/) called 'Requisite React'. 

Kent explored the various abstractions that we, as React developers take for granted every day. Kent explained that if we really wanted to level-up our React skills, the best way is to take some of the more common abstractions and look under the hood. The best example given was the thick layer of syntactic sugar that JSX provides us. Understanding how the compiler will eventually convert these JSX expressions into normal Javascript function calls can help us to debug our code alot faster. To this same point, Kent theorises that one of the best ways that we can learn anything in programming is to rebuild a familiar tool from scratch, not anything as arbitrary as a Todo app, but something more utility-based, like lodash. Ultimately the concept of writing a tool from scratch in this instance is purely academic, with the overall goal being to learn something new.

 On a similar note, [Max Stoiber's](https://mxstbr.com/) [talk](https://youtu.be/4KfAS3zrvX8?t=17559) dealt with some of the bad decisions made while architecting his newest product [Spectrum](https://spectrum.chat/). Max explained that one of the more damaging decisions made was to write areas of the stack from scratch when they shouldn't have been. The two most time-consuming and stressful examples were a custom SSR (Server Side Rendering) engine, and a custom WYSIWYG text editor. 
 
 Max emphasises that naivety played a part in deciding to write both from scratch and in the case of the WYSIWYG editor, a simple markdown conversion package was just as effective. In the case of this production application, it made a lot more sense to go with hardened technologies, whose authors have already been through the pains of bug-catching and extensive user-testing. 

 An obvious takeaway is that we should evaluate technology decisions for a production stack in a vastly different way than for side projects. There is value in taking the time to write tools for ourselves if we want to level up our skills, but be wary of taking on this task for the wrong reasons.

## The continued desire for better communication between developers and designers.

An interesting secondary tone for the conference was that of good communication. Both [Andrey Okonetchnikov](https://okonet.ru/) and [Mark Dalgleish](http://markdalgleish.com/) gave talks around the fact that the transfer of information between developers and designers has historically not been smooth. 

Andrey's [talk](https://www.youtube.com/watch?v=3ggoo6AH8Uo) focused around a paradigm shift that would see developers starting to use more primitive components for their libraries in order to better align with the language and terminology that designers use. He made a good comparison between how a developer sees a button component, and how a designer sees it. The developer sees an HTML button, with a few layers of CSS which applies their organisation's custom interaction and styling traits. The designer sees a rect or polygon, with a text element overlayed. Andrey theorises that, if we want to truly bridge this communication gap, developers will need to start writing their code on a more primitive level, using the same terms for components like `rect`, `polygon` and `text` in the same way that React Native does. 

Andrey mentions a tool called [html-sketchapp](https://github.com/brainly/html-sketchapp) which allows for React components written in this manner to be imported into a designer's Sketch instance. This would be the ultimate goal, the actual Sketch shapes and symbols would be generated from React JSX and props, but at the cost of more complex and bloated code.

Mark's [talk 'Designing with React'](https://www.youtube.com/watch?v=orPcyJMJh7Y) explores the idea that design systems are all about bridging the divide between design and development. React components essentially allow developers to create their own domain specific languages, using terms and phrases that make sense specifically for their organisation. Mark mentions that we should be striving to get our components to a point where they are intuitive enough for designers to use them to create mockups. Mark and his company have developed an excellent tool called [Playroom](https://github.com/seek-oss/playroom), which can be used as a component library REPL. It allows anyone to start typing intellisense-enabled JSX to build a layout using the library's components.

The combination of both talks one after another highlight a drive for consistency of terminology and workspaces for developers and designers alike.

## Hooks are here to stay and can replace many patterns such as HOCs and render props

One of the more pervasive topics of every talk was the relatively new Hooks API. Talk of hooks and how different teams were implementing them permeated many of the conversations in the breakout areas. 

There were plenty of examples during talks where older, more ad-hoc patterns such as [Higher Order Components](https://reactjs.org/docs/higher-order-components.html) and [Render Props](https://reactjs.org/docs/render-props.html) were tipped to be replaced with the first-class hook API. 

However, something that was reiterated time and time again was the fact that hooks are not just a new bit of tech to integrate into your stack, they require a mind shift. And their attractive benefits of a lighter bundle and more readable code-base come at the expense of some re-architecting, but I think everyone agrees that this is a refactor worth taking on.

## Worth Attending?

ReactAmsterdam is absolutely worth attending. The points made here is not an exhaustive summary of what the conference has to offer. Experts in React, CSS, GraphQL and SVG were all in attendance and available for a casual chat or 1-1 consultation on the venue floor. 

The venue itself is located in [Northern Amsterdam](https://kromhouthal.com/en/), accessible by free ferries that travel between Amsterdam Centraal and the destination warehouse. All meals were catered for while on-site and there was an after-party with experimental laser shows conducted by other techy professionals.

All in all there is something for every developer at ReactAmsterdam. There are plenty of opportunties for networking as well as quiet areas to get a bit of work done.
