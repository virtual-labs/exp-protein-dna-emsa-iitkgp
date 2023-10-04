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
    window.scrollBy(0,60);
  } else {
    // image display "none";
    alert("Check the checkbox for Fluorescently-labelled single stranded DNA" );
    document.getElementById("dna2").style.display="none";
  }
}

function dna2() {
  var checkBox2 = document.getElementById("opt12");

  if (checkBox2.checked == true){
    //image display block
    document.getElementById("dna1").style.display="block";
    window.scrollBy(0,60);
  } else {
    // image display "none";
    alert("Check the checkbox for Unlabelled single stranded DNA" );
    document.getElementById("dna1").style.display="none";
  }
}

var imgdna1=null;
function annealing_dna(){
  
  var checkBox1 = document.getElementById("opt11");
  var checkBox2 = document.getElementById("opt12");

  if((checkBox1.checked == true)&& (checkBox2.checked == true)){
  document.getElementById("action").innerHTML="The fluorescently-labelled DNA probe is prepared by annealing the complementary oligonucleotides in thermocycler. The probe is purified by gel electrophoresis and quantified by UV spectroscopy.";
 window.scrollBy(0,100);
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
  alert("Check both the checkboxes");
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
  document.getElementById("tube").style.display="block";
  document.getElementById("dna1").style.display="none";
  document.getElementById("dna2").style.display="none";
  document.getElementById("action").innerHTML="Preparing the 1x binding buffer to the desired concentration.";
  document.getElementById("step3").disabled=false;
  document.getElementById("buffer").disabled=true;

  }
  else{
    alert("Check all the components to prepare 1x binding buffer");
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
     document.getElementById("tube").style.display="none";
     //document.getElementById("samplemix").disabled=false;
 
   }

   if (samplemix.options[samplemix.selectedIndex].value == 3) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
     document.getElementById("proteinsample").style.display="block";
     document.getElementById("emptytube").style.display="block";
     document.getElementById("proteinsample1").style.display="block";
     document.getElementById("tube").style.display="none";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 1) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the incorrect component  ";
     document.getElementById("tube").style.display="none";
    
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 2) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
     document.getElementById("tube").style.display="none";
     document.getElementById("emptytube").style.display="block";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 5) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the incorrect component  ";
     document.getElementById("tube").style.display="none";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 6) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
     document.getElementById("emptytube").style.display="block";
     document.getElementById("lbuffer").style.display="block";
     document.getElementById("lbuffer1").style.display="block";
     document.getElementById("tube").style.display="none";
     document.getElementById("samplebprep").disabled = false;
 
   }
   


 }
function sample_dilutionA(){
  document.getElementById('tubedila').style.display="block";
  document.getElementById('tube').style.display="none";
  document.getElementById('dilutesampleb').style.pointerEvents="auto";
  document.getElementById("lbuffer").style.display="none";
  document.getElementById("proteinsample").style.display="none";
  document.getElementById("dnastrand").style.display="none";
  document.getElementById("lbuffer1").style.display="none";
  document.getElementById("proteinsample1").style.display="none";
  document.getElementById("dnastrand1").style.display="none";
  document.getElementById("emptytube").style.display="none";
  document.getElementById("action").innerHTML = "1x dilution is selected ";
  
}
function sample_dilutionB(){
  document.getElementById('tubedilb').style.display="block";
  document.getElementById('tube').style.display="none";
  document.getElementById('dilutesamplec').style.pointerEvents="auto";
  document.getElementById("action").innerHTML = "0.5x dilution is selected ";
}
function sample_dilutionC(){
  document.getElementById('tubedilc').style.display="block";
  document.getElementById('tube').style.display="none";
  document.getElementById('dilutesampled').style.pointerEvents="auto";
  document.getElementById("action").innerHTML = "0.25x dilution is selected ";
}
function sample_dilutionD(){
  document.getElementById('tubedild').style.display="block";
  document.getElementById('tube').style.display="none";
  document.getElementById('dilutesamplee').style.pointerEvents="auto";
  document.getElementById("action").innerHTML = "0.125x dilution is selected ";
}
function sample_dilutionE(){
  document.getElementById('tubedile').style.display="block";
  document.getElementById('tube').style.display="none";
  document.getElementById('icebucketbtn').disabled=false;
  document.getElementById("action").innerHTML = "0.0625x dilution is selected ";
}






function ice_bucket(){
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

}


function addtribuffer(){
  document.getElementById("sampleload").disabled = false;
  document.getElementById('loadsamplea').style.pointerEvents="auto";
  document.getElementById("trisbuffertbtn").disabled=true;
  document.getElementById("trisbuffer").removeAttribute("onclick");
  window.scrollBy(0,200);
  /**side 1 */
  canvaside1 = document.getElementById("addtbuffer");
  ctxs1 = canvaside1.getContext("2d");
  var posY = 150;
  var speed = 0.5;

  function drawLine() {

    ctxs1.strokeStyle = '#EAF2F8  ';
    ctxs1.globalAlpha = 0.04;
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


function sample_sampleA(){
  document.getElementById("peptitea").style.display="block";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById('loadsampleb').style.pointerEvents="auto";
  document.getElementById("action").innerHTML="Loading sample A to the first well.";

  const canvassdrop1 = document.getElementById('myCanvass1');
  const ctxsdrop1 = canvassdrop1.getContext('2d');
 
  const imagepp = document.getElementById('peptitea');

  let isDragging = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging = true;
    imagepp.style.cursor = 'pointer';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging) {
        // Update the position of the image based on mouse/touch position
        imagepp.style.left = event.clientX - offsetX + 'px';
        imagepp.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp.getBoundingClientRect();
        const canvasRect = canvassdrop1.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop1.style.backgroundColor = '#7FA9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging = false;
      imagepp.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      imagepp.removeEventListener('touchmove', handleMouseMove);
      imagepp.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    imagepp.addEventListener('touchmove', handleMouseMove);
    imagepp.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp.addEventListener('mousedown', handleMouseDown);
  imagepp.addEventListener('touchstart', handleMouseDown);
  imagepp.addEventListener('click', changeColor);
  imagepp.addEventListener('touchend', changeColor);


}





function sample_sampleB(){
  document.getElementById('loadsamplec').style.pointerEvents="auto";
  document.getElementById("peptiteb").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById("action").innerHTML="Loading sample B to the second well.";

  const canvassdrop2 = document.getElementById('myCanvass2');
  const ctxsdrop2 = canvassdrop2.getContext('2d');
 
  const imagepp2 = document.getElementById('peptiteb');

  let isDragging2 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging2 = true;
    imagepp2.style.cursor = 'pointer';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp2.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp2.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging2) {
        // Update the position of the image based on mouse/touch position
        imagepp2.style.left = event.clientX - offsetX + 'px';
        imagepp2.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp2.getBoundingClientRect();
        const canvasRect = canvassdrop2.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop2.style.backgroundColor = '#7FA9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging2 = false;
      imagepp2.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      imagepp2.removeEventListener('touchmove', handleMouseMove);
      imagepp2.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    imagepp2.addEventListener('touchmove', handleMouseMove);
    imagepp2.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp2.style.filter = 'hue-rotate(20deg)'; // Change color  (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp2.addEventListener('mousedown', handleMouseDown);
  imagepp2.addEventListener('touchstart', handleMouseDown);
  imagepp2.addEventListener('click', changeColor);
  imagepp2.addEventListener('touchend', changeColor);
}


function sample_sampleC(){
  document.getElementById('loadsampled').style.pointerEvents="auto";
  document.getElementById("peptitec").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById("action").innerHTML="Loading sample C to the third well.";

 
  const canvassdrop3 = document.getElementById('myCanvass3');
  const ctxsdrop3 = canvassdrop3.getContext('2d');

  const imagepp3 = document.getElementById('peptitec');

  let isDragging3 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging3 = true;
    imagepp3.style.cursor = 'pointer';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp3.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp3.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging3) {
        // Update the position of the image based on mouse/touch position
        imagepp3.style.left = event.clientX - offsetX + 'px';
        imagepp3.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp3.getBoundingClientRect();
        const canvasRect = canvassdrop3.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop3.style.backgroundColor = '#7FA9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging3 = false;
      imagepp3.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      imagepp3.removeEventListener('touchmove', handleMouseMove);
      imagepp3.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    imagepp3.addEventListener('touchmove', handleMouseMove);
    imagepp3.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp3.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp3.addEventListener('mousedown', handleMouseDown);
  imagepp3.addEventListener('touchstart', handleMouseDown);
  imagepp3.addEventListener('click', changeColor);
  imagepp3.addEventListener('touchend', changeColor);
}



function sample_sampleD(){
  document.getElementById('loadsamplee').style.pointerEvents="auto";
  document.getElementById("peptited").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("peptitee").style.display="none";
  document.getElementById("action").innerHTML="Loading sample D to the fourth well.";

  const canvassdrop4 = document.getElementById('myCanvass4');
  const ctxsdrop4 = canvassdrop4.getContext('2d');
 
  const imagepp4 = document.getElementById('peptited');

  let isDragging4 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging4 = true;
    imagepp4.style.cursor = 'pointer';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp4.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp4.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging4) {
        // Update the position of the image based on mouse/touch position
        imagepp4.style.left = event.clientX - offsetX + 'px';
        imagepp4.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp4.getBoundingClientRect();
        const canvasRect = canvassdrop4.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop4.style.backgroundColor = '#7FA9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging4 = false;
      imagepp4.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      imagepp4.removeEventListener('touchmove', handleMouseMove);
      imagepp4.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    imagepp4.addEventListener('touchmove', handleMouseMove);
    imagepp4.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp4.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp4.addEventListener('mousedown', handleMouseDown);
  imagepp4.addEventListener('touchstart', handleMouseDown);
  imagepp4.addEventListener('click', changeColor);
  imagepp4.addEventListener('touchend', changeColor);

}


function sample_sampleE(){
  document.getElementById("peptitee").style.display="block";
  document.getElementById("peptitea").style.display="none";
  document.getElementById("peptitec").style.display="none";
  document.getElementById("peptited").style.display="none";
  document.getElementById("peptiteb").style.display="none";
  document.getElementById("rungel").disabled=false;
  document.getElementById("action").innerHTML="Loading sample E to the fifth well.";
  
  const canvassdrop5 = document.getElementById('myCanvass5');
  const ctxsdrop5 = canvassdrop5.getContext('2d');
 
  const imagepp5 = document.getElementById('peptitee');

  let isDragging5 = false;

  // Function to handle mouse/touch down event
  function handleMouseDown(event) {
    isDragging5 = true;
    imagepp5.style.cursor = 'pointer';
    /*  imageppb.style.cursor = 'grabbing';
     imageppc.style.cursor = 'grabbing';
     imageppd.style.cursor = 'grabbing'; */

    // Calculate the offset of the mouse/touch position relative to the image
    const offsetX = event.clientX - imagepp5.getBoundingClientRect().left;
    const offsetY = event.clientY - imagepp5.getBoundingClientRect().top;


    // Function to handle mouse/touch move event
    function handleMouseMove(event) {
      if (isDragging5) {
        // Update the position of the image based on mouse/touch position
        imagepp5.style.left = event.clientX - offsetX + 'px';
        imagepp5.style.top = event.clientY - offsetY + 'px';



        const imageRect = imagepp5.getBoundingClientRect();
        const canvasRect = canvassdrop5.getBoundingClientRect();
        /*  const canvasRect2 = canvassdrop2.getBoundingClientRect();
         const canvasRect3 = canvassdrop3.getBoundingClientRect();
         const canvasRect4 = canvassdrop4.getBoundingClientRect(); */

        if (imageRect.left + imageRect.width >= canvasRect.left && imageRect.top + imageRect.height >= canvasRect.top && imageRect.left <= canvasRect.left + canvasRect.width && imageRect.top <= canvasRect.top + canvasRect.height) {
          // Change the canvas color when the image touches it
          canvassdrop5.style.backgroundColor = '#7FA9FF';

        }


        /* else {
          document.getElementById("gelrun").disabled = true;
          // Reset the canvas color if the image is outside the canvas
         canvassdrop1.style.backgroundColor = 'white';
         
        }  */
      }
    }

    // Function to handle mouse/touch up event
    function handleMouseUp() {
      isDragging5 = false;
      imagepp5.style.cursor = 'pointer';
      // Remove the event listeners when dragging is complete
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      imagepp5.removeEventListener('touchmove', handleMouseMove);
      imagepp5.removeEventListener('touchend', handleMouseUp);

    }

    // Add event listeners for mouse/touch move and up events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    imagepp5.addEventListener('touchmove', handleMouseMove);
    imagepp5.addEventListener('touchend', handleMouseUp);
  }

  // Function to change the color when clicked/touched
  function changeColor() {
    imagepp5.style.filter = 'hue-rotate(20deg)'; // Change color (90 degrees in hue rotation)
  }

  // Add event listeners for mouse/touch down and click/touch events
  imagepp5.addEventListener('mousedown', handleMouseDown);
  imagepp5.addEventListener('touchstart', handleMouseDown);
  imagepp5.addEventListener('click', changeColor);
  imagepp5.addEventListener('touchend', changeColor);


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

  document.getElementById("icetray").setAttribute("onclick","putupicetray()");
document.getElementById("topcover").setAttribute("onclick","putdowntop()");

document.getElementById('tubeicea').style.display="none";
document.getElementById('tubeiceb').style.display="none";
document.getElementById('tubeicec').style.display="none";
document.getElementById('tubeiced').style.display="none";
document.getElementById('tubeicee').style.display="none";
document.getElementById('icebucket').style.display="none";
document.getElementById("sampleload").disabled=true;
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

var volt = 10;
function txtvoltp(){
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
  
    volt = volt + 10;
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
  alert("Voltage is empty");

}
else if((volt<100) || (volt>120)){
  alert("Voltage should be between 100 V and 120 V");
}
else{
    samplerun();

    document.getElementById("viewsample").disabled=false;

  }
  }

  function view_sample_UVlight(){
    document.getElementById("myCanvass11").style.display="none";
    document.getElementById("myCanvass21").style.display="none";
    document.getElementById("myCanvass31").style.display="none";
    document.getElementById("myCanvass41").style.display="none";
    document.getElementById("myCanvass51").style.display="none";

    document.getElementById("action").innerHTML="Visualizing the protein-DNA complex under the fluorescence sensitive imaging system.";
    window.scrollBy(0,500);
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
     cancelani = requestAnimationFrame(loop);
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
     cancelani = requestAnimationFrame(loop2);
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
   cancelani = requestAnimationFrame(loop3);
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
 cancelani = requestAnimationFrame(loop4);
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
 cancelani = requestAnimationFrame(loop5);
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