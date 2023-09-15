
import { showAlert } from "./main.js";

const sendForm =  document.querySelector('.img-upload__submit');
const setUserFormSubmit = (onSuccess) => {
    sendForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
  
      const isValid = pristine.validate();
      if (isValid) {
        const formData = new FormData(evt.target);
  
        fetch(
          'https://28.javascript.pages.academy/kekstagram/data',
          {
            method: 'POST',
            body: formData,
          },
        )
          .then((response) => {
            if (response.ok) {
              onSuccess();
              showAlert('Форма успешно отправилась')
            } else {
              showAlert('Не удалось отправить форму. Попробуйте ещё раз');
            }
          })
          .catch(() => {
            showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          });
      }
    });
  };
  
  export {setUserFormSubmit};