const current = document.querySelector('#current');
const img = document.querySelectorAll('.imgs img');


// looping through the images and looking for an click event to show the image
img.forEach(img =>img.addEventListener('click', (e) => {current.src = e.target.src}));