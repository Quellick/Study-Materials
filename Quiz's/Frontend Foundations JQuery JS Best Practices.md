QUIZ SCORE: 3/11

1. To change the text color of all divs to red using jQuery, what goes in the blanks?
$('div').css(_______, _______);
'color', 'red'
'red', 'color'
color, red
red, color
EXPLANATION
The jQuery syntax is .css(propertyName, value).

propertyName has a type of string. value has a type of string or number. Strings require quotation marks around the string.

Covered in: jQuery: Landing Page

2. The following description best describes which jQuery method?
jQuery's shorthand for an event that handles both mouseenter and mouseleave behavior.
.click()
.find()
.get()
.hover()
EXPLANATION
The .hover() method binds one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.

Covered in: jQuery: Landing Page

3. How would you rewrite the following JavaScript in jQuery?
var domElement = document.getElementById('refrigerator');
domElement.style.color = 'white';
$('.refrigerator').css('style', 'white');
$('#refrigerator').style('white');
$('#refrigerator').css('color', 'white');
$('.refrigerator').style('color', 'white');
Covered in: jQuery: Collection and Album Views
What is the correct jQuery code to set the background color of all p elements to red?
$('p').css('background-color','red');
$('p').style('background-color','red');
$('p').manipulate('background-color','red');
$('p').layout('background-color','red');
Covered in: jQuery: Next and Previous Buttons

4. How do you find the number with the highest value of x and y?
Math.ceil(x, y)
Math.max(x, y)
top(x, y)
ceil(x, y)
Covered in: jQuery: Seek Bars

5. In the following code, what information is stored in the variable distanceX when the event fires?
var distanceX = event.pageX;
The distance between the mouse and the left edge of the browser window.
The distance between the mouse and the right edge of the browser window.
The width of the browser window.
The height of the browser window.
EXPLANATION
pageX is a property on jQuery events that stores the location of the X coordinate where an event occurs in the browser window.

Covered in: jQuery: Seek Bars

7. Which of the following comparisons returns false?
'17' == 17
92 === 92
false == 1
"\n \n \t" == 0
Covered in: Atom

8. Which of the following is an example of an anonymous closure?
// Sample A
function example() {
   alert('Example!');
}

example();

// Sample B
(function() {
    alert('Example!');
})()

// Sample C
(function example() {
   alert('Example!');
})
Sample A
Sample B
Sample C
None of the above
Covered in: Atom

9. During the deployment of your application through Git, you want certain files to be ignored. Which of the following files performs that operation?
config.ru
Gemfile
Rakefile
.gitignore
Covered in: Atom

10. To select all elements using jQuery with the id name 'punch' that have a parent element with the 'fruit' class name we would write:
$('.fruit #punch')
$(.fruit #punch)
$(#punch .fruit)
$('#punch .fruit')
Covered in: jQuery: Landing Page

11. Using the jQuery selector $('div.intro'), what will be selected?
All div elements with class='intro'.
All div elements with id='intro'.
The first div element with id='intro'.
The first div element with class='intro'.
Covered in: jQuery: Landing Page

Quiz Answers
1. A.) 'color', 'red'
2. D.) .hover()
3. C.) $('#refrigerator').css('color', 'white');
4. A.) $('p').css('background-color','red');
5. B.) Math.max(x, y)
6. A.) The distance between the mouse and the left edge of the browser window.
7. C.) false == 1
8. B.) Sample B
9. D.) .gitignore
10. A.) $('.fruit #punch')
