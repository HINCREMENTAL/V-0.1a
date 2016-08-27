var cookies = 0;
var cookies2 = 0;

function cookieClick(number) {
	cookies = cookies + number;
	document.getElementById("cookies").innerHTML = cookies;
};

function cookieClick2(number2) {
	var cookie2cost = 20
	if (cookies >= cookie2cost){
	cookies2 = cookies2 + number2;
	cookies = cookies - cookie2cost;
	document.getElementById("cookies2").innerHTML = cookies2;
	};


};

var cursors = 0
var cursors1 = 0
var cursors2 = 0
var cursorsv = 0

function buyCursor1(){
	var cursorCost1 = Math.floor(10*Math.pow(1.1, cursors1));
	if (cookies >= cursorCost1) {
		cursors = cursors + 1;
		cursors1 = cursors1 + 1;
		cursorsv = cursorsv + cursors1;
		cookies = cookies - cursorCost1;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('cursors1').innerHTML = cursors1;
		document.getElementById('cursorsv').innerHTML = cursorsv;
		document.getElementById('cookies').innerHTML = cookies;
	}

	var nextCost1 = Math.floor(10 * Math.pow(1.1, cursors1));
	document.getElementById('cursorCost1').innerHTML = nextCost1;

};

function buyCursor2(){
	var cursorCost2 = Math.floor(15*Math.pow(1.1, cursors2));
	if (cookies >= cursorCost2) {
		cursors = cursors + 3;
		cursors2 = cursors2 + 1;
		cursorsv = cursorsv + cursors2;
		cookies = cookies - cursorCost2;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('cursors2').innerHTML = cursors2;
		document.getElementById('cursorsv').innerHTML = cursorsv;
		document.getElementById('cookies').innerHTML = cookies;
	}

	var nextCost2 = Math.floor(15 * Math.pow(1.1,cursors2));
	document.getElementById('cursorCost2').innerHTML = nextCost2;

};


window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);
