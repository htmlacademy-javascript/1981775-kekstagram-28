function generatorComment(comment) {
  const socialContainer = document.createElement('li');
  socialContainer.classList.add('social__comment');

  const socialImg = document.createElement('img');
  socialImg.classList.add('social__picture');
  socialImg.setAttribute('alt', comment.name);
  socialImg.setAttribute('src', comment.avatar);
  socialImg.setAttribute('width', '35');
  socialImg.setAttribute('height', '35');

  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.innerText = comment.message;
  socialContainer.append(socialImg);
  socialContainer.append(socialText);

  return socialContainer;
}

function generatorComments(comments, qualityComments) {
  const containerComment = new DocumentFragment();
  comments.slice(0, qualityComments).forEach((comment) => {
    const commentElement = generatorComment(comment);
    containerComment.append(commentElement);
  });

  return containerComment;

}


export { generatorComments };

