const container = document.querySelector('span');
const fullText = "kaneryu ";
const textLength = fullText.length;

function getMousePositionVw(event) {
  const vw = window.innerWidth;
  const x = event.clientX / vw * 100;
  const y = event.clientY / vw * 100;
  return { x, y };
}

function interpolateText(percent) {
  // Ensure that at least "kan" is displayed when the mouse is in the center
  const minLength = 3; // Length of "kan"
  const length = Math.max(minLength, Math.min(Math.floor(percent * textLength), textLength));
  return fullText.substring(0, length);
}

function updateText(text) {
  container.innerHTML = ''; // Clear the container
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = char;
    container.appendChild(span);
    // Add the visible class with a slight delay for each letter
    setTimeout(() => {
      span.classList.add('visible');
    }, index * 50); // Adjust the delay as needed
  });
}

window.addEventListener('mousemove', function(e) {
  const scrollTop = Math.abs(getMousePositionVw(e).x - 50);
  const percent = scrollTop / 50;
  const text = interpolateText(percent);

  if (container.textContent !== text) {
    updateText(text);
  }
});