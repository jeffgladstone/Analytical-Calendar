/*
    Filename: main.js
    Author: Jeff Gladstone
    Date: 8/16/2017
    Description:
    'Analytical Calendar' displays the 
    current date and time in a bar graph,
    representing each value of time as 
    its very own component.
*/
var isDisplay = true;

function main() {
	$('.bar').hide();
	update();
	$('.bar').fadeIn(1000);
	$("#display").on("click", function(){
    	changeDisplay();
	});
	setInterval(function() {update()}, 1000);
}

function update() {
	var d = new Date();
	var secs = d.getSeconds();
	var mins = d.getMinutes();
	var hours = d.getHours();
	var days = d.getDay();
	var months = d.getMonth();
	var year = d.getFullYear();
	setBars(secs, mins, hours, days, months);
	$('#date').text(d.toString());
}

function setBars(secs, mins, hours, days, months) {
	var secHeight = secs / 60 * 100;
	$('#secs').height(secHeight+ '%');
	var minHeight = mins / 60 * 100;
	$('#mins').height(minHeight+ '%');
	var hourHeight = hours / 24 * 100;
	$('#hours').height(hourHeight+ '%');
	var dayHeight = days / 7 * 100;
	$('#days').height(dayHeight+ '%');
	var monthHeight = months / 12 * 100;
	$('#months').height(monthHeight+ '%');
}

function changeDisplay() {
		if (isDisplay) {
			$('.bar').css('display', 'none');
			$('#display').css('background-color', '#222222');
			$('#display').css('color', '#999999');
			isDisplay = false;
		}
		else {
			$('.bar').css('display', 'block');
			$('#display').css('background-color', '#999999');
			$('#display').css('color', 'black');
			isDisplay = true;
		}

}

$(document).ready(main);