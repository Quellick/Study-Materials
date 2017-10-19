QUIZ SCORE: 6/9
1. Each element of the DOM is best known as a what?
node
object
item
target
Covered in: DOM Scripting: Animation

2. window.addEventListener('scroll', function(event) {
     console.log(event);
});
What is "scroll" in this context?
an event to trigger
a function to execute
an event to listen for
none of these
EXPLANATION
The .addEventListener() method takes two required arguments, type and listener. Type is a string representing the type of event to listen for, and listener is the function to fire when the event has been triggered.

Covered in: DOM Scripting: Events

3. If the event handlers are set to bubble, what happens when the user clicks on element 1?
------------------------------------
| document                         |
|   ---------------  ------------  |
|   | element1    |  | element2 |  |
|   ---------------  ------------  |
|                                  |
------------------------------------

element1.onclick = doSomething;
element2.onclick = doSomething;
document.onclick = defaultFunction;

doSomething() is executed.
defaultFunction() is executed.
doSomething() is executed. defaultFunction() is executed.
doSomething() is executed. doSomething() is executed. defaultFunction() is executed.
EXPLANATION
In event bubbling, after an event triggers on the deepest possible element, it then triggers on parents in nesting order.

The opposite of bubbling is capturing, when the parent elements are triggered before the target element. The EventTarget.addEventListener() defaults to bubbling. You will need to set the useCapture parameter to true to enable capturing.

Covered in: DOM Scripting: Play/Pause Part 1

4. If you insert JavaScript directly into an HTML document with the <script> tag, where should you put it to make sure it runs after the page loads?
Just after the <head> tag.
Just after the <body> tag.
Just before the closing </body> tag.
Just before the closing </html> tag.
EXPLANATION
Browsers read HTML files from the top down. Although scripts can be placed anywhere in a file, weve placed the <script> tags at the end of the document.
This makes the page appear to load faster to the end user because the JavaScript is not blocking the content from rendering.

Covered in: DOM Scripting: Animation

5. Which event occurs when the user clicks on an HTML element?
onclick
onchange
onmouseover
onmouseclick

Covered in: DOM Scripting: Events

6. Using no helper libraries, just DOM scripting, what do you use to change the style of an element?
.css()
.style
.transform()
None of the above
EXPLANATION
.css() is a jQuery method, while .style is used with vanilla DOM scripting.

Covered in: DOM Scripting: Events

7. What is the correct HTML to include a JavaScript library?
<script href="mylibrary.js"></script>
<link type="script" src="mylibrary.js">
<link rel="script" href="mylibrary.js">
<script src="mylibrary.js"></script>
Covered in: DOM Scripting: Collection View

8. What of the following is true of HTML data-* attributes?
It needs to have a defined meaning.
The data is accessible by assistive technology.
It should be used to store data that is visible to the user.
It can be added as an attribute to any HTML tag to store extra information.
Covered in: DOM Scripting: Play/Pause Part 1

9. What is the correct JavaScript syntax to change the content of the specific HTML element below?
<p id='demo'>This is a demonstration.</p>
document.getElementById('demo').textContent = 'Hello World!';
document.getElement('p').textContent = 'Hello World!';
#demo.textContent = 'Hello World!';
$(document).textContent = 'Hello World!';
EXPLANATION
Because there may be multiple <p> elements, we want to target this element specifically by it’s ID using getElementbyID().

Covered in: DOM Scripting: Animation

Quiz Answers
1. A.) node
2. C.) an event to listen for
3. C.) doSomething() is executed. defaultFunction() is executed.
4. C.) Just before the closing </body> tag.
5. A.) onclick
6. B.) .style
7. D.) <script src="mylibrary.js"></script>
8. D.) It can be added as an attribute to any HTML tag to store extra information.
9. A.) document.getElementById('demo').textContent = 'Hello World!';
