document.addEventListener('DOMContentLoaded', function () {
  const expandButtons = document.querySelectorAll('.expand-btn');
  const closeButtons = document.querySelectorAll('.close-btn');
  const slideLeftBtn = document.querySelector('.slideLeft'); 
  const slideRightBtn = document.querySelector('.slideRight'); 
  const QandAItems = document.querySelectorAll('.QandA1'); 
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
    
    const translateXValue = -currentIndex * 100; 

    QandAItems.forEach((item, index) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease';
    });
  });  

  slideRightBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + QandAItems.length) % QandAItems.length;
    
    const translateXValue = -currentIndex * 100;

    QandAItems.forEach((item, index) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease'; 
    });
  });  



  function updateImagePosition() {
    const translateXValue = -currentIndex * 100;
    image1.forEach((item) => {
      item.style.transform = `translateX(${translateXValue}%)`;
      item.style.transition = 'transform 0.5s ease';
    });
  }


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



