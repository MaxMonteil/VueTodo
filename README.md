# Vue Todo

Basic todo list application in Vue JS to test solutions to different problems.

## Repo Structure

This project is built on in tandem with a series of Medium posts. Each post introduces a problem and then explains a new concept that can be used to improve on the app.

This is where the different branches come in, they each represent the addition of a new feature or some major change and are kept around to enable readers to pick up where they want.

## Tackled Concepts

I don't have an end goal or plan in mind for the todo app, it really serves as a simple test bed for technologies and concepts I'd like to implement in larger projects.

### Form Reuse

Creating and editing elements uses very similar if not exact forms. To be able to reause a form there had to be a way to prepopulate a Vue component.

[DRY Vue: How to Reuse and Prepopulate Forms](https://medium.com/@mntlmaxi/dry-vue-how-to-reuse-and-prepopulate-forms-83068e142c70)

### Local Storage

Next is how to make your application data persist even without an internet connection. I looked at the different Client-Side storage solutions and opted for the localStorage API since it is so simple, just like the app.

[Make Your Vue App Last with Client-Side Storage](https://medium.com/@mntlmaxi/how-to-add-client-side-storage-with-vue-c6c72c301f23)

### Adding Vuex

Implementing localStorage was just a first step, to keep improving the application, it must be structured properly so here I add Vuex for state management and move all the localStorage code to it's own service file.

Same link as above.

### IndexedDB

Looking forward, I want to make this app a PWA and that requires using IndexedDB. This branch implements it and uses localStorage as a backup form of client-side storage.

[Make Your Vue App Last with IndexedDB](https://medium.com/@mntlmaxi/make-your-vue-app-last-with-indexeddb-66f02708830e)

### Implementing a Design System

I've been working on other Vue projects and as they increase in size, it becomes more difficult to manage styles. TailwindCSS looks like a great solution with which to manage various app wide styles.

## Future Improvements

* Deploy the app
* Full PWA
* Share Todo lists
* Make accounts
* Build a backend API
* Push Notifications
* Use server side rendering

This list is open to more ideas!
