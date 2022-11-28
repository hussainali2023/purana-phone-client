import React from "react";

const Blogs = () => {
  return (
    <div className=" mx-2 my-2 md:mx-16 md:my-10">
      <section className="bg-gray-700 text-gray-100 rounded-md">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mb-4">
            Interview Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1. What are the different ways to manage a state in a React
                application?
              </summary>
              <p className=" p-4 text-gray-200">
                <h3 className=" font-bold text-white">
                  The Four Kinds of React State to Manage
                </h3>{" "}
                There are four main types of state you need to properly manage
                in your React apps:
                <ol className=" ml-4 list-decimal">
                  <li className=" ">Local state</li>
                  <li>Global state</li>
                  <li>Server state</li>
                  <li> URL state</li>
                </ol>
                <p>
                  <strong>Local (UI) state –</strong>
                  Local state is data we manage in one or another component.
                  Local state is most often managed in React using the useState
                  hook. For example, local state would be needed to show or hide
                  a modal component or to track values for a form component,
                  such as form submission, when the form is disabled and the
                  values of a form’s inputs.
                </p>
                <br />
                <p>
                  <strong>Global (UI) state –</strong> Global state is data we
                  manage across multiple components. Global state is necessary
                  when we want to get and update data anywhere in our app, or in
                  multiple components at least. A common example of global state
                  is authenticated user state. If a user is logged into our app,
                  it is necessary to get and change their data throughout our
                  application. Sometimes state we think should be local might
                  become global.
                </p>{" "}
                <br />
                <p>
                  <strong>Server state –</strong> Data that comes from an
                  external server that must be integrated with our UI state.
                  Server state is a simple concept, but can be hard to manage
                  alongside all of our local and global UI state. There are
                  several pieces of state that must be managed every time you
                  fetch or update data from an external server, including
                  loading and error state. Fortunately there are tools such as
                  SWR and React Query that make managing server state much
                  easier.
                </p>{" "}
                <br />
                <p>
                  <strong>URL state –</strong> Data that exists on our URLs,
                  including the pathname and query parameters. URL state is
                  often missing as a category of state, but it is an important
                  one. In many cases, a lot of major parts of our application
                  rely upon accessing URL state. Try to imagine building a blog
                  without being able to fetch a post based off of its slug or id
                  that is located in the URL!
                </p>
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                2. How does prototypical inheritance work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
                When it comes to inheritance, JavaScript only has one construct:
                objects. Each object has a private property which holds a link
                to another object called its prototype. That prototype object
                has a prototype of its own, and so on until an object is reached
                with null as its prototype. By definition, null has no
                prototype, and acts as the final link in this prototype chain.
                It is possible to mutate any member of the prototype chain or
                even swap out the prototype at runtime, so concepts like static
                dispatching do not exist in JavaScript.
                <br /> <br /> While this confusion is often considered to be one
                of JavaScript's weaknesses, the prototypical inheritance model
                itself is, in fact, more powerful than the classic model. It is,
                for example, fairly trivial to build a classic model on top of a
                prototypical model — which is how classes are implemented.
                <br />
                <br />
                Although classes are now widely adopted and have become a new
                paradigm in JavaScript, classes do not bring a new inheritance
                pattern. While classes abstract most of the prototypical
                mechanism away, understanding how prototypes work under the hood
                is still useful.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                3.What is a unit test? Why should we write unit tests?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
                Unit testing is a software development process in which the
                smallest testable parts of an application, called units, are
                individually and independently scrutinized for proper operation.
                This testing methodology is done during the development process
                by the software developers and sometimes QA staff. The main
                objective of unit testing is to isolate written code to test and
                determine if it works as intended.
                <br /> <br /> Unit testing is an important step in the
                development process, because if done correctly, it can help
                detect early flaws in code which may be more difficult to find
                in later testing stages.
                <br /> <br /> Unit testing is a component of test-driven
                development (TDD), a pragmatic methodology that takes a
                meticulous approach to building a product by means of continual
                testing and revision. This testing method is also the first
                level of software testing, which is performed before other
                testing methods such as integration testing. Unit tests are
                typically isolated to ensure a unit does not rely on any
                external code or functions. Testing can be done manually but is
                often automated.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                4. React vs. Angular vs. Vue?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-200">
                <strong>Angular JS</strong> AngularJS was first released by
                Google in 2010 as a framework for building web applications. The
                Angular 2 framework appeared in 2016, which is a total rewrite
                of the original AngularJS framework. There have been several new
                versions since then. The most recent is currently Angular 13. A
                lot of single-page applications are created using this JS
                framework, which is open-source and free. As it is based on the
                MVW architecture, it has become a very popular choice for
                building cross-platform apps. It offers both client-side MVC and
                MVVM architecture, which makes the development of JavaScript
                applications easier for developers. A lot of businesses are
                using the advantages of outsourcing their development to the
                AngularJs development company.
                <br />
                <br />
                <strong>React JS</strong> In 2013, Facebook released React as a
                tool to combat the problems triggered by high volumes of traffic
                that were generated by its Facebook ads. However, it also
                resolved issues related to coding and maintenance. In short, it
                is a popular framework for JS developers who want to develop
                single-page websites as well as mobile applications. The Js
                framework is open-source, accessible to everyone, and contains
                features that will help you create iPhone and Android
                applications. Nowadays, large businesses are using React to
                build their web apps. In addition, it is also well known for its
                ability to render top-notch support for the development of
                interactive user interfaces. As of October 2020, the latest
                stable version of the application came out 17. X. It is actually
                a JavaScript library used to build UIs for web and mobile
                applications. The technology is now supported by both Facebook
                and Instagram (Now Meta) and has developed into an essential
                part of the endless feed functionality in these applications. In
                terms of React’s sphere of use, it is a JS library with a
                limited range of applications, however, when combined with other
                libraries, it becomes a powerful solution, making it a
                competitive tool against Angular.
                <br />
                <br />
                <strong>Vue Js</strong>
                Evan You, a former employee of Google who worked on Angular when
                he was a Googler, created the Vue framework. Vue.JS is a
                lightweight, powerful, open-source framework that can handle all
                kinds of web applications and be released in the year 2014. In
                terms of the development of single-page applications, the
                application of component composition technique is in high
                demand, particularly for the user interface. As a result of the
                combination of React.js and AngularJS, developers can develop
                beautiful, engaging, and high-quality web applications with Vue
                js. Vue.js is generally defined as a web framework for
                developing user interfaces in a progressive manner. Vue was
                built so that users could adopt the framework incrementally, as
                opposed to Angular. Vue 3 introduces some exciting new features
                and updates to Vue.js. Among the new features are the accurate
                production of standalone reactive objects, async error handling,
                the introduction of Slots, and more. Vue JS has been getting a
                lot of attention lately as one of the hottest topics to discuss
                when it comes to the framework.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
