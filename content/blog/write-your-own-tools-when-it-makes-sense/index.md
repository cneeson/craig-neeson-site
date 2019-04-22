---
title: Write your own tools when it makes sense to
date: '2019-04-13T23:59:59.121Z'
timeToRead: '3 minute'
isNote: false
isPublished: false
---

WIP article, telling the story of how long it took to go through the various iterations of this blog site

One of the themes for me personally this year is attempting to lean less on frameworks and utilities. My primary side-project has been building the platform for this blog, and with that came the opportunity to choose which bits of the stack that I wanted to vendor in, and which bits I wanted to write from scratch. Inspired by an [article](https://medium.com/fibery/make-your-own-tools-e0f6cdb81a35) by [Michale Dubakov](https://medium.com/@mdubakov), I planned out the architecture for my highly-available, over-engineered blog platform, with a view that consumers may eventually require an API to query my posts. I set to work building out different layers in the stack including a 