# UXD Exercises

### Prepared 2017-09-10 by Mike Turley

This document is written with markdown and intended to be read in its HTML-rendered form. If you are reading the raw text of the README.md file, you should [read it on github.com](https://github.com/mturley/uxd-exercises) instead!

---

## Open Ended Questions

### Section 1 - Design & Development

#### Q1

> Could you outline what you would consider to be the important considerations If you were
asked to develop a web application that could potentially be used by thousands of users?

The first word that comes to mind when I consider an application of that size is scalability, or perhaps more generally sustainability.  And true scalability is made up of a bunch of factors like availability/reliability, security, performance/efficiency, usability, maintainability, and the agility of the development team. To break each of those down:

* Availability becomes difficult at scale, with increased load requiring things like load balancing, load testing, and replication, which can complicate an architecture. Adapting after the fact when you haven't properly accounted for this can be difficult. Reliability goes along with this, but also extends to all layers of the stack in proper error handling and prevention, and code with as few bugs as possible.
* Security is paramount when any vulnerabilities you have are exposed to thousands of users. The chances that the malicious among those users will find a way to compromise your system increase as a user base increases. So it is important to get this stuff right. A lot of that can be accomplished by using modern tools and best practices.
* Performance of the application's computation is important, because when you are serving thousands of users, the cycles your server has to consume for each user can add up quickly. If you write efficient code, and ensure you are using computing and storage resources responsibly, costs will go down and reliability will go up.
* Usability is very important and often overlooked, especially in the enterprise space. If you have to explain an interface too much, it's not very well designed; ideally a user should be able to pick up your application with no guidance and figure it out. However, identifying these gaps in the discoverability of usability and filling them with help content and related helpful things is important too, because an app will never be perfectly usable for everyone. Good patterns for usability can be found and leveraged from the community for many use cases.
* Maintainability is very important, and something to consider sometimes as an alternative to rushing kludges and quick fixes out the door. A maintainable code base is one that can react quickly to changes, and grow with scale reliably and more predictably. Focusing on clean coding patterns and style rules goes a long way, and produces readable and sensible code that will make everyone's jobs easier.
* Agility in response to both problems and user feedback are very important to the quality of an application. a team that can bounce back quickly from a failure or listen to real users and implement suggestions is a responsive and agile team, and their product will stand out against competitors. SaaS and "the cloud" make this especially easy to achieve.

#### Q2

> What techniques do you employ to keep up-to-date with the rapid pace of progress in the
field of frontend development? How do you choose which technologies are worth taking the
time to learn more about?

I try to keep myself exposed to a reasonable number of industry news sources, and keep the chatter of the development community an arm's reach away. For me this means following certain communities on social media, subscribing to certain feeds and podcasts, and reading news articles about certain topics when they come up. I also talk to my friends and colleagues, and see what they are working on and what they are learning about. Another great technique is to keep up with new technologies, patterns and tools by using publicly available learning resources, like open courseware from schools and video lectures made available online.

I try to learn about as many relevant new technologies as possible and see how the community is reacting to them. When best practices emerge, I like to try and make time for side projects to learn hands-on how to solve problems in new ways and with new tools. Sharing these projects and collaborating with friends and the community are great for this as well as for everyone. Usually the best technologies will emerge as a consensus from the community, or from ratings on package managers, or from experiences in certain case studies. Different use cases and problems require different tools, and I try to learn about all the best ones and the ones that might be a little experimental, and try what I can.

### Section 2 - Testing & Deployment

#### Q1

> Describe the approach you take in testing your applications.

I try to write unit tests to cover as much code as possible, and design code to be as testable as possible. When you can separate components and mock their interactions with other concerns, it encourages good clean architecture and well defined interfaces, and it enables thorough testing. 100% branch, line, and statement coverage is always the goal, and I sometimes even go so far as to set a threshold in my builds so that if test coverage falls below something like 75%, the build will fail.

Unit testing and other automated testing is great, but it's not going to cover everything. QA performed by humans is also still necessary, because you're not going to know to write a test for that one visual quirk, or confusing bit of wording, or convoluted way to find a function of an interface, or a bug you haven't thought about. Testing applications for usability as well as stability, and writing new tests for any issues found that are testable, is an important part of making sure a release is ready for production.

When I am helping to plan release schedules, I am sure to leave plenty of time for testing, so nothing gets rushed out the door and as few bugs as possible make it to the end user. Time for feedback from real users is also quite valuable to make sure things work the way users need them to.

#### Q2

> What do you value in a code base?

I touched on maintainability in the first question above, and it definitely has a lot of impact on the ability of a team to deliver meaningful results with a code base. Finding and following best practices will steer you away from falling into problems that are already solved by someone else. Picking a standard set of code style rules is often useful; I like the [Airbnb JavaScript Style Guide](https://github.com/airbnb/JavaScript) lately. A set of rules like this can be strictly enforced by linting tools that can be made part of the build, so even things as small as inconsistent whitespace can be things that break the build. Code formatting tools can also be a nice extra step to automatically fix these kinds of issues. When we can establish common patterns and enforce that they are used consistently, it will result in a much more solid codebase that is easy to read and harder to make a mess of. Readable code, with sensible comments where things get confusing, and well defined style, is the best tool you can have for understanding your system.

Beyond things you can automate, I also value good code design and code that is factored well to avoid duplication and stay as [DRY](http://wiki.c2.com/?DontRepeatYourself) as possible. There should be a single source of truth, wherever possible, for every definition, whether it is a value or a behavior. The patterns you need to avoid repetition are the same patterns you need to create a clean structure. Consistency in style decisions, especially in a language like JavaScript where there are so many ways to solve any particular problem, is also very helpful-- pick one way of doing something and stick with it, where possible. Architecture decisions should be made as early as possible with as much consideration for the future as possible, with things like localization, framework choices, and build processes considered well before they become problems.

Another really valuable thing to have in a code base is good developer documentation. Documentation shouldn't be exhaustive and long-winded, because that's hard to maintain, but it should be thorough enough that someone unfamiliar can clone the repo and pick up working on a story with little to no hand-holding by other team members.

### Section 3 - General

#### Q1

> What do you find most exciting or interesting about working in the software development
field?

I have always loved creating things. Computers give us the ability to do what seems like making something out of nothing: I can create something meaningul with my computer, without using any resources aside from my time and a little electricity. I can sit down and type in special languages to manipulate devices into presenting user experiences, automating problems, analyzing data and more. If I put in the time to create an application, I can distribute it nearly instantly on the internet and make copies without exorbitant costs of production that come with other kinds of products.

Computers will always be relevant and the world will always need computer scientists. We are never truly done working on our user experiences, and there will always be changes that need smart people to account for them, new technologies that we will learn to leverage, and cool new problems that need solving. There are a lot of very exciting things happening right now in AI, Machine learning, Big data, and other buzzword-worthy subfields of CS. Applications of many of these new developments will be numerous and interesting, and will make for a great many opportunities for engineers like myself.

I am passionate about creating great user experiences, and that extends all the way down the stack. I am always looking for new ways we can enable people and make cool things possible with computers.

#### Q2

> In your career to date, what are you most proud of and why?

This is a tough one. I am going to cheat and give two examples, because I want to give a more abstract answer and a more concrete example.

I'll start with a concrete, and actually recent, example which I think is the accomplishment I am most proud of since I graduated college and "officially" started programming professionally. At a team hackathon in January, I decided that the filtering capabilities of the UI were insufficient, and that to ask real interesting questions about our data we needed something more flexible. I produced a proof of concept within that 2 day hackathon that could apply arbitrarily nested boolean logic to the collections in our elasticsearch cluster, as specified in a UI of deeply nested filter controls. In the proof of concept these were all key/value text boxes, but the team became convinced this was a great idea and we soon designed and implemented a bunch of custom filter controls for each type of property you might want to filter on in the tree, and laid these out visually in an easy to understand and easy to edit manner. Only a few months after I initially came up with the POC, we released it to customers and it took off, people creating new reports and useful ways to find systems with specific problems or specific sales opportunities. I was very proud that something I came up with became a great benefit for an enterprise product in use by hundreds of people.

The second, more abstract example I have is that I am proud of every decision I made that led to the opportunities I have encountered. During college I took some time off to work, make some money to more easily afford tuition and grow a little more before I finished my degree. I responded to an ad I found on reddit's /r/forhire community, and that led to a job doing Wordpress websites with a small team in Cambridge. That team grew and took on larger projects, culminating in a contract for a pretty large textbook reading / note-taking application project with publisher partners, that earned me enough money to go back to school. Having this on my resume led me to do well in interviews, get other jobs and eventually an internship at Amazon, which made me look good when interviewing with Hewlett Packard Enterprise, and now I have tons of experience including two huge names in the industry on my resume. I have made a bunch of good decisions, been very lucky, and worked very hard to get to where I am, and I believe the potential I have set myself up for is considerable. That is what I am truly most proud of.

---

## Practical Exercises

### Exercise 1 - Debugging Async Code

The bug in this code is that it tries to use the results of the two number services immediately (synchronously), but the services are asynchronous, they don't return their values right away. So the results need to be handled in the callbacks themselves, after "loading" the numbers. I made a simple fix that involves checking to see if both numbers are ready after each is loaded and conditionally triggering the math, and then I went further to implement a better solution using Promises. (Note: I am aware of the async/await pattern, and I'm starting to realize we should all move to it, but Promises is what I'm used to for now and it's better than regular callbacks.)

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

The `ex3` subdirectory is an **[npm](https://www.npmjs.com/)** package containing a small web application built with **[React](https://facebook.github.io/react/)** and **[Redux](http://redux.js.org/)**, compiled with **[Babel](https://babeljs.io/)**, bundled with **[webpack](https://webpack.js.org/)** and packaged with **[npm](https://www.npmjs.com/)**.  A live **[Heroku](https://www.heroku.com/)** deployment of this application is running at http://uxd-ex3.herokuapp.com/.

To install and run the application in development mode, you can run:

```
cd ex3
npm install
npm test     # To run and verify the unit tests
npm start    # To start the webpack-dev-server on port 8080
```

And then navigate a browser to http://localhost:8080/. You can also produce a production bundle for deployment to a server with:

```
npm run build-prod
node publicServer.js  # Will point a server at the new bundle and open a browser to it.
```

The ex3 package has been configured to be deployable on Heroku as well (and could be configured for other kinds of hosts). To run a full production deployment on your own Heroku account, you can (after installing the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)) run:

```
heroku login
heroku create some-app-name
heroku git:remote -a some-app-name
git subtree push --prefix ex3 heroku master
```

When the deployment completes, the application will be accessible at http://some-app-name.herokuapp.com/.

Note that we can't push the whole repo directly to heroku master, because Heroku will expect an application at the repo root. We use `git subtree push` instead to push only the `ex3` directory.

These are the tools in my front-end bundle, and why I chose to use them:

* **React** is reliable, maintainable, declarative, expressive, powerful, easy, and hip right now. I prefer it for my view layer in most projects, although Angular and Vue and many other awesome alternatives are great too. My choice of UI framework will always depend on the project, although I tend to reach for React first these days.
* **Redux** is a lightweight state container that I discovered recently, and I wish I had found it years ago. It makes everything into a big state machine, and provides a great pattern for connecting React components to a data layer. I use it to manage API requests, data, and application state. The requests themselves are made with [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) (chosen over popular AJAX libraries because it will soon be a web standard, and [polyfilled](https://en.wikipedia.org/wiki/Polyfill) for the browsers that don't support it). I choose to use Redux most of the time because I enjoy its patterns, but [I don't always use it](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).
* **Babel** enables me to use modern [ES6+](http://es6-features.org/) language features and React's optional [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) element syntax, by transpiling these into plain JavaScript (ES5) for support in all browsers.
* **webpack** makes for a very convenient deployment artifact, is becoming the standard for modern web app bundling, and provides fancy development tools that I enjoy using.
* **npm** comes along with using Node, and it provides a dead-simple `scripts` option in `package.json` for adding build tasks to your Node package without needing the bulk of additional build tools like Gulp, Grunt, or Maven.

I took the following steps to build this application:

* [6b09de3](https://github.com/mturley/uxd-exercises/commit/6b09de337e73f5e258836644ab0d1721c91a4b6d): I started with a small template called [redux-minimal](https://redux-minimal.js.org/) after discarding an initial create-react-app project for my React/Redux "Hello World". I didn't want all the boilerplate added by create-react-app, and I agree with most of the dependency decisions made by redux-minimal, but I want a slightly different set of packages. So I'll be messing with this template.
* [cde2526](https://github.com/mturley/uxd-exercises/commit/cde2526ea9661f2a5cee33b7a21bdbe29c239e6f): I removed some more stuff that we don't really need here which came with redux-minimal, including the Bootstrap CSS framework (I prefer to use alternatives so the whole web doesn't look like Bootstrap).
* [89530cd](https://github.com/mturley/uxd-exercises/commit/89530cdba2faa972eaf9e1e2417ae925ab9ed6ca): I added the [material-ui](http://www.material-ui.com/) package (A React implementation of Google's Material Design UI spec) to provide some nice page components. I also replaced the redux-saga middleware provided by redux-minimal with the simpler redux-thunk middleware. (I'm not really a huge fan of the ES6 Generators used by redux-saga, at least not yet...)
* [e8aaf60](https://github.com/mturley/uxd-exercises/commit/e8aaf6058fa3c9e4809346ce9da7db7cbfcb5688): I created a stub UsersTable component with inline rows (no data loaded yet)
* [232284c](https://github.com/mturley/uxd-exercises/commit/232284c5b802216562272cf6e4ab9db14c1d8d4c): I decided to install [eslint](https://eslint.org/) and use it to enforce the [Airbnb JavaScript Style Guide](https://github.com/airbnb/JavaScript) because I was a bit frustrated with the lack of consistent style in the redux-minimal template. I might have to send them a PR or two! I also enabled source-maps in this commit.
* [df432cf](https://github.com/mturley/uxd-exercises/commit/df432cf2a3f3ba4ef7b7908bd637db1607ac8466): I added a reducer for the state of the Users data and wired up the fetch() request to load it.
* [9d71fd4](https://github.com/mturley/uxd-exercises/commit/9d71fd4634ace41682491f640c7d8a455b4ceffe): I finished rendering the users table from the loaded JSON data.
* [3c8dfb5](https://github.com/mturley/uxd-exercises/commit/3c8dfb5a9a606783ec94d7a875939f204ef905e6): I added the row selection handler, and made sure the users were sorted properly.
* [96bf266](https://github.com/mturley/uxd-exercises/commit/96bf266087a0b7f3b96aac84e97db80be5bfa329): I added the User Detail page with stub contents, and connected it to the routing / selection so you can click back and forth.
* [22b6bfd](https://github.com/mturley/uxd-exercises/commit/22b6bfdb705fd1e43401333e83d0d629764f06d6): I finished implementing the User Detail page and did some general refactoring and cleanup.
* [833f873](https://github.com/mturley/uxd-exercises/commit/833f873af8b9df81f73c446f501b3fb077c62ea4): I wrote unit tests for the reducer and action creator, and installed [istanbul](https://istanbul.js.org/) for code coverage reporting.
* [4ece421](https://github.com/mturley/uxd-exercises/commit/4ece421bd094f8f30673c662e60b0f68f2b62900): I wrote unit tests for the components and helper functions and fixed a few minor edge cases that came up.
* [2c5e46b](https://github.com/mturley/uxd-exercises/commit/2c5e46bc2dd0c87e67a76da463f665d4133b2f9c): I added a small express server to host the compiled bundle, to support Heroku deployment.

---

### Thank you!

Thanks for taking the time to read my responses!  I hope my efforts to impress are evident, and I look forward to further interesting discussions.
