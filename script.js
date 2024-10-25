document.addEventListener('DOMContentLoaded', function () {
  const expandButtons = document.querySelectorAll('.expand-btn');
  const closeButtons = document.querySelectorAll('.close-btn');
  const slideLeftBtn = document.querySelector('.slideLeft'); 
  const slideRightBtn = document.querySelector('.slideRight'); 
  const QandADivs = document.querySelector('.QandADivs');
  const QandAItems = document.querySelectorAll('.QandA1'); // Get all QandA1 divs
  let currentIndex = 0;

  const ImgslideLeft = document.querySelector('.ImgslideLeft');
  const ImgslideRight = document.querySelector('.ImgslideRight');
  const image1 = document.querySelectorAll('.image1');

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
    currentIndex = (currentIndex + 1) % QandAItems.length;
    
    // Calculate the left position for the current QandA1 div
    const translateXValue = -currentIndex * 100; // Move to the left

    // Apply the transform style to slide left only the current QandA1 div
    QandAItems.forEach((item, index) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease'; // Optional: Add a transition effect
    });
  });  

  slideRightBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + QandAItems.length) % QandAItems.length;
    
    // Calculate the left position for the current QandA1 div
    const translateXValue = -currentIndex * 100; // Move to the left

    // Apply the transform style to slide left only the current QandA1 div
    QandAItems.forEach((item, index) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease'; // Optional: Add a transition effect
    });
  });  



  function updateImagePosition() {
    const translateXValue = -currentIndex * 100;
    image1.forEach((item) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease';
    });
  }

  // Initialize the image position on page load
  updateImagePosition();

  ImgslideLeft.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % image1.length;
    updateImagePosition();
  });

  ImgslideRight.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + image1.length) % image1.length;
    updateImagePosition();
  });
});



