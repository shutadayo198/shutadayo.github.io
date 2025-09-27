const scrollArea = document.getElementById("scrollArea");
let scrollPosition = 0;

function autoScroll() {
  scrollPosition += 1;
  scrollArea.scrollTop = scrollPosition;

  if (scrollPosition >= scrollArea.scrollHeight - scrollArea.clientHeight) {
    scrollPosition = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();
