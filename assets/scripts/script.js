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
  },
  4: {
    9: "MS113 - JA325",
    10: "MS113 - JA325"
  },
  5: {
    10: "CS103 - TG312",
    11: "CS104 - RC426",
    12: "CS106 - MC301",
    14: "CS105 - UC317"
  },
  6: {},
  7: {}
}

function getTime() {
  const d = new Date();
  let day = d.getDay();

  let hour = d.getHours();

  let element = document.getElementById("current-class-data");
  let element2 = document.getElementById("next-class-data");

  if (day in timetable) {
    if (hour in timetable[day]) {
      var text = `${dayName[day]} ${hour}:00-${hour+1}:00<br>${timetable[day][hour]}`;
      element.innerHTML = text;
      element.style.display = "inline";
    }

    if (hour + 1 in timetable[day]) {
      var text = `${dayName[day]} ${hour+1}:00-${hour+2}:00<br>${timetable[day][hour+1]}`;
      element2.innerHTML = text;
      element2.style.display = "inline";
    }
  }

  setTimeout("getTime", 360000)
}

function getTimeUntilDue() {
  elements = document.getElementsByClassName("js-time-until-due");
  for (e of elements) {
    const [time, date] = e.parentElement.children[0].innerHTML.split(" ")
    const [h,min] = time.split(":")
    const [d,m,y] = date.split("/")
    var dueDate = new Date(`${y}/${m}/${d} ${h}:${min}:00 GMT`).getTime() / 1000;
    now = new Date().getTime() / 1000;

    var timeUntilDue = dueDate - now;

    if (timeUntilDue > 86400) {
      e.innerHTML = `${Math.floor((dueDate - now) / 86400)} days ${Math.floor((dueDate - now) / 3600) % 24} hours`;
    } else if (timeUntilDue > 3600) {
      e.innerHTML = `${Math.floor((dueDate - now) / 3600)} hours`;
    } else if (timeUntilDue > 60) {
      e.innerHTML = `${Math.floor((dueDate - now) / 60)} minutes`;
    } else if (timeUntilDue > 0) {
      e.innerHTML = `${(dueDate - now)} seconds`;
    } else {
      e.innerHTML = "Due";
    }
  }
  setTimeout("getTimeUntilDue()", 100)
}

window.addEventListener("load", setSessionVariables)

function setSessionVariables() {
  if (sessionStorage["logged_in"]) {
    var user = document.getElementById("logged-in-username")
    user.innerHTML = sessionStorage["user"];
  }

  for (var e of document.getElementsByClassName("js-username")) {
    e.innerHTML = sessionStorage["user"];
  }
}
