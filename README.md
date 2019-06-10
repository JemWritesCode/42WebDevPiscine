# 42WebDevPiscine (PHP Piscine Material completed in Node.js)
My projects for the [42 Silicon Valley](https://www.42.us.org/)'s web development course. 

Projects are done in CSS, HTML, Javascript, Node.js. This is the PHP Piscine Material, but I chose to learn Node.js because it's in much higher demand.

#### Tips for 42 Students:

1.) If you're doing this piscine in Node.js I recommend getting some of the material done ahead of time-- Node.js is great for medium-large projects but sometimes something small in PHP can take a while to spin up in Node.js. Keep in mind the piscine is not made for NodeJS. It would be pretty helpful to be familiar with Javascript  -- but the syntax is fairly similar to C syntax-wise. You'll have to learn about asynchronous programming (that just means things don't wait, it keeps running) and callback functions. 

2.) Make sure MySQL is installed for Day05. I was also thinking of learning AWS for Day05 but there's a 24hr cooldown period for student accounts so if you're interested in that sign up for an AWS account ASAP.

3.) For 42 students, the main thing with running MongoDB is the dbpath has to be set to the goinfre folder so that the datbase files are saved to that specific computer. But this also means your db files would only be saved on that computer. I recommend using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier so your database is in the cloud instead.

## Table of Contents

[Day00](#day00)

[Day01](#day01)

[Day02](#day02)

[Day03](#day03)

[Day04](#day04)

[Rush00](#rush00)

[Day05](#day05)


## Day00: 
[up ▲](#table-of-contents)

Day00 focuses mostly on HTML & CSS, though the last exercise gives you the chance to work on some Javascript. This day isn't really different for NodeJS people.

[Day00 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/d00.en.pdf)


#### Ex00:

![ex00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/Ex00.png?raw=true)

#### Ex01:
Ex03 is Ex01 but responsive, so just go ahead and make ex01 responsive and save yourself some time. 

I used a [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and a class for .element .symbol .atomicWeight and .atomicNumber. I tweaked a spreadsheet from my friend which generated the code for each element using a formula that read the element's info. This speeded things up considerably.
![ex01](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/Ex01.png?raw=true)

#### Ex02: 
Ex05 is Ex02 but built out into a full game. Try to think of how to make your classes reusable for building things out.
To make things clickable on the image you can use GIMP to create areas for a [HTML Image Map.](https://www.w3schools.com/tags/tag_map.asp)
![ex02](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/Ex02.png?raw=true)

#### Ex03: 
It can shrink!
![ex03](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/Ex03Shrink.png?raw=true)

#### Ex04:
I suppose one simply adds a dropdown.
![ex04](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/Ex04Dropdown.png?raw=true)

#### Ex05:
Making the game work -- the actions on the left and the items on the right can be used on things in the image maps in the middle.

## [🎮Click HERE to try out the game 🎮](https://htmlpreview.github.io/?https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/TurnedInFiles/ex05/scumm.html)

![ex05](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/ex05.png?raw=true)

## Day01
[up ▲](#table-of-contents)

Day01 takes you into the basics of Node and Javascript. From printing to the screen to creating objects and searching through them.

[Day01 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/d01.en.pdf)

#### Ex00:
![ex00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex00.png?raw=true)
#### Ex01:
![ex01](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex01.png?raw=true)
#### Ex02:
![ex02](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex02.png?raw=true)
#### Ex03:
Use RegEx and you can make the function 1 line. Uncomment the code to test.

![ex03](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex03.png?raw=true)
#### Ex04:
![ex04](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex04.png?raw=true)
#### Ex05:
![ex05](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex05.png?raw=true)
#### Ex06:
![ex06](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex06.png?raw=true)
#### Ex07:
Note per the PDF's example only the first param is rotated and printed.
![ex07](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex07.png?raw=true)
#### Ex08:
![ex08](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex08.png?raw=true)
#### Ex09:
There's probably a more eloquent way to write sort rules but seperating into alpha, symbol, and numeric arrays was a fast solution.
![ex09](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex09.png?raw=true)
#### Ex10:
When using the * operator you need to wrap it in quotes like `"*"` to avoid the shell using it as a wildcard. 
![ex10](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex10.png?raw=true)
#### Ex11:
![ex11](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex11.png?raw=true)
#### Ex12:
I put the pairs into a JSON object so I could easily call on it.
![ex12](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex12.png?raw=true)
#### Ex13:
I store the info in objects and get the information out using [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) Also there is a slight calculation difference in PHP vs Javascript. Using .toFixed(13) mostly makes it match.
![ex13](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex13.png?raw=true)

## Day02
[up ▲](#table-of-contents)

[Day02 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/d02.en.pdf)

Day02 focuses a lot on Regex. The instructions on this day are in a crazy Myst style story format! 
#### Ex00:

- Replace space(s) and tab(s) with a single space.

![ex00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/ExplainationImages/Day02Ex00.png?raw=true)
#### Ex01:
- Change the date from French long format to seconds past epoc.
- This was a bit tricky because you have to account for changing to Paris time.
![ex01](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/ExplainationImages/Day02Ex01.png?raw=true)

#### Ex02:
- Turn the titles of links Uppercase, and things between <a></a> tags Uppercase.
![ex02](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/ExplainationImages/Day02Ex02.png?raw=true)

#### Ex03:
- Recreating the who command. (The who utility displays a list of all users currently logged on, showing for each user the login name, tty name, the date and time of login, and hostname if not local.)
- The instructions mention "utmp" -- this is actually login records. (man utmp for info)


## Day03
[up ▲](#table-of-contents)

[Day03 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day03/d03.en.pdf)
Didn't really have time to work on this much this day

## Day04
[up ▲](#table-of-contents)

Code doesn't work, I decided to start watching some more beginner Node.js videos as well.
Express is used for the server framework. I chose it because it's part of the popular MERN stack that I want to learn.

## Rush00
[up ▲](#table-of-contents)

[Rush00 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/rush00.en.pdf)

The [NodeJS / Express / MongoDB - Build a Shopping Cart tutorial series by Acedemind on ](https://www.youtube.com/watch?v=-3vvxn78MH4&index=2&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp) was really helpful and was a good stepping stone to learning MERN. It's not exactly the same as the school project, but it gets you close enough. This project normally has a partner but I did this solo. I ended up moving my database over to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) so instead of trying to host your database on the school computers it can be in the cloud. Just set your connection string to the one you get from MongoDB Atlas instead of the one mentioned in the tutorial.

I used:
- Express for my web server framework. Controls the router.
- Express-session to store my session information. It stores the sessionID in the browser, and the items in the cart in MongoDB.
- Bootstrap for styling so that it would look nice without too much work and be responsive to screen size. (Card components for inventory items, Navbar component) Tip: Look at the components part of the bootstrap documentation and learn how to use them to quickly style your websites. 
- Mongoose to connect to my MongoDB.
- Express-Handlebars for my view engine. This is what parses my views so I can use the variables that are inside curly braces like `{{variable}}` as well as the helpers like `{{# each}}` for looping in the view.
- Passport for User Creation/Validation (bcrypt-nodejs for password encryption)
- connect-mongo for session storage.


Bonuses:
- Bootstrap is used extensively for a responsive, beautiful, and consistent UI.
- Font Awesome Icons are used throughout to create a more intuative interface.
- Advanced User Information (Users can fill out their profile)
- Password encryption with bcrypt
- Stripe Integration
- Sales Report
- Stock Management
- Delete All Users/Products

![Rush00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Rush00.png?raw=true)

## Day05
[up ▲](#table-of-contents)

I had to stop after the Rush because I had work. I will say for Day06 you're supposed to write code that passes php unit tests -- for those doing NodeJS it may be best to skip this day or do it ahead of time so you can write your own tests. Or just do this in php.
