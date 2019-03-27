
var currentSelectedAction;
var currentSelectedItem;

function changeLocation(){
	element=document.getElementById('locationimg')
	if (element.src.match("robotics")) {
        document.getElementById("locationimg").src = "resources/checkinroom.jpg";
        document.getElementById("locationimg").useMap = "#ClickableCheckin";
    } else if (element.src.match("checkinroom")) {
    	document.getElementById("locationimg").src = "resources/cluster.jpg";
    	document.getElementById("locationimg").useMap = "#ClickableCluster";
    }else{
        document.getElementById("locationimg").src = "resources/robotics.jpg";
        document.getElementById("locationimg").useMap = "#ClickableRobotics";
    }
}

function ClickPerson(Name){
	if(Name == 'Jamie'){
		if(currentSelectedAction == 'Speak'){
			document.getElementById("GreenBoxText").innerHTML = "Hi, I'm Jamie! I'm the corporate relations manager. You should check out the golf cart in the robotics lab! Whats your name?";
		}
		else if(currentSelectedAction == 'Use'){
			if(currentSelectedItem == 'cart' && document.getElementById("cart").style.visibility == "visible"){
				document.getElementById("GreenBoxText").innerHTML = "I said check the cart out, not take it out!";
			}else if(currentSelectedItem == 'cup' && document.getElementById("cup").style.visibility == "visible"){
				document.getElementById("GreenBoxText").innerHTML = "Thanks, but I've had enough caffiene today already.";
			}else if(currentSelectedItem == 'Book'){
				document.getElementById("GreenBoxText").innerHTML = "Ah, the Hitchhiker's guide to the galaxy. That's the best book to have here.";
			}else if(currentSelectedItem == 'Towel'){
				document.getElementById("GreenBoxText").innerHTML = "Thanks, but I always carry my own towel with me.";
			}else if(currentSelectedItem == 'brick'){
				document.getElementById("GreenBoxText").innerHTML = "You build your knowledge brick by brick. Before you know it you have a wall.";
			}
			else{
				document.getElementById("GreenBoxText").innerHTML = "Select an item on the right to use.";
			}
		}
		else if(currentSelectedAction == 'Take'){
			document.getElementById("GreenBoxText").innerHTML = "You can't TAKE Jamie.";
		}
		else if(currentSelectedAction == 'Look'){
			document.getElementById("GreenBoxText").innerHTML = "She looks friendly but firm.";
		}
	}
	if(Name == 'Student'){
		if(currentSelectedAction == 'Speak'){
			document.getElementById("GreenBoxText").innerHTML = "Hi, I'm a student here at 42. I could use some coffee. Are you thinking of attending 42?";
		}
		else if(currentSelectedAction == 'Use'){
			if(currentSelectedItem == 'cart' && document.getElementById("cart").style.visibility == "visible"){
					document.getElementById("GreenBoxText").innerHTML = "Oh, you're visiting Tesla?";
			} else if(currentSelectedItem == 'cup' && document.getElementById("cup").style.visibility == "visible"){
					document.getElementById("GreenBoxText").innerHTML = "Uh...why is half the coffee missing already?";
			}else if(currentSelectedItem == 'Book'){
				document.getElementById("GreenBoxText").innerHTML = "Remember: DONT PANIC.";
			}else if(currentSelectedItem == 'Towel'){
				document.getElementById("GreenBoxText").innerHTML = "Thanks, but I just bought a towel yesterday!";
			}else if(currentSelectedItem == 'brick'){
				document.getElementById("GreenBoxText").innerHTML = "Sometimes you hit a wall, but if you take a break you can come back to the problem with a fresh perspective.";
			}
			else{
				document.getElementById("GreenBoxText").innerHTML = "Select an item on the right to use.";
			}
		}
		else if(currentSelectedAction == 'Take'){
			document.getElementById("GreenBoxText").innerHTML = "You can't TAKE the student.";
		}
		else if(currentSelectedAction == 'Look'){
			document.getElementById("GreenBoxText").innerHTML = "The student looks ready to learn.";
		}
	}
}

function highlightSelectedAction(itemID){
	if(currentSelectedAction){
		document.getElementById(currentSelectedAction).className = "actions";
	}
	document.getElementById(itemID).className = "actions selected";
	currentSelectedAction = itemID;
}

function highlightSelectedItem(itemID){
	if(currentSelectedItem){
		document.getElementById(currentSelectedItem).className = " ";
	}
	document.getElementById(itemID).className = " selected";
		currentSelectedItem = itemID;
}

function ClickItemOnMap(itemTaken){

	if(itemTaken == 'GolfCart'){
		if(currentSelectedAction == 'Take'){
			document.getElementById("GreenBoxText").innerHTML = "You take the golf cart.<br/> ...Why? Are you planning to drive to Tesla?";
			document.getElementById("cart").style.visibility = "visible";			
		}
		else if(currentSelectedAction == 'Look'){
			document.getElementById("GreenBoxText").innerHTML = "It's a golf cart. They've attached some things to it. Maybe it can drive itself?";
		}
		else if(currentSelectedAction == 'Use'){
			document.getElementById("GreenBoxText").innerHTML = "You try to use the golfcart, but there are no keys.";
		}
		else if(currentSelectedAction == 'Speak'){
			document.getElementById("GreenBoxText").innerHTML = "You tell the golf cart it's a good cart. Silence echos back at you, but you feel happier.";
		}
	}
	else if(itemTaken == 'Cup'){
		if(currentSelectedAction == 'Take'){
			document.getElementById("GreenBoxText").innerHTML = "You snatch the coffee out of the programmer's hands. The programmer does not seem happy about it.";
			document.getElementById("cup").style.visibility = "visible";
		}
		else if(currentSelectedAction == 'Look'){
			document.getElementById("GreenBoxText").innerHTML = "A programmer is really enjoying some coffee.";
		}
		else if(currentSelectedAction == 'Use'){
			document.getElementById("GreenBoxText").innerHTML = "You try to drink from the coffee cup, but the programmer pulls it away from you.";
		}
		else if(currentSelectedAction == 'Speak'){
			document.getElementById("GreenBoxText").innerHTML = "You tell the coffee cup it's the best part of your day. The programmer gives you a concerned look.";
		}		
	}
	else{
		document.getElementById("GreenBoxText").innerHTML = "Select an action button on the left first (Take, Look, Use, Speak).";
		document.getElementById(itemTaken).style.visibility = "visible";
	}
}