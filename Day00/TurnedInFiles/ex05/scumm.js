
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
    }
}

function talkTo(Name){
	if(Name == 'Jamie'){
		document.getElementById("GreenBoxText").innerHTML = "Hi, I'm Jamie! I'm the corporate relations manager. Whats your name?";
	}
	if(Name == 'Student'){
		document.getElementById("GreenBoxText").innerHTML = "Hi, I'm a student here at 42. Are you thinking of attending?";
	}
}

function selectedItem(){

}