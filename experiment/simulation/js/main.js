/* 

Lab name: Experimental Biochemistry
Exp name: Protein-DNA interaction analysis by electrophoretic mobilty shift assay (EMSA)
File name: main.js
Developer: Prakriti Dhang


*/



function restartexp(){
  location.reload();
}

function start(){
document.getElementById("anneal").disabled=false;
document.getElementById("start").disabled=true;
document.getElementById("icetray").removeAttribute("onclick");
document.getElementById("topcover").removeAttribute("onclick");
document.getElementById("opt11").disabled=false;
document.getElementById("opt12").disabled=false;
//document.getElementById('dilutesamplea').style.pointerEvents="none";
document.getElementById('dilutesampleb').style.pointerEvents="none";
  document.getElementById('dilutesamplec').style.pointerEvents="none";
  document.getElementById('dilutesampled').style.pointerEvents="none";
  document.getElementById('dilutesamplee').style.pointerEvents="none";

  document.getElementById('loadsamplea').style.pointerEvents="none";
  document.getElementById('loadsampleb').style.pointerEvents="none";
  document.getElementById('loadsamplec').style.pointerEvents="none";
  document.getElementById('loadsampled').style.pointerEvents="none";
  document.getElementById('loadsamplee').style.pointerEvents="none";
  
}


function dna1() {
  var checkBox1 = document.getElementById("opt11");

  if (checkBox1.checked == true){
    //image display block
    document.getElementById("dna2").style.display="block";
    window.scrollBy(0,700);
  } else {
    // image display "none";
    $('#alertModal').modal('show');
    $('.modal-body').text('Check the checkbox for Fluorescently-labelled single stranded DNA');
    document.getElementById("dna2").style.display="none";
  }
}

function dna2() {
  var checkBox2 = document.getElementById("opt12");

  if (checkBox2.checked == true){
    //image display block
    document.getElementById("dna1").style.display="block";
    window.scrollBy(0,700);
  } else {
    // image display "none";
    


    $('#alertModal').modal('show');
    $('.modal-body').text('Check the checkbox for Unlabelled single stranded DNA');
    document.getElementById("dna1").style.display="none";
  }
}

var imgdna1=null;
function annealing_dna(){
  
  var checkBox1 = document.getElementById("opt11");
  var checkBox2 = document.getElementById("opt12");

  if((checkBox1.checked == true)&& (checkBox2.checked == true)){
  document.getElementById("action").innerHTML="The fluorescently-labelled DNA probe is prepared by annealing the complementary oligonucleotides in thermocycler. The probe is purified by gel electrophoresis and quantified by UV spectroscopy.";
 window.scrollBy(0,700);
  var imgdnas1= document.getElementById("dna1");
  var orgtop = 57; /* initial position */
  clearInterval(imgdna1);
  imgdna1 = setInterval(frame1, 50); /* frame is 5 denotes the speed of the movement*/
  function frame1() {
    if (orgtop == 27) { /* moves to 27 top positon*/
      clearInterval(imgdna1); /* stops to 27 postion*/
      document.getElementById("buffer").disabled=false;
      document.getElementById("opt1").disabled=false;
      document.getElementById("opt2").disabled=false;
      document.getElementById("opt3").disabled=false;
      document.getElementById("opt4").disabled=false;
      document.getElementById("opt5").disabled=false;
      document.getElementById("opt6").disabled=false;
      document.getElementById("opt7").disabled=false;
      document.getElementById("opt8").disabled=false;
      document.getElementById("anneal").disabled=true;


    } else {
      orgtop--; 
      imgdnas1.style.top = orgtop + '%'; 
     
  
       
    }
  }
}
else{
  $('#alertModal').modal('show');
    $('.modal-body').text('Check both the checkboxes');
  
}
}

function buffer_prep(){
  var checkBox1 = document.getElementById("opt1");
  var checkBox2 = document.getElementById("opt2");
  var checkBox3 = document.getElementById("opt3");
  var checkBox4 = document.getElementById("opt4");
  var checkBox5 = document.getElementById("opt5");
  var checkBox6 = document.getElementById("opt6");
  var checkBox7 = document.getElementById("opt7");
  var checkBox8 = document.getElementById("opt8");

  if((checkBox1.checked == true)&& (checkBox2.checked == true)&& (checkBox3.checked == true)&& (checkBox4.checked == true)&& (checkBox5.checked == true)&& (checkBox6.checked == true)){
  document.getElementById("emptytube").style.display="block";
  document.getElementById("dna1").style.display="none";
  document.getElementById("dna2").style.display="none";
  document.getElementById("action").innerHTML="Preparing the 1x binding buffer to the desired concentration.";
  document.getElementById("step3").disabled=false;
  document.getElementById("buffer").disabled=true;
  window.scrollBy(0,700);
  }
  else{
    
    $('#alertModal').modal('show');
    $('.modal-body').text('Check all the components to prepare 1x binding buffer');
    
  }
}



var samplemix = document.getElementById("step3");
 function sample_mix(){
  if (samplemix.options[samplemix.selectedIndex].value == 0) {
   // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("action").innerHTML = "Choose correct component  ";

  }

  if (samplemix.options[samplemix.selectedIndex].value == 4) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component ";
     document.getElementById("emptytube").style.display="block";
     document.getElementById("dnastrand").style.display="block";
     document.getElementById("dnastrand1").style.display="block";
     window.scrollBy(0,600);
    // document.getElementById("tube").style.display="none";
     //document.getElementById("samplemix").disabled=false;
     
   }

   if (samplemix.options[samplemix.selectedIndex].value == 3) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
     document.getElementById("proteinsample").style.display="block";
     document.getElementById("emptytube").style.display="block";
     document.getElementById("proteinsample1").style.display="block";
     window.scrollBy(0,600);
    // document.getElementById("tube").style.display="none";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 1) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the incorrect component  ";
    // document.getElementById("tube").style.display="none";
    
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 2) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
   //  document.getElementById("tube").style.display="none";
     document.getElementById("emptytube").style.display="block";
     window.scrollBy(0,600);
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 5) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the incorrect component  ";
   //  document.getElementById("tube").style.display="none";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 6) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
     document.getElementById("emptytube").style.display="block";
     document.getElementById("lbuffer").style.display="block";
     document.getElementById("lbuffer1").style.display="block";
    // document.getElementById("tube").style.display="none";
     document.getElementById("samplebprep").disabled = false;
     window.scrollBy(0,600);
 
   }
   


 }
function sample_dilutionA(){
  document.getElementById('tubedila').style.display="block";
 // document.getElementById('tube').style.display="none";
  document.getElementById('dilutesampleb').style.pointerEvents="auto";
  document.getElementById("lbuffer").style.display="none";
  document.getElementById("proteinsample").style.display="none";
  document.getElementById("dnastrand").style.display="none";
  document.getElementById("lbuffer1").style.display="none";
  document.getElementById("proteinsample1").style.display="none";
  document.getElementById("dnastrand1").style.display="none";
  document.getElementById("emptytube").style.display="none";
  document.getElementById("action").innerHTML = "1x dilution is selected ";
  document.getElementById("step3").disabled = true;
  window.scrollBy(0,600);
  
}
function sample_dilutionB(){
  document.getElementById('tubedilb').style.display="block";
//  document.getElementById('tube').style.display="none";
  document.getElementById('dilutesamplec').style.pointerEvents="auto";
  document.getElementById("action").innerHTML = "0.5x dilution is selected ";
  window.scrollBy(0,600);
}
function sample_dilutionC(){
  document.getElementById('tubedilc').style.display="block";
 // document.getElementById('tube').style.display="none";
  document.getElementById('dilutesampled').style.pointerEvents="auto";
  document.getElementById("action").innerHTML = "0.25x dilution is selected ";
  window.scrollBy(0,600);
}
function sample_dilutionD(){
  document.getElementById('tubedild').style.display="block";
 // document.getElementById('tube').style.display="none";
  document.getElementById('dilutesamplee').style.pointerEvents="auto";
  document.getElementById("action").innerHTML = "0.125x dilution is selected ";
  window.scrollBy(0,600);
  window.scrollBy(0,600);
}
function sample_dilutionE(){
  document.getElementById('tubedile').style.display="block";
//  document.getElementById('tube').style.display="none";
  document.getElementById('icebucketbtn').disabled=false;
  document.getElementById("action").innerHTML = "0.0625x dilution is selected ";
  window.scrollBy(0,600);
}






function ice_bucket(){
  window.scrollBy(0,500);
  document.getElementById("samplebprep").disabled = true;
  document.getElementById('icebucket').style.display="block";
  document.getElementById('tubeicea').style.display="block";
  document.getElementById('tubeiceb').style.display="block";
  document.getElementById('tubeicec').style.display="block";
  document.getElementById('tubeiced').style.display="block";
  document.getElementById('tubeicee').style.display="block";
  document.getElementById('tubedila').style.display="none";
  document.getElementById('tubedilb').style.display="none";
  document.getElementById('tubedilc').style.display="none";
  document.getElementById('tubedild').style.display="none";
  document.getElementById('tubedile').style.display="none";
  document.getElementById("lbuffer").style.display="none";
  document.getElementById("proteinsample").style.display="none";
  document.getElementById("dnastrand").style.display="none";
  document.getElementById("lbuffer1").style.display="none";
  document.getElementById("proteinsample1").style.display="none";
  document.getElementById("dnastrand1").style.display="none";
  document.getElementById("emptytube").style.display="none";
 // document.getElementById("rungel").disabled=false;
  document.getElementById("action").innerHTML="Incubating in ice for 20-30 minutes to allow the protein-DNA complex to form.";
  document.getElementById("trisbuffertbtn").disabled = false;
  document.getElementById('dilutesamplea').style.pointerEvents="none";
  document.getElementById('dilutesampleb').style.pointerEvents="none";
  document.getElementById('dilutesamplec').style.pointerEvents="none";
  document.getElementById('dilutesampled').style.pointerEvents="none";
  document.getElementById('dilutesamplee').style.pointerEvents="none";
  document.getElementById("icebucketbtn").disabled = true;


}

function tris_buffer(){
  document.getElementById("trisbuffer").style.display="block";
  document.getElementById("action").innerHTML="Filling up the electrophoresis chamber with Tris-borate ETDA buffer.";
  window.scrollBy(0,500);

}


function addtribuffer(){
  document.getElementById("sampleload").disabled = false;
  document.getElementById('loadsamplea').style.pointerEvents="auto";
  document.getElementById("trisbuffertbtn").disabled=true;
  document.getElementById("trisbuffer").removeAttribute("onclick");
  window.scrollBy(0,800);
  /**side 1 */
  canvaside1 = document.getElementById("addtbuffer");
  ctxs1 = canvaside1.getContext("2d");
  var posY = 150;
  var speed = 0.5;

  function drawLine() {

    ctxs1.strokeStyle = '#DDE9FF ' //'#EAF2F8  ';
    ctxs1.globalAlpha = 0.03;
    ctxs1.lineWidth = 600;
    ctxs1.beginPath();
    ctxs1.moveTo(0, posY); /*  0-130*/
    ctxs1.lineTo(0, 150);
    ctxs1.stroke();
  }

  function moveLine() {
    posY += speed;

    if (posY < 0 || posY > canvaside1.height) {
      speed = speed * -1;
    }
  }

  function loop() {
    // clear old frame;
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    moveLine();
    drawLine();
    cancelani = requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

}

var canvassdrop1, ctxsdrop1;
function sample_sampleA(){
  document.getElementById("peptitea").style.display="block";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById('loadsampleb').style.pointerEvents="auto";
  document.getElementById("action").innerHTML="Loading sample A to the first well.";
  window.scrollBy(0,300);
 
  document.getElementById("peptitea").setAttribute("onclick", "p1()");
 
}

function p1() {
  clearp1 = setInterval(changep1, 200);
  document.getElementById("peptitea").removeAttribute("onclick", "p1()");
}

function changep1() {
  clearInterval(clearp1);
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitea1").style.display = "block";
  clearmpcnge1 = setInterval(changemp1, 300);

  function changemp1() {
    document.getElementById("peptitea").style.display = "block";
    document.getElementById("peptitea1").style.display = "none";
    clearmovep1 = setInterval(movep1, 300);
  }
}

function movep1() {
  clearInterval(clearmpcnge1);
  clearInterval(clearmovep1);
  document.getElementById("peptitea").style.top = 97 + "%";
  document.getElementById("peptitea").style.left = 9.5 + "%";
  document.getElementById("peptitea1").style.top = 100 + "%";
  document.getElementById("peptitea1").style.left = 9.5 + "%";
  document.getElementById("peptitea").setAttribute("onclick", "p11()");
}

function p11() {

  clearp11 = setInterval(changep11, 200);
  document.getElementById("peptitea").removeAttribute("onclick", "p11()");
}

function changep11() {

  clearInterval(clearp11);
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptitea1").style.display = "block";
  clearmpcnge11 = setInterval(changemp11, 300);

  function changemp11() {
    canvassdrop1 = document.getElementById('myCanvass1');
    ctxsdrop1 = canvassdrop1.getContext('2d');
    document.getElementById("peptitea").style.display = "block";
    document.getElementById("peptitea1").style.display = "none";
    canvassdrop1.style.backgroundColor = '#7FA9FF';
    clearInterval(clearmpcnge11);
  }
}




function sample_sampleB(){
  document.getElementById('loadsamplec').style.pointerEvents="auto";
  document.getElementById("peptiteb").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById("action").innerHTML="Loading sample B to the second well.";
  window.scrollBy(0,300);
  document.getElementById("peptiteb").setAttribute("onclick", "p2()");


}

function p2() {
  clearp2 = setInterval(changep2, 200);
  document.getElementById("peptiteb").removeAttribute("onclick", "p2()");
}

function changep2() {
  clearInterval(clearp2);
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptiteb1").style.display = "block";
  clearmpcnge2 = setInterval(changemp2, 300);

  function changemp2() {
    document.getElementById("peptiteb").style.display = "block";
    document.getElementById("peptiteb1").style.display = "none";
    clearmovep2 = setInterval(movep2, 300);
  }
}

function movep2() {
  clearInterval(clearmpcnge2);
  clearInterval(clearmovep2);
  document.getElementById("peptiteb").style.top = 97 + "%";
  document.getElementById("peptiteb").style.left = 12 + "%";
  document.getElementById("peptiteb1").style.top = 100 + "%";
  document.getElementById("peptiteb1").style.left = 12 + "%";
  document.getElementById("peptiteb").setAttribute("onclick", "p22()");
}

function p22() {

  clearp22 = setInterval(changep22, 200);
  document.getElementById("peptiteb").removeAttribute("onclick", "p22()");
}

function changep22() {

  clearInterval(clearp22);
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptiteb1").style.display = "block";
  clearmpcnge22 = setInterval(changemp22, 300);

  function changemp22() {
    var canvassdrop2 = document.getElementById('myCanvass2');
    var ctxsdrop2 = canvassdrop2.getContext('2d');
    document.getElementById("peptiteb").style.display = "block";
    document.getElementById("peptiteb1").style.display = "none";
    canvassdrop2.style.backgroundColor = '#7FA9FF';
    clearInterval(clearmpcnge22);
  }
}


function sample_sampleC(){
  document.getElementById('loadsampled').style.pointerEvents="auto";
  document.getElementById("peptitec").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById("action").innerHTML="Loading sample C to the third well.";
  window.scrollBy(0,300);
 document.getElementById("peptitec").setAttribute("onclick", "p3()");
  
}

function p3() {
  clearp3 = setInterval(changep3, 200);
  document.getElementById("peptitec").removeAttribute("onclick", "pc()");
}

function changep3() {
  clearInterval(clearp3);
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitec1").style.display = "block";
  clearmpcnge3 = setInterval(changemp3, 300);

  function changemp3() {
    document.getElementById("peptitec").style.display = "block";
    document.getElementById("peptitec1").style.display = "none";
    clearmovep3 = setInterval(movep3, 300);
  }
}

function movep3() {
  clearInterval(clearmpcnge3);
  clearInterval(clearmovep3);
  document.getElementById("peptitec").style.top = 97 + "%";
  document.getElementById("peptitec").style.left = 14.5 + "%";
  document.getElementById("peptitec1").style.top = 100 + "%";
  document.getElementById("peptitec1").style.left = 14.5 + "%";
  document.getElementById("peptitec").setAttribute("onclick", "p33()");
}

function p33() {

  clearp33 = setInterval(changep33, 200);
  document.getElementById("peptitec").removeAttribute("onclick", "p33()");
}

function changep33() {

  clearInterval(clearp33);
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptitec1").style.display = "block";
  clearmpcnge33 = setInterval(changemp33, 300);

  function changemp33() {
    var canvassdrop3 = document.getElementById('myCanvass3');
    var ctxsdrop3 = canvassdrop3.getContext('2d');
    document.getElementById("peptitec").style.display = "block";
    document.getElementById("peptitec1").style.display = "none";
    canvassdrop3.style.backgroundColor = '#7FA9FF';
    clearInterval(clearmpcnge33);
  }
}


function sample_sampleD(){
  document.getElementById('loadsamplee').style.pointerEvents="auto";
  document.getElementById("peptited").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById("action").innerHTML="Loading sample D to the fourth well.";
  window.scrollBy(0,300);
  
document.getElementById("peptited").setAttribute("onclick", "p4()");

}

function p4() {
  clearp4 = setInterval(changep4, 200);
  document.getElementById("peptited").removeAttribute("onclick", "p4()");
}

function changep4() {
  clearInterval(clearp4);
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptited1").style.display = "block";
  clearmpcnge4 = setInterval(changemp4, 300);

  function changemp4() {
    document.getElementById("peptited").style.display = "block";
    document.getElementById("peptited1").style.display = "none";
    clearmovep4 = setInterval(movep4, 300);
  }
}

function movep4() {
  clearInterval(clearmpcnge4);
  clearInterval(clearmovep4);
  document.getElementById("peptited").style.top = 97 + "%";
  document.getElementById("peptited").style.left = 16.5 + "%";
  document.getElementById("peptited1").style.top = 100 + "%";
  document.getElementById("peptited1").style.left = 16.5 + "%";
  document.getElementById("peptited").setAttribute("onclick", "p44()");
}

function p44() {

  clearp44 = setInterval(changep44, 200);
  document.getElementById("peptited").removeAttribute("onclick", "p44()");
}

function changep44() {

  clearInterval(clearp44);
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptited1").style.display = "block";
  clearmpcnge44 = setInterval(changemp44, 300);

  function changemp44() {
    var canvassdrop4 = document.getElementById('myCanvass4');
    var ctxsdrop4 = canvassdrop4.getContext('2d');
    document.getElementById("peptited").style.display = "block";
    document.getElementById("peptited1").style.display = "none";
    canvassdrop4.style.backgroundColor = '#7FA9FF';
    clearInterval(clearmpcnge44);
  }
}

function sample_sampleE(){
  document.getElementById("peptitee").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("rungel").disabled=false;
  document.getElementById("action").innerHTML="Loading sample E to the fifth well.";
  window.scrollBy(0,300);
  document.getElementById("peptitee").setAttribute("onclick", "p5()");

}

function p5() {
  clearp5 = setInterval(changep5, 200);
  document.getElementById("peptitee").removeAttribute("onclick", "p5()");
}

function changep5() {
  clearInterval(clearp5);
  document.getElementById("peptitee").style.display = "none";
  document.getElementById("peptitee1").style.display = "block";
  clearmpcnge5 = setInterval(changemp5, 300);

  function changemp5() {
    document.getElementById("peptitee").style.display = "block";
    document.getElementById("peptitee1").style.display = "none";
    clearmovep5= setInterval(movep5, 300);
  }
}

function movep5() {
  clearInterval(clearmpcnge5);
  clearInterval(clearmovep5);
  document.getElementById("peptitee").style.top = 97 + "%";
  document.getElementById("peptitee").style.left = 18.5 + "%";
  document.getElementById("peptitee1").style.top = 100 + "%";
  document.getElementById("peptitee1").style.left = 18.5 + "%";
  document.getElementById("peptitee").setAttribute("onclick", "p55()");
}

function p55() {

  clearp55 = setInterval(changep55, 200);
  document.getElementById("peptitee").removeAttribute("onclick", "p55()");
}

function changep55() {

  clearInterval(clearp55);
  document.getElementById("peptitee").style.display = "none";
  document.getElementById("peptitee1").style.display = "block";
  clearmpcnge55 = setInterval(changemp55, 300);

  function changemp55() {
    var canvassdrop5 = document.getElementById('myCanvass5');
    var ctxsdrop5 = canvassdrop5.getContext('2d');
    document.getElementById("peptitee").style.display = "block";
    document.getElementById("peptitee1").style.display = "none";
    canvassdrop5.style.backgroundColor = '#7FA9FF';
    clearInterval(clearmpcnge55);
  }
}


var imgtopsetup = null;
function putdowntop(){
  var topsetup = document.getElementById("topcover");
  

  var topsetupt = 120; //initial  position
  clearInterval(imgtopsetup);
  //clearInterval(imgtbdown);
  imgtopsetup = setInterval(frame, 15); /* frame is 10 denotes the speed of the movement*/

  function frame() {
    if (topsetupt == 130) {

      clearInterval(imgtopsetup);
      document.getElementById("topcover").removeAttribute("onclick","putdowntop()");

      //imgtbdown = setInterval(frame, 20);


    } else {

      topsetupt++;
      topsetup.style.top = topsetupt + '%';

    }
  }

}

var imgicetray = null;
function putupicetray(){
  var topsetup = document.getElementById("icetray");
  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptitee").style.display = "none";

  var topsetupt = 250; //initial  position
  clearInterval(imgtopsetup);
  //clearInterval(imgtbdown);
  imgtopsetup = setInterval(frame, 15); /* frame is 10 denotes the speed of the movement*/

  function frame() {
    if (topsetupt == 195) {

      clearInterval(imgtopsetup);
      

      //imgtbdown = setInterval(frame, 20);


    } else {

      topsetupt--;
      topsetup.style.top = topsetupt + '%';

    }
  }
}



/* Setting up electrophoresis*/

function run_gel(){
  document.getElementById("action").innerHTML="	Running the gel in electrophoresis buffer between 100 and 120 volts until the dye front reaches the bottom of the gel in dark conditions as DNA is fluorescently labelled.";
  document.getElementById('cvt').style.display="block";
 
  document.getElementById('crun').style.display="block";

  document.getElementById("peptitea").style.display = "none";
  document.getElementById("peptiteb").style.display = "none";
  document.getElementById("peptitec").style.display = "none";
  document.getElementById("peptited").style.display = "none";
  document.getElementById("peptitee").style.display = "none";

  //document.getElementById("icetray").setAttribute("onclick","putupicetray()");
document.getElementById("topcover").setAttribute("onclick","putdowntop()");

document.getElementById('tubeicea').style.display="none";
document.getElementById('tubeiceb').style.display="none";
document.getElementById('tubeicec').style.display="none";
document.getElementById('tubeiced').style.display="none";
document.getElementById('tubeicee').style.display="none";
document.getElementById('icebucket').style.display="none";
document.getElementById("sampleload").disabled=true;
//document.getElementById("cd1").style.top = "140%";
//document.getElementById("cd2").style.top = "140%";
}

function txtvolt(){
    const canvas = document.getElementById('textvoltimer');
    document.getElementById('cvp').style.display="block";
  
  var volt = 0;
  // Check if the browser supports the canvas element

  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Set font properties
  ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family

  // Set text properties
  ctx.fillStyle = 'black'; // Text color
  ctx.textAlign = 'center'; // Text alignment (centered horizontally)
  ctx.textBaseline = 'middle'; // Text baseline (centered vertically)

  // Define the text to be displayed
  const text = volt;

  // Get the position to place the text (in this case, centered on the canvas)
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw the text on the canvas
  ctx.fillText(text, x, y);
}

/**************************************************** Increase voltage value **********************************************************************************/

var volt = 0;
function txtvoltp(){
  volt = volt + 10;
    const canvas = document.getElementById('textvoltimer');

    document.getElementById('cvn').style.display="block";
   
    // Get the 2D drawing context
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Set font properties
    ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family
  
    // Set text properties
    ctx.fillStyle = 'black'; // Text color
    ctx.textAlign = 'center'; // Text alignment (centered horizontally)
    ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
  
    // Define the text to be displayed
    const text = volt;
  
  
    // Get the position to place the text (in this case, centered on the canvas)
    const x = canvas.width / 2;
    const y = canvas.height / 2;
  
    // Draw the text on the canvas
    ctx.fillText(text, x, y);
  
    
}

/**************************************************** Decrease voltage value **********************************************************************************/


function txtvoltd() {

    const canvas = document.getElementById('textvoltimer');
  
  
    // Get the 2D drawing context
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Set font properties
    ctx.font = 'bold 80px Arial'; // You can adjust the font weight, size and family
  
    // Set text properties
    ctx.fillStyle = 'black'; // Text color
    ctx.textAlign = 'center'; // Text alignment (centered horizontally)
    ctx.textBaseline = 'middle'; // Text baseline (centered vertically)
    volt = volt - 10;
    // Define the text to be displayed
    const text = volt;
  
  
    // Get the position to place the text (in this case, centered on the canvas)
    const x = canvas.width / 2;
    const y = canvas.height / 2;
  
    // Draw the text on the canvas
    ctx.fillText(text, x, y);
  
  
  }

  function rungel(){


if(volt == null){
 
  $('#alertModal').modal('show');
  $('.modal-body').text('Voltage should be between 100 V and 120 V');
	  

}
else if((volt<100) || (volt>120)){
  $('#alertModal').modal('show');
  $('.modal-body').text('Voltage should be between 100 V and 120 V');
	  
}
else{
    samplerun();
    document.getElementById("cstop").style.display="block";
    document.getElementById("topcover").removeAttribute("onclick","puttopup()");

  }
  }



  
  function cancelmsg() {
    document.getElementById("alertModal").style.display = "none";
    document.getElementById("alertModal").classList.remove("show");
  }



  var imgtopsetup1=null;
  function puttopup(){


    var topsetup1 = document.getElementById("topcover");
  

    var topsetupt1 = 130; //initial  position
    clearInterval(imgtopsetup1);
    //clearInterval(imgtbdown);
    imgtopsetup1 = setInterval(frame, 15); /* frame is 10 denotes the speed of the movement*/
  
    function frame() {
      if (topsetupt1 == 120) {
  
        clearInterval(imgtopsetup1);
        document.getElementById("viewsample").disabled=false;
        document.getElementById("topcover").removeAttribute("onclick","puttopup()");
        //imgtbdown = setInterval(frame, 20);
      //  document.getElementById("cd1").style.top= 130 + '%';
        //document.getElementById("cd2").style.top= 130 + '%';
      //  var cd1s= document.getElementById("cd1");
      //  var cd2s= document.getElementById("cd2");
      //  cd1s.style.top = 130 + '%';
       // cd2s.style.top = 130 + '%';
      
  
      } else {
  
        topsetupt1--;
        topsetup1.style.top = topsetupt1 + '%';
  
      }
    }
  


  }

  function view_sample_UVlight(){
    document.getElementById("myCanvass11").style.display="none";
    document.getElementById("myCanvass21").style.display="none";
    document.getElementById("myCanvass31").style.display="none";
    document.getElementById("myCanvass41").style.display="none";
    document.getElementById("myCanvass51").style.display="none";


    document.getElementById("myCanvass1").style.display="none";
    document.getElementById("myCanvass2").style.display="none";
    document.getElementById("myCanvass3").style.display="none";
    document.getElementById("myCanvass4").style.display="none";
    document.getElementById("myCanvass5").style.display="none";


    document.getElementById("action").innerHTML="Visualizing the protein-DNA complex under the fluorescence sensitive imaging system.";
    window.scrollBy(0,800);
    document.getElementById("output").style.display="block";
    canvasuv1 = document.getElementById("myCanvasuv1");
  ctxuv1 = canvasuv1.getContext("2d");
  const gradient = ctxuv1.createLinearGradient(0, 0, canvasuv1.width, 0);

  // Add color stops to the gradient
  gradient.addColorStop(0, 'white');     // Start color (position 0)
  gradient.addColorStop(0.8, '#F6FFBE');  // Middle color (position 0.5)
  gradient.addColorStop(1, '#F6FFBE   ');      // End color (position 1)


  ctxuv1.strokeStyle = gradient;
  

    ctxuv1.lineWidth = 300;
    ctxuv1.beginPath();
    ctxuv1.moveTo(120, 0); /*  0-180*/
    ctxuv1.lineTo(0, 0);
    ctxuv1.stroke();


    canvasuv2 = document.getElementById("myCanvasuv2");
  ctxuv2 = canvasuv2.getContext("2d");
  const gradient2 = ctxuv1.createLinearGradient(0, 0, canvasuv2.width, 0);

  // Add color stops to the gradient
  gradient2.addColorStop(0, 'white');     // Start color (position 0)
  gradient2.addColorStop(0.8, '#F6FFBE ');  // Middle color (position 0.5)
  gradient2.addColorStop(1, '#F6FFBE   ');      // End color (position 1)


  ctxuv2.strokeStyle = gradient2;

 
    ctxuv2.lineWidth = 300;
    ctxuv2.beginPath();
    ctxuv2.moveTo(120, 0); /*  0-180*/
    ctxuv2.lineTo(0, 0);
    ctxuv2.stroke();
  }



function samplerun(){

  document.getElementById("rungel").disabled=true;
   /** Sample 1 */
   canvass11 = document.getElementById("myCanvass11");
   ctxgs11 = canvass11.getContext("2d");
   var posY = 0;
   var speed = 0.2;
 
 
 
   function drawLine() {
     const gradient = ctxgs11.createLinearGradient(0, 0, 0, canvass11.height);
 
     // Add color stops to the gradient
     gradient.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
     gradient.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
     gradient.addColorStop(1, '#7FA9FF');      // End color (position 1)
 
     // Set the stroke style to the gradient
     ctxgs11.strokeStyle = gradient;
 
    // ctxgs1.strokeStyle = '#7FA9FF';
     //ctxs1.fillStyle = gr;
     //ctxs1.fillRect(10,10,150,80);
     ctxgs11.lineWidth = 600;
     ctxgs11.beginPath();
     ctxgs11.moveTo(0, posY); /*  */
     ctxgs11.lineTo(0, 0);
     ctxgs11.stroke();
   }
 
   function moveLine() {
     posY += speed;
 
     if (posY < 0 || posY > canvass11.height) {
       speed = speed * -1;
     }
   }
 
   function loop() {
     // clear old frame;
     // ctx.clearRect(0,0,canvas.width, canvas.height);
     moveLine();
     drawLine();
     cancelani1 = requestAnimationFrame(loop);
   }
   requestAnimationFrame(loop);
 
 
 
   /*sample 2 */

   canvass21 = document.getElementById("myCanvass21");
   ctxgs21 = canvass21.getContext("2d");
   var posY2 = 0;
   var speed2 = 0.2;
 
 
 
   function drawLine2() {
     const gradient2 = ctxgs21.createLinearGradient(0, 0, 0, canvass21.height);
 
     // Add color stops to the gradient
     gradient2.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
     gradient2.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
     gradient2.addColorStop(1, '#7FA9FF');      // End color (position 1)
 
     // Set the stroke style to the gradient
     ctxgs21.strokeStyle = gradient2;
 
    // ctxgs1.strokeStyle = '#7FA9FF';
     //ctxs1.fillStyle = gr;
     //ctxs1.fillRect(10,10,150,80);
     ctxgs21.lineWidth = 600;
     ctxgs21.beginPath();
     ctxgs21.moveTo(0, posY2); /*  */
     ctxgs21.lineTo(0, 0);
     ctxgs21.stroke();
   }
 
   function moveLine2() {
     posY2 += speed2;
 
     if (posY2 < 0 || posY2 > canvass21.height) {
       speed2 = speed2 * -1;
     }
   }
 
   function loop2() {
     // clear old frame;
     // ctx.clearRect(0,0,canvas.width, canvas.height);
     moveLine2();
     drawLine2();
     cancelani2 = requestAnimationFrame(loop2);
   }
   requestAnimationFrame(loop2);
 
 
 /*sample 3 */

 canvass31 = document.getElementById("myCanvass31");
 ctxgs31 = canvass31.getContext("2d");
 var posY3 = 0;
 var speed3 = 0.2;



 function drawLine3() {
   const gradient3 = ctxgs31.createLinearGradient(0, 0, 0, canvass31.height);

   // Add color stops to the gradient
   gradient3.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
   gradient3.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
   gradient3.addColorStop(1, '#7FA9FF');      // End color (position 1)

   // Set the stroke style to the gradient
   ctxgs31.strokeStyle = gradient3;

  // ctxgs1.strokeStyle = '#7FA9FF';
   //ctxs1.fillStyle = gr;
   //ctxs1.fillRect(10,10,150,80);
   ctxgs31.lineWidth = 600;
   ctxgs31.beginPath();
   ctxgs31.moveTo(0, posY3); /*  */
   ctxgs31.lineTo(0, 0);
   ctxgs31.stroke();
 }

 function moveLine3() {
   posY3 += speed3;

   if (posY3 < 0 || posY3 > canvass31.height) {
     speed3 = speed3 * -1;
   }
 }

 function loop3() {
   // clear old frame;
   // ctx.clearRect(0,0,canvas.width, canvas.height);
   moveLine3();
   drawLine3();
   cancelani3 = requestAnimationFrame(loop3);
 }
 requestAnimationFrame(loop3);

/*sample 4 */

canvass41 = document.getElementById("myCanvass41");
ctxgs41 = canvass41.getContext("2d");
var posY4 = 0;
var speed4 = 0.2;



function drawLine4() {
 const gradient4 = ctxgs41.createLinearGradient(0, 0, 0, canvass41.height);

 // Add color stops to the gradient
 gradient4.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
 gradient4.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
 gradient4.addColorStop(1, '#7FA9FF');      // End color (position 1)

 // Set the stroke style to the gradient
 ctxgs41.strokeStyle = gradient4;

// ctxgs1.strokeStyle = '#7FA9FF';
 //ctxs1.fillStyle = gr;
 //ctxs1.fillRect(10,10,150,80);
 ctxgs41.lineWidth = 600;
 ctxgs41.beginPath();
 ctxgs41.moveTo(0, posY4); /*  */
 ctxgs41.lineTo(0, 0);
 ctxgs41.stroke();
}

function moveLine4() {
 posY4 += speed4;

 if (posY4 < 0 || posY4 > canvass41.height) {
   speed4 = speed4 * -1;
 }
}

function loop4() {
 // clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
 moveLine4();
 drawLine4();
 cancelani4 = requestAnimationFrame(loop4);
}
requestAnimationFrame(loop4);

/*sample 5 */

canvass51 = document.getElementById("myCanvass51");
ctxgs51 = canvass51.getContext("2d");
var posY5 = 0;
var speed5 = 0.2;



function drawLine5() {
 const gradient5 = ctxgs51.createLinearGradient(0, 0, 0, canvass51.height);

 // Add color stops to the gradient
 gradient5.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
 gradient5.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
 gradient5.addColorStop(1, '#7FA9FF');      // End color (position 1)

 // Set the stroke style to the gradient
 ctxgs51.strokeStyle = gradient5;

// ctxgs1.strokeStyle = '#7FA9FF';
 //ctxs1.fillStyle = gr;
 //ctxs1.fillRect(10,10,150,80);
 ctxgs51.lineWidth = 600;
 ctxgs51.beginPath();
 ctxgs51.moveTo(0, posY5); /*  */
 ctxgs51.lineTo(0, 0);
 ctxgs51.stroke();
}

function moveLine5() {
 posY5 += speed5;

 if (posY5 < 0 || posY5 > canvass51.height) {
   speed5 = speed5 * -1;
 }
}

function loop5() {
 // clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
 moveLine5();
 drawLine5();
 cancelani5 = requestAnimationFrame(loop5);
}
requestAnimationFrame(loop5);

/*sample 6 

canvass61 = document.getElementById("myCanvass61");
ctxgs61 = canvass61.getContext("2d");
var posY6 = 0;
var speed6 = 0.2;



function drawLine6() {
 const gradient6 = ctxgs61.createLinearGradient(0, 0, 0, canvass61.height);

 // Add color stops to the gradient
 gradient6.addColorStop(0, '#EBFCFF ');     // Start color (position 0)
 gradient6.addColorStop(0.9, '#E8F8FF');  // Middle color (position 0.8)
 gradient6.addColorStop(1, '#7FA9FF');      // End color (position 1)

 // Set the stroke style to the gradient
 ctxgs61.strokeStyle = gradient6;

// ctxgs1.strokeStyle = '#7FA9FF';
 //ctxs1.fillStyle = gr;
 //ctxs1.fillRect(10,10,150,80);
 ctxgs61.lineWidth = 600;
 ctxgs61.beginPath();
 ctxgs61.moveTo(0, posY6); 
 ctxgs61.lineTo(0, 0);
 ctxgs61.stroke();
}

function moveLine6() {
 posY6 += speed6;

 if (posY6 < 0 || posY6 > canvass61.height) {
   speed6 = speed6 * -1;
 }
}

function loop6() {
 // clear old frame;
 // ctx.clearRect(0,0,canvas.width, canvas.height);
 moveLine6();
 drawLine6();
 cancelani = requestAnimationFrame(loop6);
}
requestAnimationFrame(loop6);*/

   
}