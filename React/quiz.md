1. Why do we need to `import React from "React"` in our files?
    Ans: React is what defiens JSX

2. If I were to console.log(page) in index.jx, What would show up?
    Ans: A Javascript object. React element that decribe what React should eventually add to the real DOM for us.

3. What's warong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
    Ans: We need our JSX to be nested under a single parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?
    Declarative means I can tell the computer WHAT to do and expect it to handle the details. Imperative means I need to tell it HOW to do eacg step.

5. What does it mean for something to be "composable"?
    Ans: We have small pieces that we can piut together to make somrthing larger/greater then individual pieces.