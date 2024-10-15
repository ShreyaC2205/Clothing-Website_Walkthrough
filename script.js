document.addEventListener('DOMContentLoaded', function () {
  const expandButtons = document.querySelectorAll('.expand-btn');
  const closeButtons = document.querySelectorAll('.close-btn');

  
  // Event listener to open corresponding expand div
  expandButtons.forEach(button => {
    button.addEventListener('click', function () {
      const target = button.getAttribute('data-target');
      const expandDiv = document.getElementById(target);
      const gif = expandDiv.querySelector('.expandGIF img');
      
      // Reset GIF by re-assigning its src attribute
      const gifSrc = gif.getAttribute('src');
      gif.setAttribute('src', gifSrc); // Reassigning the same src

      expandDiv.classList.add('show');
    });
  });

  // Event listener to close expand div
  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const expandDiv = button.closest('.expand');
      expandDiv.classList.remove('show');
    });
  });
});

