$(document).ready(function($) {var doubt=new Array('rgb(0, 0, 255)','rgb(148,0,211)','rgb(75, 0, 130)','rgb(0, 255, 0)','rgb(255, 255, 0)','rgb(255, 0 , 0)','rgb(255, 127, 0)'); $('#divq51').click(function(e) {$("#divq51").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); $('#divq52').click(function(e) {$("#divq52").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); $('#divq53').click(function(e) {$("#divq53").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); $('#divq54').click(function(e) {$("#divq54").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); $('#divq55').click(function(e) {$("#divq55").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); $('#divq56').click(function(e) {$("#divq56").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); $('#divq57').click(function(e) {$("#divq57").css("background-color",doubt[~~(Math.random() * (6 - 0 + 1)) + 0]); if(conditional()){final(); } }); }); function final() {$('#answer').val('ygorbiv'); } function conditional () {var div1 = $("#divq51").css('background-color'); var div2 = $("#divq52").css('background-color'); var div3 = $("#divq53").css('background-color'); var div4 = $("#divq54").css('background-color'); var div5 = $("#divq55").css('background-color'); var div6 = $("#divq56").css('background-color'); var div7 = $("#divq57").css('background-color'); var condition = ((div4=="rgb(0, 255, 0)") && (div7=="rgb(255, 0, 0)") && (div5=="rgb(255, 255, 0)") && (div3=="rgb(0, 0, 255)") && (div6=="rgb(255, 127, 0)") && (div1=="rgb(148, 0, 211)") && (div2=="rgb(75, 0, 130)")); return condition; }