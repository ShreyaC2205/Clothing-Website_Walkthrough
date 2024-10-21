document.addEventListener('DOMContentLoaded', function () {
  const expandButtons = document.querySelectorAll('.expand-btn');
  const closeButtons = document.querySelectorAll('.close-btn');
  const slideLeftBtn = document.querySelector('.slideLeft'); 
  const QandADivs = document.querySelector('.QandADivs');
  const QandAItems = document.querySelectorAll('.QandA1'); // Get all QandA1 divs
  let currentIndex = 0;

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


  slideLeftBtn.addEventListener("click", function() {
    console.log("Button clicked");
    currentIndex = (currentIndex + 1) % QandAItems.length;
    console.log("Current Index:", currentIndex);
    
    // Calculate the left position for the current QandA1 div
    const translateXValue = -currentIndex * 100; // Move to the left

    // Apply the transform style to slide left only the current QandA1 div
    QandAItems.forEach((item, index) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease'; // Optional: Add a transition effect
    });
  });
});



