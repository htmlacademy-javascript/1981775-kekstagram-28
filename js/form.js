

function scalControler() {
  const scalValueElement = document.querySelector('.scale__control--value');
  let scalValue = 0.25;
  document.querySelector('.img-upload__preview > img').style.transform = `scale(${scalValue})`;
  scalValueElement.value = `${scalValue * 100}%`;
  document.querySelector('.scale__control--smaller').addEventListener('click', () => {
    if (scalValue === 0.25) {
      return;
    }
    scalValue -= 0.25;
    document.querySelector('.img-upload__preview > img').style.transform = `scale(${scalValue})`;
    scalValueElement.value = `${scalValue * 100}%`;
  });
  document.querySelector('.scale__control--bigger').addEventListener('click', () => {
    if (scalValue === 1) {
      return;
    }
    scalValue += 0.25;
    document.querySelector('.img-upload__preview > img').style.transform = `scale(${scalValue})`;
    scalValueElement.value = `${scalValue * 100}%`;
  });
}

function formClose() {
  const hashtag = document.querySelector('.text__hashtags');
  const comment = document.querySelector('.text__description');
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      document.querySelector('.img-upload__overlay').classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      hashtag.value = '';
      comment.value = '';
    }
  });
  document.querySelector('#upload-cancel').addEventListener('click', () => {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    hashtag.value = '';
    comment.value = '';
  });
}

form.reset();
function form() {
  const uploadFile = document.querySelector('#upload-file');
  uploadFile.addEventListener('change', () => {
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    const file = uploadFile.files[0];
    const newUrl = URL.createObjectURL(file);
    document.querySelector('.img-upload__preview > img').setAttribute('src', newUrl);
  });
  formClose();
  scalControler();
}
const formContainer = document.querySelector('.img-upload__form');
const pristine = new Pristine(formContainer, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});


const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';
const hashtagField = document.querySelector('.text__hashtags');

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split('')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};
pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

export { form };
