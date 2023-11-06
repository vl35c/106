var dayName = {
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday"
}
  
var timetable = {
	1: {
		10: "CS103 - TG312",
		11: "CS104 - RC426",
		12: "CS106 - RC647",
		14: "CS105 - TG312"
	},
	2: { 10: "CS104 - GH514" },
	3: { 10: "CS101 - RC426" },
	4: {
		9: "MS113 - JA325",
		10: "MS113 - JA325"
	},
	5: {
		10: "CS103 - TG312",
		11: "CS104 - RC426",
		12: "CS106 - MC301",
		14: "CS105 - UC317"
	}
}
  
Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

function getTime() {
	const d = new Date();
	let day = d.getDay();

	let hour = d.getHours();

	let element = document.querySelector("#current-class-data");
	let element2 = document.querySelector('#next-class-data');

	if(day in timetable) {
		if(hour in timetable[day]) { element.innerHTML = `${dayName[day]} ${hour}:00-${hour+1}:00<br>${timetable[day][hour]}`; } 
		else { element.style.display = "none"; }

		if(hour+1 in timetable[day]) { element2.innerHTML = `${dayName[day]} ${hour+1}:00-${hour+2}:00<br>${timetable[day][hour+1]}`; } 
		else { element2.style.display = "none"; }
	}
}
  
function getTimeUntilDue() {
	elements = document.getElementsByClassName("js-time-until-due");

	for(e of elements) {
		const [time, date] = e.parentElement.children[0].innerHTML.split(" ")
		
		const [h, min] = time.split(":")
		const [d, m, y] = date.split("/")

		var timeUntilDue = (new Date(`${m} ${d} ${y} ${h}:${min}:00 GMT`).getUnixTime()) - (new Date().getUnixTime());

		if (timeUntilDue > 86400) { e.innerHTML = `${Math.floor((timeUntilDue) / 86400)} day(s)`; } 
		else if (timeUntilDue > 3600) { e.innerHTML = `${Math.floor((timeUntilDue) / 3600)} hour(s)`; } 
		else if (timeUntilDue > 60) { e.innerHTML = `${Math.floor((timeUntilDue) / 60)} minute(s)`; }
		else if (timeUntilDue > 0) { e.innerHTML = `${(timeUntilDue)} second(s)`; } 
		else { e.innerHTML = "Due"; }
	}
	setTimeout("getTimeUntilDue()", 100)
}