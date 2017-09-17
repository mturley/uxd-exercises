# UXD Exercises

### Prepared 2017-09-10 by Mike Turley

This document is written with markdown and intended to be read in its HTML-rendered form. If you are reading the raw text of the README.md file, you should [read it on github.com](https://github.com/mturley/uxd-exercises) instead!

Thanks for taking the time to read my responses!  I hope my efforts to produce robust, readable code are evident, and I look forward to further interesting discussions!

---

# HEY! I'M NOT DONE YET.

Wow, you found this really early... hold on a few hours! I'm still working on it.

---

## Open Ended Questions

### Section 1 - Design & Development

#### Q1

> Could you outline what you would consider to be the important considerations If you were
asked to develop a web application that could potentially be used by thousands of users?

TODO: ANSWER!

#### Q2

> What techniques do you employ to keep up-to-date with the rapid pace of progress in the
field of frontend development? How do you choose which technologies are worth taking the
time to learn more about?

TODO: ANSWER!

### Section 2 - Testing & Deployment

#### Q1

> Describe the approach you take in testing your applications.

TODO: ANSWER!

#### Q2

> What do you value in a code base?

TODO: ANSWER!

### Section 3 - General

#### Q1

> What do you find most exciting or interesting about working in the software development
field?

TODO: ANSWER!

#### Q2

> In your career to date, what are you most proud of and why?

TODO: ANSWER!

## Practical Exercises

### Exercise 1 - Debugging Async Code

The bug in this code is that it tries to use the results of the two number services immediately (synchronously), but the services are asynchronous, they don't return their values right away. So the results need to handled in the callbacks themselves, after "loading" the numbers. I made a simple fix that involves checking to see if both numbers are ready after each is loaded and conditionally triggering the math, and then I went further to implement a better solution using Promises. (Note: I am aware of the async/await pattern, and I'm starting to realize we should all move to it, but Promises is what I'm used to for now and it's better than regular callbacks.)

The buggy code provided in the PDF is included at `ex1/remoteMathService-buggy.js`, and my solution code is located at `ex1/remoteMathService-fixed.js` and `ex1/remoteMathService-promises.js`. Mocha unit tests are located at `ex1/test/test.js`. The `ex1` directory is an npm package, just so that it can depend on mocha and have a `test` script for convenience. To run and verify the tests:

```
cd ex1
npm install
npm test
```

Note that the first unit test checks for the presence of the bug (i.e. the test will pass if the code is buggy in the expected way), rather than being a test of the desired result which would fail if the code is buggy.  This way, all tests should pass in `ex1`.

I took the following steps to debug this code. If you are curious, I contained the changes for each of these steps in its own commit, and I'll leave links to each commit in the list.

* [2d791f8](https://github.com/mturley/uxd-exercises/commit/2d791f854ac29e93dd8018104d9b6135f1122605): I removed all the `return` statements, because none of the return values were actually being used (`remoteMathService()`'s return value is never used, and in fact can't be, because it must become asynchronous code, and the return value of the callback `cb` passed to `callOneService` and `callTwoService` is only used as the return value in the setTimeout callbacks of these functions, where it doesn't go anywhere). The real data we want here can only be accessed asynchronously, so these synchronous returns are just confusing here.
* [a2552e5](https://github.com/mturley/uxd-exercises/commit/a2552e5e0959a20644b7cb383597815812aeab6e): I moved the `cb(undefined, one + two)` call into a new inner helper function `doMath`, since we'll need to call it in both service callbacks.
* [644ed58](https://github.com/mturley/uxd-exercises/commit/644ed58fe6454d224b7c62100debc6dea0931d3f): I added the condition to check if both numbers are defined before doing math, renamed the helper to `doMathIfReady`, and moved the helper call into the handlers for `callOneService` and `callTwoService` after each number variable is assigned. Also assigned `null` to `one` and `two` by default and checked for non-null instead of undefined to make the check more explicit. This fixes the bug, and we get "correct" output.
* [7f74755](https://github.com/mturley/uxd-exercises/commit/7f74755c03c6af86823929272cb5cb6dcada94f3): This code begs for the Promises pattern, so I didn't stop there... I made a copy of the file at `ex1/remoteMathService-promises.js` to rewrite my solution using Promises.
* [a0375af](https://github.com/mturley/uxd-exercises/commit/a0375af8f08a79a7cf5b6695faf24589b3eaf37b): I got rid of `doMathIfReady`, we can use Promises to simply wait until we get back from both service callbacks to proceed to the final answer callback. So I converted each service call into a Promise and used `Promise.all().then()` to call them both and handle both results. This once again runs and gets us "correct" output, but it's got a little code duplication in the two promises.
* [8816611](https://github.com/mturley/uxd-exercises/commit/881661131c7d8ec0730fe4280aab48f8344387f3): To be a little more [DRY](http://wiki.c2.com/?DontRepeatYourself), I moved the `new Promise` into a single `callServicePromise` helper that takes one of the two services as an argument and returns a promise that resolves with the number from that service. This also means we don't need to store the resulting numbers in local variables anymore, we can just use the value passed to each `resolve()` in our `then()` handler. So I removed `var one, two` and, calling my `callServicePromise` helper with each service, we get `one` and `two` out as `result[0]` and `result[1]`. Once again "correct" output.
* I could keep going, and make the two services themselves return Promises to make this all easier, but I think I've made my point, so I'll stop here... it's just `1 + 2 === 3` after all.
* [95526dd](https://github.com/mturley/uxd-exercises/commit/95526dd61dd9f4b20602997c542f5d293d56c78a): I added unit tests, which involved giving each remoteMathService file a `module.exports` declaration.

### Exercise 2 - Vanilla CSS

My solution HTML and CSS for this exercise are located at `ex2/box.html` and `ex2/box.css`. You can simply view the `box.html` file in a browser directly from your local filesystem, or you can view it on Github Pages at https://mturley.github.io/uxd-exercises/ex2/box.html.

The page is fully responsive, a CSS media query changes some styles at screen widths below 450px. Shrink your browser window or use the Chrome Dev Tools "Device Mode" to see the "mobile version" of the page.

I have copied the requirements for this exercise from the PDF to `ex2/REQUIREMENTS.md` for reference. I have also provided screenshots of my solution in both desktop and mobile modes at `ex2/box-screenshot-desktop.png` and `ex2/box-screenshot-mobile.png`.

### Exercise 3 - Sample Project

The `ex3` subdirectory is an **[npm](https://www.npmjs.com/)** package containing a small web application built with **[React](https://facebook.github.io/react/)** and **[Redux](http://redux.js.org/)**, compiled with **[Babel](https://babeljs.io/)**, bundled with **[webpack](https://webpack.js.org/)** and packaged with **[npm](https://www.npmjs.com/)**.

I decided to use these tools in my stack because:

* **React** is reliable, maintainable, declarative, expressive, powerful, easy, and hip right now. I prefer it for my view layer in most projects, although Angular and Vue and many other awesome alternatives are great too. My choice of UI framework will always depend on the project, although I tend to reach for React first these days.
* **Redux** is a lightweight state container that I discovered recently, and I wish I had found it years ago. It makes everything into a big state machine, and provides a great pattern for connecting React components to a data layer. I use it to manage API requests, data, and application state. The requests themselves are made with [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) (chosen over popular AJAX libraries because it will soon be a web standard, and [polyfilled](https://en.wikipedia.org/wiki/Polyfill) for the browsers that don't support it). I choose to use Redux most of the time because I enjoy its patterns, but [I don't always use it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).
* **Babel** enables me to use modern [ES6+](http://es6-features.org/) language features and React's optional [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) element syntax, by transpiling these into plain JavaScript (ES5) for support in all browsers.
* **webpack** makes for a very convenient deployment artifact, is becoming the standard for modern web app bundling, and provides fancy development tools that I enjoy using.
* **npm** comes along with using Node, and it provides a dead-simple `scripts` option in `package.json` for adding build tasks to your Node package without needing the bulk of additional build tools like Gulp, Grunt, or Maven.

I find the above stack to be an elegant and performant solution to the front-end needs of most web applications today, perhaps with the addition of some more interesting visualization frameworks.

I took the following steps to build this application:

* [6b09de3](https://github.com/mturley/uxd-exercises/commit/6b09de337e73f5e258836644ab0d1721c91a4b6d): I started with a small template called [redux-minimal](https://redux-minimal.js.org/) after discarding an initial create-react-app project for my React/Redux "Hello World". I didn't want all the boilerplate added by create-react-app, and I agree with most of the dependency decisions made by redux-minimal, but I want a slightly different set of packages. So I'll be messing with this template.
* [cde2526](https://github.com/mturley/uxd-exercises/commit/cde2526ea9661f2a5cee33b7a21bdbe29c239e6f): I removed some more stuff that we don't really need here which came with redux-minimal, including the Bootstrap CSS framework (I prefer to use alternatives so the whole web doesn't look like Bootstrap).
* [89530cd](https://github.com/mturley/uxd-exercises/commit/89530cdba2faa972eaf9e1e2417ae925ab9ed6ca): I added the [material-ui](http://www.material-ui.com/) package (A React implementation of Google's Material Design UI spec) to provide some nice page components. I also replaced the redux-saga middleware provided by redux-minimal with the simpler redux-thunk middleware. (I'm not really a huge fan of the ES6 Generators used by redux-saga, at least not yet...)
* [e8aaf60](https://github.com/mturley/uxd-exercises/commit/e8aaf6058fa3c9e4809346ce9da7db7cbfcb5688): I created a stub UsersTable component with inline rows (no data loaded yet)
* [232284c](https://github.com/mturley/uxd-exercises/commit/232284c5b802216562272cf6e4ab9db14c1d8d4c): I decided to install [eslint](https://eslint.org/) and use it to enforce the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) because I was a bit frustrated with the lack of consistent style in the redux-minimal template. I might have to send them a PR or two! I also enabled source-maps in this commit.
* [df432cf](https://github.com/mturley/uxd-exercises/commit/df432cf2a3f3ba4ef7b7908bd637db1607ac8466): I added a reducer for the state of the Users data and wired up the fetch() request to load it.
* [9d71fd4](https://github.com/mturley/uxd-exercises/commit/9d71fd4634ace41682491f640c7d8a455b4ceffe): I finished rendering the users table from the loaded JSON data.
* [3c8dfb5](https://github.com/mturley/uxd-exercises/commit/3c8dfb5a9a606783ec94d7a875939f204ef905e6): I added the row selection handler, and made sure the users were sorted properly.
* [96bf266](https://github.com/mturley/uxd-exercises/commit/96bf266087a0b7f3b96aac84e97db80be5bfa329): I added the User Detail page with stub contents, and connected it to the routing / selection so you can click back and forth.
* [22b6bfd](https://github.com/mturley/uxd-exercises/commit/22b6bfdb705fd1e43401333e83d0d629764f06d6): I finished implementing the User Detail page and did some general refactoring and cleanup.
