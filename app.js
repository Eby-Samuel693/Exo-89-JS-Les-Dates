let dateJ = document.getElementById("timestamp");
let dateLJ = document.getElementById("localTime");
let dateL = document.getElementById("localDate")
let futur = new Date();


futur.setDate(futur.getDate()+2);
let heur = new Date();
heur.setTime(heur.getTime()+6);

let date = new Date();


dateJ.innerHTML = date.toLocaleString();
dateLJ.innerHTML = date.toLocaleDateString();
dateL.innerHTML = date.toLocaleTimeString()+"<br> "+ futur+"<br>"+ heur;


