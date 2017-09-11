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

### Exercise 1

The buggy code provided in the PDF is included at `ex1/remoteMathService-buggy.js`, and my solution code is located at `ex1/remoteMathService-fixed.js`. To run and verify the tests, use the following commands:

```
cd ex1
mocha test/test-buggy.js # TODO VALIDATE THESE COMMANDS AFTER WRITING THE TESTS
mocha test/test-fixed.js
```

I took the following steps in debugging this code:

* Removed all the `return` statements, because none of the return values were actually being used (`remoteMathService()`'s return value is never used, and in fact can't be, because it must become asynchronous code, and the return value of the callback `cb` passed to `callOneService` and `callTwoService` is only used as the return value in the setTimeout callbacks of these functions, where it doesn't go anywhere). The real data we want here can only be accessed asynchronously, so without some kind of promise pattern or other purpose, these synchronous returns are just confusing here.
* Moved the `cb(undefined, one + two)` call into a new inner helper function `doMath`, since we'll need to call it in both service callbacks.
* Added the condition to check if both numbers are defined before doing math, renamed the helper to `doMathIfReady`, and moved the helper call into the handlers for `callOneService` and `callTwoService` after each number variable is assigned. Also assigned `null` to `one` and `two` by default and checked for non-null instead of undefined to make the check more explicit. This fixes the bug, and we get "correct" output.
* This code begs for the Promises pattern, so I didn't stop there... I made a copy of the file at `ex1/remoteMathService-promises.js` to rewrite my solution using Promises.

### Exercise 2

My solution HTML and CSS for this exercise are located at `ex2/box.html` and `ex2/box.css` respectively. You can simply view the `box.html` file in a browser directly from your local filesystem, or point a web server at it.

I have copied the requirements for this exercise from the PDF to `ex2/REQUIREMENTS.md` for reference.

### Exercise 3

The `ex3` subdirectory is an **[npm](https://www.npmjs.com/)** package containing a small web application built with the following stack:

* A Web UI implemented in JavaScript with **[React](https://facebook.github.io/react/)** and **[Redux](http://redux.js.org/)**
* A REST API implemented in JavaScript with **[Node.js](https://nodejs.org/en/)** and **[Express](https://expressjs.com/)**
* A **[SQLite](https://www.sqlite.org/)** database
* Compiled, Bundled and Packaged with **[Babel](https://babeljs.io/)**, **[webpack](https://webpack.js.org/)** and **[npm](https://www.npmjs.com/)**, respectively.

I decided to use these tools in my stack because:

* **React** is reliable, maintainable, declarative, expressive, powerful, easy, and hip right now. I prefer it for my view layer in most projects, although Angular and Vue and many other awesome alternatives are great too. My choice of UI framework will always depend on the project, although I tend to reach for React first these days.
* **Redux** is a lightweight state container that I discovered recently, and I wish I had found it years ago. It makes everything into a big state machine, and provides a great pattern for connecting React components to a data layer. I use it to manage API requests, data, and application state. The requests themselves are made with [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) (chosen over popular AJAX libraries because it will soon be a web standard, and [polyfilled](https://en.wikipedia.org/wiki/Polyfill) for the browsers that don't support it). I choose to use Redux most of the time because I enjoy its patterns, but [I don't always use it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).
* **Node.js** and **Express** are easy server and framework choices for a quick-and-dirty minimalist webapp backend, they meet the needs of the exercise, and they offer the convenience of writing the whole thing front-to-back in one language.
* **SQLite** is a small and simple database, good for one-off projects because it stores its data in-place on the disk. SQL in general fits because the data in this exercise is relational. On another project, I might use a different SQL database or a different database entirely. I considered MongoDB for this project for ease of use, but SQLite was a better fit.
* **Babel** enables me to use modern [ES6+](http://es6-features.org/) language features and React's optional [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) element syntax, by transpiling these into plain JavaScript (ES5) for support in all browsers.
* **webpack** makes for a very convenient deployment artifact, is becoming the standard for modern web app bundling, and provides fancy development tools that I enjoy using.
* **npm** comes along with using Node, and it provides a dead-simple `scripts` option in `package.json` for adding build tasks to your Node package without needing the bulk of additional build tools like Gulp, Grunt, or Maven.

I find the above stack to be an elegant and performant solution to the needs of most simple web applications today, perhaps with the addition of some more intense data infrastructure and API technologies at the bottom end of the stack instead of SQLite/Express/Node.
