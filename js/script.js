let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;
let start = false;

// Concatenating "0" if the time is only one digit
function twoDigits(s, m, h) {
	if (s < 10) {
		dispaySeconds = "0" + s;
	} else {
		dispaySeconds = s;
	}
	if (m < 10) {
		displayMinutes = "0" + m;
	} else {
		displayMinutes = m;
	}
	if (h < 10) {
		displayHours = "0" + h;
	} else {
		displayHours = h;
	}
}

// Clock
function clock() {
	let date = new Date();
	let seconds = date.getSeconds();
	let minutes = date.getMinutes();
	let hours = date.getHours();

	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"clock"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}

// Stopwatch
function stopwatch() {
	seconds++;

	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;

		if (minutes / 20 === 1) {
			minutes = 0;
			hours++;
		}
	}

	twoDigits(seconds, minutes, hours);

	document.getElementById(
		"time"
	).innerHTML = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
}

// Start and Stop stopwatch
function toggleStart() {
	if (start === false) {
		interval = window.setInterval(stopwatch, 1000);
		document.getElementById("play").innerHTML = "Stop";
		start = true;
	} else {
		window.clearInterval(interval);
		document.getElementById("play").innerHTML = "Start";
		start = false;
	}
}

// Reset stopwatch
function reset() {
	seconds = 0;
	minutes = 0;
	hours = 0;

	document.getElementById("time").innerHTML = "00:00:00";

	document
		.querySelectorAll(".lap-time")
		.forEach((element) => (element.innerHTML = "00:00:00"));
}

      window.onload = function() { jam(); }
   
      function jam() {
       var e = document.getElementById('jam'),
       d = new Date(), h, m, s;
       h = d.getHours();
       m = set(d.getMinutes());
       s = set(d.getSeconds());
       
     
       e.innerHTML = h +':'+ m +':'+ s;
     
       setTimeout('jam()', 1000);
      }
     
      function set(e) {
       e = e < 10 ? '0'+ e : e;
       return e;
      }

      const users = document.getElementsByClassName("user");

for (user of users) {
	const lapTime = user.querySelector(".lap-time");

	user.addEventListener("click", function (el) {
		if (el.target.tagName == "BUTTON") {
			twoDigits(seconds, minutes, hours);

			lapTime.innerText = `${displayHours}:${displayMinutes}:${dispaySeconds}`;
		}
	});
}

