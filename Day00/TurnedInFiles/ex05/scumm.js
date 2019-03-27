
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

function talkTo(Name){
	if(Name == 'Jamie'){
		document.getElementById("GreenBoxText").innerHTML = "Hi, I'm Jamie! I'm the corporate relations manager. You should check out the golf cart in the robotics lab! Whats your name?";
		if(document.getElementById("cart").style.visibility = "visible")
			document.getElementById("GreenBoxText").innerHTML = "I said check the cart out, not take it out!";
	}
	if(Name == 'Student'){
		document.getElementById("GreenBoxText").innerHTML = "Hi, I'm a student here at 42. I could use some coffee. Are you thinking of attending 42?";
		if(document.getElementById("cup").style.visibility = "visible")
			document.getElementById("GreenBoxText").innerHTML = "...Why is this coffee half empty?";
	}
}

function highlightSelectedItem(itemID){
	if(currentSelectedItem){
		document.getElementById(currentSelectedItem).className = "actions";
	}
	document.getElementById(itemID).className = "actions selected";
	currentSelectedItem = itemID;
}

function GrabItem(itemTaken){
	if(itemTaken == 'GolfCart' && currentSelectedItem == 'Take'){
		document.getElementById("GreenBoxText").innerHTML = "You take the golf cart.<br/> ...Why? Are you planning to drive to Tesla?";
		document.getElementById("cart").style.visibility = "visible";
	}
	else if(itemTaken == 'Cup' && currentSelectedItem == 'Take'){
		document.getElementById("GreenBoxText").innerHTML = "You snatch the coffee out of the programmer's hands. The programmer does not seem happy about it.";
		document.getElementById("cup").style.visibility = "visible";
	}
	else{
		document.getElementById("GreenBoxText").innerHTML = "To take things you need to click the take button first.";
		document.getElementById(itemTaken).style.visibility = "visible";
	}

}