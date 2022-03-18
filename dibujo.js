var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");

dibujarLinea("blue",00, 01, 02, 40);
dibujarLinea("red",01, 02, 160, 170);
dibujarLinea("blue",170, 145, 150, 160);
dibujarLinea("red",120, 135, 140, 150);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, xfinal); 
lienzo.lineTo(yinicial, yfinal);
lienzo.stroke();
lienzo.closePath();
}




