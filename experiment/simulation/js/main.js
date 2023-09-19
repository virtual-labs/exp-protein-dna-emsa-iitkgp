//Your JavaScript goes in here


var samplemix = document.getElementById("step3");
 function sample_mix(){
  if (samplemix.options[samplemix.selectedIndex].value == 0) {
   // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
    document.getElementById("action").innerHTML = "Choose correct component  ";

  }

  if (samplemix.options[samplemix.selectedIndex].value == 1) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
 
   }

   if (samplemix.options[samplemix.selectedIndex].value == 2) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 3) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the incorrect component  ";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 4) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 5) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the incorrect component  ";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 6) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[samplemix.selectedIndex].text +" is the correct component  ";
 
   }
   if (samplemix.options[samplemix.selectedIndex].value == 7) {
    // document.getElementById("actionhead").innerHTML = "Action: Thawing the PCR reaction components on ice";
     document.getElementById("action").innerHTML = samplemix.options[sample_ix.selectedIndex].text +" is the correct component  ";
 
   }


 }


function ice_bucket(){
  document.getElementById('tube').style.display="block";
}

function txtvolt(){
    const canvas = document.getElementById('textvoltimer');
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

/*sample 6 */

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
  ctxgs61.moveTo(0, posY6); /*  */
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
requestAnimationFrame(loop6);

    
  }


  function view_sample_UVlight(){
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