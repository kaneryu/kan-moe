const span = document.querySelector('span');
const text = "kaneryu"
var percent = 100
function getMousePositionVw(event) {
  const vw = window.innerWidth;
  const x = event.clientX / vw * 100;
  const y = event.clientY / vw * 100;
  return { x, y };
}


window.addEventListener('mousemove', function(e) {
  const scrollTop = Math.abs(getMousePositionVw(e).x - 50);
  var percent = scrollTop/50
  var text = ""
  if(percent < 0.5){
    text = "kan"
  } else if (percent < 0.6) {
    text = "kane"
  } else if (percent < 0.7) {
    text = "kaner"
  } else if (percent < 0.8) {
    text = "kanery"
  } else if (percent < 0.85) {
    text = "kaneryu"
  } else {
    text = "kaneryu"
  }
  
  span.textContent = text;
});
