// import (noUiSlider) from '../vendor/nouislider/nouislider.js';
// import {noUiSlider} from '../vendor/nouislider/nouislider.js'
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectsRadio = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview img');


function applyEffect(effect, intensity) {
    switch (effect) {
        case 'none':
            imgPreview.style.filter = 'none';
            break;

        case 'chrome':
            imgPreview.style.filter = `grayscale(${intensity}%)`;
            break;

        case 'sepia':
            imgPreview.style.filter = `sepia(${intensity}%)`;
            break;

        case 'marvin':
            imgPreview.style.filter = `invert(${intensity}%)`;
            break;

        case 'phobos':
            imgPreview.style.filter = `blur(${intensity / 10}px)`;
            break;

        case 'heat':
            imgPreview.style.filter = `brightness(${1 + intensity / 100})`;
            break;

        default:

            imgPreview.style.filter = 'none';
    }
}


noUiSlider.create(effectLevelSlider, {
    start: 100,
    range: {
        min: 0,
        max: 100,
    },
    step: 1,
    connect: 'lower',
});


effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    const intensity = values[handle];
    effectLevelValue.value = intensity;
    applyEffect(selectedEffect, intensity);
});

let selectedEffect = 'none';


effectsRadio.forEach((radio) => {
    radio.addEventListener('change', () => {
        selectedEffect = radio.value;
        applyEffect(selectedEffect, parseInt(effectLevelValue.value));
    });
});

// export default applyEffect();
