let AMPM;
let InputAMPM;
let Inputhour;
let Inputminutes;
let Inputseconds;
let Currenttime;
let Hour;
let Minute;
let second;
let Decreasedtime;
let Realtime;
function Submit() {
     Inputhour = parseInt(document.getElementById("first-opt").value);
     Inputminutes = parseInt(document.getElementById("second-opt").value);
     Inputseconds = parseInt(document.getElementById("third-opt").value);
     InputAMPM = document.getElementById("fourth-opt").value;
 
     Currenttime = new Date();
     Hour = Currenttime.getHours();
     if (Hour < 12) {
         AMPM = "AM";
     } else {
         AMPM = "PM";
         Decreasedtime = Hour - 12;
     }
     Minute = Currenttime.getMinutes();
     second = Currenttime.getSeconds();
     oe();
 }
 
function oe() {
    console.log(Inputhour + " : " + Inputminutes + " : " + Inputseconds + " " + InputAMPM);
    if (Hour < 12){
        Realhour = Hour;
    } else {
        Realhour = Decreasedtime;
    }
    if (Inputhour === Realhour && Inputminutes === Minute && Inputseconds === second && InputAMPM === AMPM) {
        alert("Wake up u fool");
    } else {
        setTimeout(oe, 1000);
}
}
 function father(){
      Currenttime = new Date();
      Hour = Currenttime.getHours();
      Minute = Currenttime.getMinutes();
      second =Currenttime.getSeconds();
     if (Hour <12){
          AMPM = "AM";
          document.getElementById("time").innerHTML = Hour+ " : " +  Minute + " : " +  second+ " " +  AMPM;
     } else {
          AMPM = "PM";
          Decreasedtime = Hour - 12;
          document.getElementById("time").innerHTML = Decreasedtime+ " : " +  Minute + " : " +  second+ " " +  AMPM;
      }
      
     }
       setInterval(father, 1000);
       alert("Every second will be shown in the page");
