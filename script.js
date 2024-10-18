document.addEventListener('DOMContentLoaded', function () {
  const expandButtons = document.querySelectorAll('.expand-btn');
  const closeButtons = document.querySelectorAll('.close-btn');

  expandButtons.forEach(button => {
    button.addEventListener('click', function () {
      const target = button.getAttribute('data-target');
      const expandDiv = document.getElementById(target);
      const gif = expandDiv.querySelector('.expandGIF img');
      
      const gifSrc = gif.getAttribute('src');
      gif.setAttribute('src', gifSrc); 
      expandDiv.classList.add('show');
    });
  });


  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const expandDiv = button.closest('.expand');
      expandDiv.classList.remove('show');
    });
  });
});

