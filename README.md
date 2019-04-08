# 42WebDevPiscine
[42 Silicon Valley](https://www.42.us.org/)'s web development course. Each project has a time limit(usually 1-2 days) with all of the projects being completed over a 2 week period total.

Projects are done in CSS, HTML, Javascript, Node.js

AKA PHP Piscine, but I'm focusing on Node.js since it's more modern. (This is allowed by admin(bocal) even though the instructions say PHP.)

Tips:
Make sure MySQL is installed for Day05. I was also thinking of learning AWS for Day05 but there's a 24hr cooldown period for student accounts so if you're interested in that sign up for an AWS account ASAP.


## Day00:

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
[Click HERE to try out the game](https://htmlpreview.github.io/?https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/TurnedInFiles/ex05/scumm.html)
![ex05](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day00/ExplainationImages/ex05.png?raw=true)

## Day01
I was short on time this day and only got to ex07. I probably spent too long on Day00Ex05(but no regrets, that was fun!)

#### Ex00:
![ex00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex00.png?raw=true)
#### Ex01:
![ex01](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex01.png?raw=true)
#### Ex02:
![ex02](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex02.png?raw=true)
#### Ex03:
Use RegEx and you can make the function 1 line.

![ex03](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex03.png?raw=true)
#### Ex04:
![ex04](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex04.png?raw=true)
#### Ex05:
![ex05](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex05.png?raw=true)
#### Ex06:
![ex06](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex06.png?raw=true)
#### Ex07:
I didn't get this turned in on time but it works.
![ex07](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day01/ExplainationImages/Day01Ex07.png?raw=true)

## Day02
The [Day02 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/d02.en.pdf) on this day is in a crazy Myst style story format! 
#### Ex00:

- Replace space(s) and tab(s) with a single space.

![ex00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/ExplainationImages/Day02Ex00.png?raw=true)
#### Ex01:
- Change the date from French long format to seconds past epoc.
- This was a bit tricky because you have to account for changing to Paris time.
![ex01](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/ExplainationImages/Day02Ex01.png?raw=true)

#### Ex02:
- Turn the titles of links Uppercase, and things between <a></a> tags Uppercase.
- You have to learn RegEx for this one.
![ex02](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day02/ExplainationImages/Day02Ex02.png?raw=true)


## Day03
[Day03 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Day03/d03.en.pdf)
Didn't really have time to work on this much this day

## Day04
Code doesn't work, I decided to start watching some more beginner Node.js videos as well.
Express is used for the server framework. I chose it because it's part of the popular MERN stack that I want to learn.

## Rush00
[Rush00 PDF Instructions](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/rush00.en.pdf)

The [NodeJS / Express / MongoDB - Build a Shopping Cart tutorial series by Acedemind on ](https://www.youtube.com/watch?v=-3vvxn78MH4&index=2&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp) was really helpful and was a good stepping stone to learning MERN. There is a lot to setting up a basic application and figuring out how to get MongoDB running on school computers was a feat. If I had to do it again I'd probably try using a MongoDB database that was hosted online. (A friend recommended [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) so I'll check that out.) (For 42 students, the main thing with running MongoDB is the dbpath has to be set to the goinfre folder so that the datbase files are saved to that specific computer. But this also means your db files would only be saved on that computer.) This project normally has a partner but I did this solo. But this worked out because I could create it in Node.js!

While I didn't finish (spent way too long trying to configure MongoDB for school network), I did manage to get the inventory to pull from the database. 

I used:
- Express for my web server framework
- Bootstrap for styling so that it would look nice without too much work. (Card components for inventory items, Navbar component)
- Mongoose to connect to my MongoDB.
- Express-Handlebars for my view engine. This is what parses my views so I can use the variables that are inside curly braces like `{{variable}}` as well as the helpers like `{{# each}}` for looping in the view.

![Rush00](https://github.com/Jemmeh/42WebDevPiscine/blob/master/Rush00/Rush00.png?raw=true)

## Day05,06, ...
I had to stop after the Rush because I had work. I will say for Day06 you're supposed to write code that passes php unit tests -- for those doing NodeJS it may be best to skip this day or do it ahead of time so you can write your own tests. Or just do this in php.
