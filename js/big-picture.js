const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const pictureCancelBtn = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
// const commentsLoader = bigPicture.querySelector('.comments-loader');
// const socialCommentCount = bigPicture.querySelector('.social__comment-count');

function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');
  bigPictureImg.src = photo.url;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;


  socialComments.innerHTML = '';

  // Заполняем комментарии
  photo.comments.forEach(comment  => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = `
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;
    socialComments.appendChild(commentElement);
  });


  body.classList.add('modal-open');
}


function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}


pictureCancelBtn.addEventListener('click', closeBigPicture);


document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});

export { openBigPicture };