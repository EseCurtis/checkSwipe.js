 checkSwipe.js

checkSwipe.js
=============

\`checkSwipe.js\` is a lightweight library that allows you to monitor swipe direction on a touch screen. It is guided by the number of touches on the screen, which makes it easy to implement in your web applications.

Syntax
------

To use \`checkSwipe.js\`, create a new instance of the \`checkSwipe\` class and pass in the following parameters:
```javascript
    let cs = new checkSwipe(element, numberOfValidSwipes, rightSwipeCallback, leftSwipeCallback);
```

*   `element`: The DOM element you want to monitor for swipe events.
*   `numberOfValidSwipes`: The minimum number of fingers that need to be on the screen for a swipe to be recognized.
*   `rightSwipeCallback`: The function to be called when a swipe to the right is detected.
*   `leftSwipeCallback`: The function to be called when a swipe to the left is detected.

Usage
-----

Here's an example of how to use \`checkSwipe.js\`:
```javascript
    const swipeRightAction = () => { 
      //do something 
    }
    const swipeLeftAction = () => { 
      //do something
    }
    
    let cs = new checkSwipe(document, 2, swipeRightAction, swipeLeftAction);
```
In this example, we're monitoring the entire document for swipe events with at least 2 fingers. When a swipe to the right is detected, an alert will be displayed saying "Swiped right with two fingers", and when a swipe to the left is detected, an alert will be displayed saying "Swiped left with two fingers".

Try \`checkSwipe.js\` in your web applications today and make touch screen interactions more engaging and intuitive for your users!
