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
  2: {
    10: "CS104 - GH514"
  },
  3: {
    10: "CS101 - RC426",
    15: "CS102 - JB816"
  },
  4: {
    9: "MS113 - JA325"
  },
  5: {
    10: "CS103 - TG312",
    11: "CS104 - RC426",
    12: "CS106 - MC301",
    14: "CS105 - UC317"
  }
}

function getTime() {
  const d = new Date();
  let day = d.getDay();

  let hour = d.getHours();

  let element = document.getElementById("current-class-data");

  if (day in timetable) {
    if (hour in timetable[day]) {
      var text = `${dayName[day]} ${hour}:00-${hour+1}:00<br>${timetable[day][hour]}`;
      element.innerHTML = text;
    } else {
      element.parentElement.style.display = "none";
    }
  }
}