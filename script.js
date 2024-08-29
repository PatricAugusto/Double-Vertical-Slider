const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activerSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1)* 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activerSlideIndex++
        if(activerSlideIndex > slidesLength - 1){
            activerSlideIndex = 0
        }
    }else if(direction === 'down'){
        activerSlideIndex--
        if(activerSlideIndex < 0){
            activerSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activerSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activerSlideIndex * sliderHeight}px)`
}