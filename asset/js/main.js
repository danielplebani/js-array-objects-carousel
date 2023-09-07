/*
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo, questa volta usando gli oggetti.
*/

/* 

/* Define the slides list */
const slides = [
    {
        foto : '01.webp'
    },
    {
        foto : '02.webp'
    },
    {
        foto : '03.webp'
    },
    {
        foto : '04.webp'
    },
    {
        foto : '05.webp'
    }
]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')






/* Print all images into the dom */
// loop over the slides 
for (let i = 0; i < slides.length; i++) {
  const slidePath = slides[i];
  
  // for each slide we create the markup
  const slideMarkup = `<img class="${activeSlide === i ? 'active' : '' }" src="/asset/img/${slidePath.foto}">`

  sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
}

const slidesImages = document.querySelectorAll('.slider .images > img')

const thumbsElement = document.querySelector('.thumbnails')

for (let i = 0; i < slides.length; i++) {
  const thumbPath = slides[i];
  const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="/asset/img/${thumbPath.foto}">`
  
  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
}






// intercept click on the next icon 
nextEl.addEventListener('click', function(){

  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  // select the active thumb
  const currentThumb = document.querySelector('.thumbnails > img.active')
  // remove the active class from the active thumb
  currentThumb.classList.remove('active')

  
  // activeSlide = 4

  if (activeSlide === slidesImages.length - 1) {
    activeSlide = 0
    // activeSlide = 5
  } else {
    // increment the activeSlide of 1
    activeSlide++
  }


  // select the next slide
  const nextSlide = slidesImages[activeSlide]
  // add the active class to the next slide
  nextSlide.classList.add('active')


  /* TODO */


  // select the next thumb
  const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
  // add to the next thumb the active class
  nextThumb.classList.add('active')
})




prevEl.addEventListener('click', function () {

  // select the current slide
  const currentSlide = slidesImages[activeSlide]
  // remove the active class from the current slide
  currentSlide.classList.remove('active')

  // select the active thumb
  const currentThumb = document.querySelector('.thumbnails > img.active')
  // remove the active class from the active thumb
  currentThumb.classList.remove('active')

  if (activeSlide === 0) {
    activeSlide = slidesImages.length - 1
  } else {
      // decrement the activeSlide of 1
      activeSlide--
  }

  // select the prev slide
  const nextSlide = slidesImages[activeSlide]
  // add the active class to the prev slide
  nextSlide.classList.add('active')

  // select the prev thumb
  const prevThumb = document.querySelectorAll('.thumb')[activeSlide]
  // add to the prev thumb the active class
  prevThumb.classList.add('active')
})