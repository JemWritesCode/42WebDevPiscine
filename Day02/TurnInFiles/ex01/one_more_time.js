// This exercise wants you to change the date format from 
// something like "Mardi 12 Novembre 2013 12:02:21" to the number of seconds past Jan 1, 1970
// Original date is French

function convertMonth(month){
	month.toUpperCase();
	switch(month){
		case "Janvier":
			return(1);
		case "Fevrier":
			return(2);
		case "Mars":
			return(3);
		case "Avril":
			return(4);
		case "Mai":
			return(5);
		case "Juin":
			return(6);
		case "Juillet":
			return(7);
		case "Aout":
			return(8);
		case "Septembre":
			return(9);
		case "Octobre":
			return(10);
		case "Novembre":
			return(11);
		case "Decembre":
			return(12);
	}
}

function convertDay(day){
	day.toUpperCase();
	switch(day){
		case "Lundi":
			return(1);
		case "Mardi":
			return(2);
		case "Mercredi":
			return(3);
		case "Jeudi":
			return(4);
		case "Vendredi":
			return(5);
		case "Samedi":
			return(6);
		case "Dimanche":
			return(7);
	}
}

if(process.argv[2])
	if(process.argv[2].match(/([Ll]undi|[Mm]ardi|[Mm]ercredi|[Jj]eudi|[Vv]endredi|[Ss]amedi|[Dd]imanche) ([0-9]{2}) ([Jj]anvier|[Ff]vrier|[Mm]ars|[Aa]vril|[Mm]ai|[Jj]uin|[Jj]uillet|[Aa]out|[Ss]eptembre|[Oo]ctobre|[Nn]ovembre|[Dd]ecembre) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/)){
		dateArr = process.argv[2].split(' ');
		dateArr[2] = convertMonth(dateArr[2]);
		dateArr[0] = convertDay(dateArr[0]);
		myTime = new Date(Date.UTC(dateArr[3], dateArr[2] - 1, dateArr[1], dateArr[4].substring(0,2), dateArr[4].substring(3,5), dateArr[4].substring(6,8))); // make it UTC so we can convert to Paris time
		parisTime = new Date (myTime.valueOf() - 60 * 60000); // -60 for Europe/Paris
		console.log(parisTime.getTime() / 1000); // change it to seconds since epoc
	}
	else
		console.log("Wrong Format");