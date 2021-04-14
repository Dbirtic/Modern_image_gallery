const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
img[0].style.opacity = opacity;

// looping through the images and looking for an click event to show the image
//img.forEach(img =>img.addEventListener('click', (e) => {current.src = e.target.src}));

// add an event listener to the imgs
imgs.addEventListener('click', imgClick);

function imgClick(e){
    // Reset the opacity
    img.forEach(img => img.style.opacity = 1);

    // Change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}