/**
 * Created by Admin on 2015/10/9.
 */
$(function(){setInterval(function(){var f=new Date().getHours();var b=new Date().getMinutes();var l=new Date().getSeconds();l=a(l);b=a(b);f=a(f);$(".div1").html(f+"ʱ"+b+"��"+l+"��");var g=(f*30-90+b/2)*Math.PI/180;var k=(b*6-90+l/10)*Math.PI/180;var j=(l*6-90)*Math.PI/180;var e=document.getElementById("c1");var c=e.getContext("2d");c.beginPath();for(var d=0;d<=60;d++){c.moveTo(400,200);c.arc(400,200,150,6*d*Math.PI/180,6*(d+1)*Math.PI/180,false)}c.closePath();c.stroke();c.beginPath();c.fillStyle="white";c.arc(400,200,145,0,360*Math.PI/180);c.fill();c.closePath();c.lineWidth=3;c.beginPath();for(var d=0;d<=12;d++){c.moveTo(400,200);c.arc(400,200,150,30*d*Math.PI/180,30*(d+1)*Math.PI/180,false)}c.stroke();c.closePath();c.beginPath();c.fillStyle="white";c.arc(400,200,135,0,360*Math.PI/180);c.fill();c.closePath();c.beginPath();c.lineWidth=3;c.moveTo(400,200);c.arc(400,200,60,g,g,false);c.stroke();c.closePath();c.beginPath();c.lineWidth=2;c.moveTo(400,200);c.arc(400,200,90,k,k,false);c.stroke();c.closePath();c.beginPath();c.lineWidth=1;c.moveTo(400,200);c.arc(400,200,120,j,j,false);c.stroke();c.closePath();c.beginPath();c.strokeText("12",394,80);c.strokeText("11",332,96);c.strokeText("10",284,140);c.strokeText("9",268,204);c.strokeText("8",286,269);c.closePath()},1000);function a(b){if(b<10){b="0"+b}return b}a()});


