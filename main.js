document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    content.classList.remove('hidden');
    setTimeout(() => {
        content.style.opacity = 1;
        content.style.filter = "blur(0px)";
    }, 100);
  });