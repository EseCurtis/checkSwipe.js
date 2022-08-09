# checkSwipe.js
lightweight library for  monitoring swipe direction guided by number of touches on a touch screen
## Syntax 
```JAVASCRIPT

   let cs = new checkSwipe(element, numberOfValidSwipes, rightSwipeCallback, leftSwipeCallback)
```

## Usage
```JAVASCRIPT
   let cs = new checkSwipe(document, 2, ()=> alert("swiped right with two fingers"), ()=> alert("swiped left with two fingers"))
```
