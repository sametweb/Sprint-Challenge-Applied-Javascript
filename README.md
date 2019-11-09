# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

DOM stands for Document Object Model. It represents the HTML of the page as an object. DOM has all the HTML elements nested inside each other the way HTML elements are nested inside each other. When we manipulate the DOM, the changes are made in the DOM, a.k.a. object representation of our HTML page which results with the changes being seen on the screen.

2. What is an event?

Events represent user's behavior and interaction with the DOM in the browser. Mouse clicks, keyboard presses, page scrolls, browser window resizes etc. are all events that we can track and link with a function by using Javascript's `addEventListener` method.

3. What is an event listener?

Event listeners are functions that LISTENS to the user's behavior on the screen and trigger certain functions as we program them. For example, we can add an event listener to a div to act in a different way than it normally does. Event listeners take an event type and a callback function as parameter. Whenever the event type occurs in the DOM, the callback function is triggered.

4. Why would we convert a NodeList into an Array?

NodeList is an array-like object. Array-like objects do not inherit Array.prototype methods. NodeList only share numeric indexs, .length property, and forEach method with Arrays. If we would like to use other Array methods on our NodeList, we would need to convert it to an Array with Javascript's `Array.from()` function.

5. What is a component?

Components are building block of our webpage. When one block of HTML piece needs to be repeated in multiple places in our website, we can create a component function that creates that component anywhere in the website. For example, let's say we have a comment section in our website where people write their opinion about our products. We can create a comment component that takes `author name` and `message` as a parameter and returns the required HTML codes. That way we can control what our comments section look like from one place.

### Git Set up

- [ ] Fork the project into your GitHub user account
- [ ] Clone the forked project into a directory on your machine
- [ ] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

- [ ] Following the instructions in the `Header/index.js` file, create the Header component.

- [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

- [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

- [ ] Complete the carousel functionality in `Carousel.js`

- [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

- [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

- [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
