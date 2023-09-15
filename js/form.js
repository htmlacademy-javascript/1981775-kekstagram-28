const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хештэги';

let uploadedImage = document.querySelector('.img-upload__preview img');
let imgUpload = document.querySelector('.img-upload__overlay');
let uploadFile = document.getElementById('upload-file');
let uploadCancel = document.getElementById('upload-cancel');
const body = document.querySelector('body');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form')

const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error'
});

function openForm() {
    uploadFile.addEventListener("change", function () {
        imgUpload.classList.remove('hidden');
        body.classList.add('modal-open');

        const file = uploadFile.files[0];
        const imageURL = URL.createObjectURL(file);
        uploadedImage.src = imageURL;

        // Добавляем обработчик события нажатия Esc
        document.addEventListener('keydown', escapeKeyListener);
    });
}

function closeForm() {
    imgUpload.classList.add('hidden');
    body.classList.remove('modal-open');
    form.reset();
    pristine.reset();

    document.removeEventListener('keydown', escapeKeyListener);
};

const isTextFieldFocused = () => {
    document.activeElement === hashtagField ||
        document.activeElement === commentField;
}

function escapeKeyListener(event) {
    if (event.key === 'Escape' && !isTextFieldFocused()) {
        closeForm();
    }
}

openForm();

uploadCancel.addEventListener("click", function () {
    closeForm();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeForm();
    }
});

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
const hasUniqueTags = (tags) => {
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
    return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
    const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
    return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
    hashtagField,
    validateTags,
    TAG_ERROR_TEXT
);

const onFormSubmit = (evt) => {
    evt.preventDefault();
    pristine.validate();
};

form.addEventListener('submit',onFormSubmit);

export default openForm;
