
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');


let scaleValue = 100;


function updateScale() {
    previewImage.style.transform = `scale(${scaleValue / 100})`;
    scaleValueInput.value = `${scaleValue}%`;
}


scaleSmallerButton.addEventListener('click', function () {
    if (scaleValue > 25) {
        scaleValue -= 25;
        updateScale();
    }
});


scaleBiggerButton.addEventListener('click', function () {
    if (scaleValue < 100) {
        scaleValue += 25;
        updateScale();
    }
});

updateScale();

export { updateScale };
