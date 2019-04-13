---
title: ReactAmsterdam 2019 Conference Notes
date: '2019-04-12T23:59:59.121Z'
timeToRead: '5 minute'
isNote: true
---

Notes collected and tidied up a bit from my trip to [ReactAmsterdam2019](https://react.amsterdam/).

---

## Contents
**07.30** - [Registration](#id-registration)  
**08.00** - [Welcome Breakfast](#id-welcome-breakfast)  
**09.00** - [Conference Opening](#id-conference-opening)  
**09.20** - [Requisite React - Kent C. Dodds ](#id-requisite-react)  
**09.50** - [Refactoring React - Siddharth Kshetrapal](#id-refactoring-react)  
**10.20** - [Coffee Break](#id-coffee-break-1)  
**10.50** - [A Common Design Language - Andrey Okonetchnikov](#id-common-design-language)  
**11.20** - [Designing with React - Mark Dalgleish](#id-designing-with-react)  
**11.50** - [Lightning Talks](#id-lightning-talks)  
**12.20** - [Lunch Break](#id-lunch-break)  
**13.20** - [GitNation Open Source Stage](#id-oss)  
**13.50** - [Tech Regrets at Spectrum - Max Stoiber](#id-tech-regrets-at-spectrum)  
**14.20** - [Scaling Applications with Microfrontends - Max Gallo](#id-microfrontends)  
**14.50** - [An SVGs Tale - Elizabet Oliveira](#id-svg)  
**15.20** - [Coffee Break](#id-coffee-break-2)  
**15.50** - [React Open Source Awards](#id-oss-awards)  
**16.10** - [The GraphQL Developer Experience - Peggy Rayzis](#id-graphql-dev-experience)  
**16.35** - [One-on-one Session - Andrey Okonetchnikov](#id-one-on-one)  
**16.40** - [Painting Pixels with WebGL and React Hooks - Ashi Krishnan](#id-webgl)  
**17.10** - [Talks section closing and announcements](#id-closing)  

---

## Notes

<div id='id-registration'/>

### 07.30 - Registration

<div id='id-welcome-breakfast'/>

### 08.00 - Welcome Breakfast

<div id='id-conference-opening'/>

### 09.00 - Conference Opening

<div id='id-requisite-react'/>

### 09.20 - **Requisite React** - [Kent C. Dodds](https://github.com/kentcdodds)

High Level talk with an emphasis on people who want to up their React skills. To do so effectively, we need to take things back to basics and try to understand the abstractions that we use every day at a lower level.

* We use abstractions everyday, most of which we never give a second thought.
* We need to weigh up the benefits vs. the costs of abstractions.
* If we stop to consider and even try to understand what is going on underneath the abstractions, **it will allow us to use them more effectively**.
* Basic example included JSX compiling down to base Javascript, once we understand how the individual parts of JSX are passed into the `createElement` function, it makes debugging your code alot more straightforward.
* Chats about how React will determine what kind of component to render based on the casing of your JSX. In the case of lowercase components, a standard HTML element will be rendered ('called a composite component') and in the case of capitalised ones, React will render a 'custom component'. 
* Another good example was how string interpolation typically happens, understanding this a bit better will probably help us to understand a few of the errors we come up against with `styled-components` from time-to-time, as the whole package is based on the mechanics of tagged template literals.
* The final example used is understanding the newer hooks APIs. One common pitfall is that the order that hooks are initialised matters, and getting them in the wrong order can cause bugs. Understanding what happens underneath the API can help us with debugging some of this. 
* Final takeaway: if we want to level up our React skills, try to build something that you use at an abstracted layer, try to build lodash or a hooks implementation.

<div id='id-refactoring-react'/>

### 09.50 - **Refactoring React** - [Siddharth Kshetrapal](https://github.com/siddharthkp)

Sidd is an independent dev who mostly works on tooling for frontend devs. Talk was very useful, went through what looked to be a normal class component and pointed out a few code smells and how we might fix them. Primary takeaway is the list of code smells mentioned.

**Code Smells:**

* Using props inside the constructor is usually a code smell. This is because the constructor code only runs once. In the example, Sidd showed a case where we map one of the props to state inside the constructor function. The issue with it only running once is that the mapping will only happen at most once, which almost always leads to unexpected bugs.
* **Feature Envy** - occurs when a parent or container component becomes too interested in the functionality of its children. Showed example where container had a form component inside it, rough pseudo is below. The primary problem: the container wants to hand off control of the form submit function to its parent, but instead of just passing the props straight to the child, we have an intermediate function which runs some stuff before we call the props function. This is a fairly innocent example but it can be easy for the contents of `handleSubmit` to grow to a point where its actions might confuse the parent who is passing in the props. Do not mix controlled and uncontrolled components, it can only be one or the other.

```jsx
...
handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit();
}

render() {

    return (
        <TheForm onSubmit={this.handleSubmit}>
            ...
        </ TheForm>
    );
}
...
```

* Be wary of spreading props like the below example shows. Depending on where the spread is, it can have unintended effects. At the bottom it will act as a default, at the top, any props called `someProp` or `someOtherProp` will always be overriden. which can be unexpected.

```jsx
render() {
    return (
        <SomeComponent
            {...this.props}
            someProp
            someOtherProp
        />
    );
}

```

* **Single responsibility principal** - good to ask yourself from time to time when looking at components. It states that a component should do only one thing and do it well.
* Prefer hooks over higher order components in 2019. The reason for this is that people generally chain HOCs together, each extra HOC call in the chain will modify props, making it difficult to determine inputs and outputs reliably for debugging and testing. We can develop custom hooks which can provide the same traits and behaviours that a component might need from a HOC, many hooks can be injected into a component and can be tested individually.
* Had a great example as below where you might need to pass props to all children, we have run into this requirement already with the CL. First urge would be to use a HOC which will use `React.clone` to map the props onto all children, generally speaking, anytime you see `React.clone`, it is usually a code smell. Instead prefer the use of the context API, the HOC parent will become the provider, and all of the children will become consumers, which is much, much cleaner. **He uses a hook to inject the context**.

```jsx
<ParentCom>
    <SubCom1 />
    <SubCom2 />
    <SubCom3 />
</ParentCom>
```

<div id='id-coffee-break-1'/>

### 10.20 - Coffee Break

<div id='id-common-design-language'/>

### 10.50 - **A Common Design Language. Let Designers and Devs talk to eachother** - [Andrey Okonetchnikov](https://github.com/okonet)

Andrey is a freelance dev from Austria who has a deep understanding of design and component systems. Primary takeaway are his interesting thoughts on breaking components down so that they are composed of many primitive components, which then share a commonality with the same primitives that UX folks are used to when creating designs.

* Talks about the topic of languages and communication techniques in general.
* Typography, colors and spacing are the language of the design system.
* It is difficult translating designs from designers into actual implentable things. Talked of a common language between the design and developer worlds
* Andreys answer would be to break web components down into their base primitives, as it is these primitives (rects, circles, polygons), that designers use to do mock ups.
* Interesting choice on a few of the components were the use of a prop called `kind` to represent a different kind of button, would be closest to our `variant` prop, might consider switching if it makes more semantic sense to consumers.
* Talked about comparison of constrained components vs. base HTML elements, the main takeaway is that HTML is a nightmare to actually constrain, which is crappy if we are trying to create a design system.
* Interesting project to check out is [ant-sketchapp](https://github.com/ant-design/antd-sketchapp), Ant seem to have got an interesting implementation of the sketchapp tool.
* [component-driven.io](https://component-driven.io/) is a site hosting his newsletter, based off the info in the talk, would be good to keep up to date with Andreys findings.

<div id='id-designing-with-react'/>

### 11.20 - **Designing with React** - [Mark Dalgleish](https://github.com/markdalgleish)

Awesome talk from Mark Dalgleish who works for [Seek software](https://www.seek.com.au/) in Australia. Primary takeaway was the Playroom project and the thought that we as devs should be creating component libraries that are so straightforward that designers should be able to use them to prototype things too.

* Design systems are all about bridging the divide between design and development.
* Makes sense for designers to design in the final medium (React).
* Components essentially let us build our own domain specific language, everyone should know what a `Button` looks and behaves like. And so we can better understand how it might be used in combination with other components.
* Mentions [html-sketchapp](https://github.com/brainly/html-sketchapp) again and the fact that it is more flexible than [react-sketchapp](https://github.com/airbnb/react-sketchapp). Showed off a hidden route on their CL site that renders out all components to one page, the output of this page (just a JSON file) can then be feed to `html-sketchapp` and all of the domain specific names for things will be properly converted to sketch assets and symbols.
* There is alot of swell in this area of research at the minute. Actual products that have been created for the purpose of unifying dev and design are:
   * [Framer-X](https://www.framer.com/)
   * [Module Studio](http://www.modulestudio.co.uk/)
   * [Interplay](https://interplayapp.com/) (which is the one being adopted at Seek, mostly because it is web-based)
* It is important that consumers (devs and designers) understand how a tool works. Examples of this are the babel and typescript repls, which aim to demystify what goes on in both of their transpilers by showing compiled and uncompiled code side-by-side in realtime, Playroom essentially does the same thing except with code, and with a visual viewport.
* Interestingly none of the Seek components actually contain spacing props, they are positioned via parent components such as `Section` which handles whitespace. This allows for components to remain unpolluted with positioning props.
* Seek does not use variant names like `primary` and `secondary` to denote differences, they use the actual brand colour names instead. They also use boolean values to denote differences in components, for example `<Text hero><Text>` which denotes a piece of text that should be emphasised as the header of a page.
* **We need to add a share button back into our playroom implementation,** this will be key if we want designers to actually start using it to mock things up, we don't currently have access to the iFrame's URL, which contains a base64 encoded string so that the current mock up can be shared.
* **We need to add a link to the raw playroom instance so that users can have a bit more space in the editor.**
* We can also pass multiple themes into the config which is something we haven't needed to explore yet.
* Seek is currently building a new design system called [Braid](https://github.com/seek-oss/braid-design-system).
* Idea of Braid is that it has many themes. Seek, like Flexera is comprised of many smaller companies, each with their own brand to uphold. Braid will allow for all devs in the different companies to use the exact same components (the same design language) and behaviours, but the look and feel will be different, this sounds like an awesome idea.
* Pull Request workflow has a bunch of integrated tests, the most notable being one that throws up a test instance of the doc site for us to eyeball before it actually goes into SIT/Production.
* Playroom will hopefully become the first place that people go to mock up new designs for Flexera's products.
* **We need a page in the CL that better explains the role of Playroom and the fact that it is not just an interesting toy**

<div id='id-lightning-talks'/>

### 11.50 - Lightning Talks

Not alot of notes taken as all the presentations were about SSR.

* **Mark from [Nearform](https://www.nearform.com/)** - talks about how Nearform have developed new methods to speed up the algorithms with which Server Side Rendering is accomplished. Interestingly the key to many of the speed ups was the use of tagged template literals.

<div id='id-lunch-break'/>

### 12.20 - Lunch Break

<div id='id-oss'/>

### 13.20 - GitNation Open Source Stage

[GitNation](https://gitnation.org/) present a few awards to developers who have brought exciting new open source software to the market every year. The actual awards were later in the day, but GitNation allowed a few devs who were onsite to pitch their ideas. Presentations:

* **[React Async](https://github.com/ghengeveld/react-async)**
    * A new way to manage promise lifecycles in React.
    * Has a few higher order components such as a wrapper called `<async>` which will have a sub-component called `<async.fulfilled>`, the fulfilled bit will wrap a bit of JSX that should be rendered once the promise has resolved successfully.
    * Provides a hook that behaves in the same way.
    * Was created to bridge the gap between what we have now to manage promises, and the upcoming suspense API. 

* **[MicroJob](https://github.com/wilk/microjob)**
    * Aims to bring multithreading to React.
    * Talks a bit around using the relatively new concept of web workers to split CPU cycles off onto its own thread for some operations.
    * Might be good if we are doing heavy data manipulation on the client side, but this seems like a bit of an anti-pattern to begin with, unclear what the use-case might be, perhaps in more multimedia-style system this would be really useful.

* **[URQL](https://github.com/FormidableLabs/urql)**
    * A better way to do graphQL queries from React, made by Formidable Labs. 
    * Sort of like a competitor to Apollo.
    * The more I see how async calls can be done with hooks, the more I realise that we need to adopt the approach going forward.
* **[GitHistory](https://github.com/pomber/git-history)**
    * Seen this popup on reddit about 6 months ago, is a service that can be used to nicely present the differences between GitHub files. Sort of like blame but alot nicer.
    * Tryed to bring home the importance of intuitive tooling, and how we achieve the exact same thing (minus the pretty animations) with a few flags on `git log`. Theorises that most people never read the full `git` manual and so getting more complex results out of the tool is something that never happens for most users.

<div id='id-tech-regrets-at-spectrum'/>

### 13.50 - **Tech Regrets at Spectrum** - [Max Stoiber](https://github.com/mxstbr)

High level talk that dives into a few of the technical decisions made at Max's latest company - [Spectrum](https://github.com/mxstb). One of the best talks of the day describing the pitfalls of making bad decisions and not proofing things out before going to implementation.

* Spectrum was bought by GitHub recently.
* Reflects on the tech choices that were made at Spectrum with a focus on the bad ones.
* Many of the mistakes were made while designing out out the backend, the primary reason being that all three devs on the team were much more geared toward frontend work.
* **Regret 1:** not using [react-native-web](https://github.com/necolas/react-native-web)
    * If he were to do it all again, he would use react-native-web, this would allow him to write components in react-native, which will allow for the code to obviously work on native devices, but the package will allow for the same code to be converted for use on the web.
    * In lieu of such a conversion mechanism, they ended up writing native applications for each platform, which took alot longer.
    * Would have made alot more sense to go mobile-first, they originally went browser-first with the thinking that they could retrofit a few media queries to support mobile.
    * **Lesson 1:** building a good product is all about experimentation and momentum. Optimise your processes for iteration speed and flexibility.
* **Regret 2:** not using [nextjs](https://nextjs.org)
    * All chats had to be search indexed, this is the primary way that users should be brought to the site.
    * SSR is a must for search engine indexing, what they found was that their pages were indexed without issue but mostly before the actual chat content had fully come down from a async call. This pretty much resulted in blank screens with a loader being indexed, and not the content itself.
    * Instead of using something like nextjs, they tried to build their own bespoke SSR service which was a terrible idea by the sounds of it.
    * **Lesson 2:** ues existing solutions to technology problems where possible, particularly ones that you do not understand deeply.
* **Regret 3:** using [RethinkDB](https://www.rethinkdb.com)
    * The app of course had to be realtime, it was a chat app, without it being realtime, its behaviour and feature-set was closer to a forum.
    * It was logical at the time to go with a realtime database.
    * The most attractive feature of rethink was a concept called 'change feeds', which would allow for a listener to be added to a database query. This, in theory would allow for listeners to update clients when a chat log received a new update.
    * A problem was that Rethink has not been adopted by many large companies, and as a result the community and subsequent support was non-existent.
    * They had more outages related to database problems than anything else.
    * Due to the lack of community knowledge, debugging anything was very difficult, it was hard to know where to even start with a problem.
    * They did not find an implementation where they could get change feeds to scale out of the box. In the time it took them to get change feeds working in a desirable manner, they could have just written a bit of pub/sub middleware for the server that would have produced the same behaviours.
    * **Lessson 3:** carefully choose core technologies based on how difficult they are to change later.
    * **Lessoon 4:** prioritise community size and active maintenence when choosing technologies, especially when in unfamiliar territory.
* **Regret 4:** using [DraftJS](https://draftjs.org) and WYSIWYG Editing
    * Tried to build their own editor for use in comments and posts, this turned out to be obsenely difficult and their first release was very buggy because of it.
    * In the end they ripped out their first implementation and replaced it with a lightweight markdown editor.
    * **Lesson 5:** Deliberately assess cutting edge tech, bias towards conservative choices. Will be the last time Max uses something new and shiny without proofing it out first.
    * **Lesson 6:** Be open with your roadmap to learn about your users priorities. Had Max have asked his users what they wanted before implementing, it would have been a little more obvious that they, as developers, would prefer a markdown editing experience anyway as that is what they are used to.

<div id='id-microfrontends'/>

### 14.20 - **Scaling Applications with Microfrontends** - [Max Gallo](https://github.com/maxgallo)

Works for a high profile entertainment streaming company called [DAZN](https://www.dazn.com/). Talk focuses on performance, scalability, and getting UI teams to a state where they can make decisions by themselves, without affecting other areas of the overall frontend product.

* There was a time when building a digital product consisted of just a single database, a monolithic backend and a SPA-style frontend. 
* The first evolution was to enable the backends to be scalable - enter the load balancer and instance duplication.
* The second evolution was the scale up the databases now that they had become the bottleneck, distributed databases were implemented at this point.
* Even after all of that evolution on the backend and database areas of the stack - the frontend remains the same.
* We still come up against the same issues nowadays that we always have when multiple teams work on the same codebase. There is a communication overhead for implementations because all decisions need to be checked off by all teams that work on the app. This is converse the backend stacks, where micro-services allow for teams and their areas of concern to be truely isolated, where they are free to make tech choices as they see fit.
* Describes a model similar to this but for the frontend (a Microfrontend). The split would occur across business domains, one team owns one business domain, and so they make updates in that one section only.
* Spotify implemented something a bit like this. They're original targets were the native platforms, they used a series of event buses written in C++ which would return iFrames full of content depending on what was requested, these were called spotlets. This meant that one team would be responsible for one spotlet, and the spotlets would be orchestrated together via the event bus layer. This particular model would allow for multiple spotlets to be present on one page, it is unclear how inter-spotlet communication and overall state management works.
* At DAZN they took a different approach. Each microfrontend is represented by a single page, and one team is responsible for that page and that page alone. When any page is requested from their site, a tiny `bootstrapper.js` file is returned, this behaves a little like our `scoutfiles` do. The only thing it will render out is a spinner, the rest is just orchestration; the bootstrapper will lift the requested route and make an API call to get that individual page from whereever it is hosted. It also sets of intercepts the current context (login status, saved state). All of this complexity is raised up out of the microfrontend and is shared.
* Interestingly Max was against the idea of component libraries, each team implements indivudally. The primary argument against them is again the communication overhead, having a share library would require teams to make agreements about things, which slows the process down. This way, teams can ship code whenever they want, if it is at different rates - that is OK. He said it is common for different pages to have different version numbers, which perfectly illustrates how they are managed by entirely separate teams.
* Interesting views in terms of serving separate frontends and keeping things highly modular, would be interesting to know how they orchestrate UX changes between teams, how that is even remotely kept in sync if they do not share common components.

<div id='id-svg'/>

### 14.50 - **An SVGs Tale** - [Elizabet Oliveira](https://github.com/miukimiu)

Design-focused talk, Elizabet chats about how SVG and React integrates really well with eachother if you plan things out well.

* Primary examples of how SVGs have won out in the war for graphics implementations on the web is the ability to style them using CSS and Javascript. Like other alternatives, their file size never changes, which makes them highly suitable for the web.
* Preference for using SVGs in an inline fashion, this is the only way to keep them flexible and stylable.
* Best way that Elizabet had found was to import them from a separate file and wrap them up as React components. This approach would allow for you to keep all of the benefits of the inline SVG, but not have to look at the massive code footprint that would be in your JSX. 
* Demoed a tape player component, which was made up of many smaller wrapped SVGs. The interesting part was that she could pass in props to each of the sub-components, which in turn would be mapped onto the style of the individual SVGs, seems like a really flexible and manageable way to build large graphics up.

<div id='id-coffee-break-2'/>

### 15.20 - Coffee Break

<div id='id-oss-awardsg'/>

### 15.50 - React Open Source Awards

Awards ceremony for the best open source project this year, there were alot of tools and packages that I had never heard of in this list so it would definitely be worth doing a bit of research on each to see if there is anything we could use. The most obvious one is `react-navigation`, would be interesting to see what this one is all about.

* Breakthrough of the year
    * [Linaria](https://github.com/callstack/linaria)
    * [Formik](https://github.com/jaredpalmer/formik)
    * [Immer](https://github.com/mweststrate/immer) (won)
    * [React-Navigation](https://reactnavigation.org/)
* Most exciting us of tech
    * [Remount](https://github.com/rstacruz/remount)
    * [Code surfer](https://github.com/pomber/code-surfer)
    * [VX](https://github.com/hshoff/vx) (won)
    * [Constate](https://github.com/diegohaz/constate)
* Fun side project of the year
    * [React95](https://github.com/React95/React95) (won)
    * [React-insta-stories](https://github.com/mohitk05/react-insta-stories)
* Most impactful contribute to the community
    * [React-testing-library](https://github.com/kentcdodds/react-testing-library
) (won) champions accessibility
    * [Detox](https://github.com/wix/Detox)
    * [React-Navigation](https://reactnavigation.org/)
    * [Downshift](https://github.com/downshift-js/downshift)
* Productivity booster
    * [Formik](https://github.com/jaredpalmer/formik)
    * [React-cosmos](https://github.com/react-cosmos/react-cosmos)
    * [Mdx-deck](https://github.com/jxnblk/mdx-deck) (won)
    * [React-table](https://github.com/tannerlinsley/react-table)

<div id='id-graphql-dev-experience'/>

### 16.10 - **The GraphQL Developer Experience** - Peggy Rayzis (missed)

<div id='id-one-on-one'/>

### 16.35 - **One-on-one Session** Andrey Okonetchnikov

Since the final few talks of the day weren't 100% relevant to what I am doing right now, I was lucky enough to get booked in with Andrey Okonetchnikov for a one-on-one session. The primary focus here was getting some critical feedback on our current iterations of the component library, Andrey is an expert in design systems and so his feedback was excellent and very useful.

* Impressed with how we are preferring to write composable sub-components for things like the header, really lends itself to a key characteristic of what a CL should be - flexible, but constrained.
* Asked opinions on using brand colours vs. practical names for situations like below. He suggested striking a compromise between the two and to have a mapping layer between the colour palette file (which would contain the names of the colours familiar to everyone in the org, including designers), and the practical names which denote what the colours mean in the context of the application.

```jsx
    <Button variant="primary">Test</Button>
    <Button variant="flexeraBlue">Test</Button>
```

* He agreed strongly that we should implement some kind of primitive component(s) that are responsible soley for positioning purposes. The idea here is that our actual components should not contain any spacing metadata at all, allowing them to be completely standalone. Most usefully, he demoed one of his own implementations, these primitives were called `box`, `flex` and `stack`, each exhibiting slightly different behaviours. `stack` was the only one we had time to demo, he passed 4 or 5 components into a stack and adjusted a prop, each nested component now had a bit of spacing around it. After seeing it in action, this is definitely something that we will want to do before the CL reaches its first consumers. The library that he was demoing was called [grid](https://github.com/rebassjs/grid) which is published under the rebass organisation (the same folks that put together styled-system).
* Was a fan of the react app we are using for the component library but would steer us strongly towards using something third party. I mentioned that we had used storybook in the past and although it had some good plugins, it was difficult to brand and to add good, structured documentation to. An alternative that he suggested was `styleguidist`, a project he had worked closely on. After demoing a few features, this seems like something that we really want to proof out, it had excellent plugin support for inline editing, code snippets, markdown can be used for documentation, and he showed off a plugin that generates a props table from static typescript (which is something that I literally was not smart enough to figure out a few months ago.) Overall this seems like it would be a good move, but it does need proofed out, a secondary concern is style parity with the design-kit repo, it was not 100% clear how much control and flexibility we get around styling of the overall site. If the CL usability is highly improved due to moving to styleguidist, it might be worth the potential style disparity. 
* Another good point he made about one of the other speakers was the use of booleans as props that signify visual things. He is not a fan of this approach due to the fact that combinations can leave a component in an odd state. For example `<Text type="secondary" isHero>My Title</Text>`, it would be strange to have a bit of typography with a `secondary` type to also look like a hero. Sticking to enumerated lists solves this problem.

<div id='id-webgl'/>

### 16.40 - **Painting Pixels with WebGL and React Hooks** - Ashi Krishnan (missed)

<div id='id-closing'/>

### 17.10 - Talks section closing and announcements

The conference has run every year since 2016, if you want to find out more, check out their [website](https://react.amsterdam/).