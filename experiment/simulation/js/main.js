//Your JavaScript goes in here


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
    
  }