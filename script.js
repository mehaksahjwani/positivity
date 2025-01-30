// Large pool of positive messages
const messages = [
    "You are amazing!",
    "Keep going, you're doing great!",
    "Believe in yourself!",
    "You make the world brighter!",
    "Stay positive and keep shining!",
    "You're stronger than you think!",
    "Great things take time, you're doing awesome!",
    "You have the power to achieve anything!",
    "Believe in your dreams!",
    "Your potential is limitless!",
    "You are unique and wonderful!",
    "The best is yet to come!",
    "You got this!",
    "Keep pushing forward!",
    "You're unstoppable!",
    "Shine on, you're incredible!"
  ];
  
  // Shape types and colors
  const shapeTypes = ['circle', 'square', 'triangle', 'star'];
  const shapeColors = ['#ffadad', '#ffecb3', '#80deea', '#f48fb1', '#a5d6a7', '#ffcc80'];
  
  // Create a random funky shape
  function createFunkyShape() {
    const shape = document.createElement('div');
    const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.classList.add('funky-shape', shapeType);
    shape.style.backgroundColor = shapeColors[Math.floor(Math.random() * shapeColors.length)];
  
    document.body.appendChild(shape);
  
    // Random position
    shape.style.left = Math.random() * window.innerWidth + 'px';
    shape.style.top = Math.random() * window.innerHeight + 'px';
  
    // Animate the shape to move smoothly
    moveShape(shape);
  
    // Add event listener for click
    shape.addEventListener('click', () => showMessage(shape));
  }
  
  // Function to move the funky shape randomly and smoothly
  function moveShape(shape) {
    let directionX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 2 + 1);
    let directionY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 2 + 1);
  
    setInterval(() => {
      const currentLeft = parseFloat(shape.style.left);
      const currentTop = parseFloat(shape.style.top);
  
      shape.style.left = (currentLeft + directionX) + 'px';
      shape.style.top = (currentTop + directionY) + 'px';
  
      // Check for boundary collisions and reverse direction if needed
      if (currentLeft + directionX <= 0 || currentLeft + directionX >= window.innerWidth - 80) {
        directionX *= -1;
      }
      if (currentTop + directionY <= 0 || currentTop + directionY >= window.innerHeight - 80) {
        directionY *= -1;
      }
    }, 50); // Update every 50ms
  }
  
  // Show a positive message when shape is clicked
  function showMessage(shape) {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.textContent = message;
    popupMessage.style.display = 'block';
  
    // Position the message at the center of the shape
    const shapeRect = shape.getBoundingClientRect();
    popupMessage.style.left = shapeRect.left + shapeRect.width / 2 - popupMessage.offsetWidth / 2 + 'px';
    popupMessage.style.top = shapeRect.top - popupMessage.offsetHeight - 10 + 'px';
  }
  
  // Create a large number of funky shapes
  for (let i = 0; i < 50; i++) {  // Increase number of shapes to 50
    createFunkyShape();
  }
  