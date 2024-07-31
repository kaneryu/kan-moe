addEventListener("wheel", (event) => {});

onwheel = (event) => {
    var doc = document.body;
    var pageSize = doc.scrollHeight - doc.clientHeight;
    var start = window.scrollY;
    var end = event.deltaY < 0 ? 0 : pageSize;
    var duration = 1000; // duration of the animation in milliseconds
    var startTime = null;
    console.log("scrolling");
    
    function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1); // progress ranges from 0 to 1
        var ease = easeOutCubic(progress);
        window.scrollTo(0, start + (end - start) * ease);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
};

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}