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

function updateCommentsElementCounter (qualityComments, qualityShowComments) {
  const counterElement = `<div class="social__comment-count"> ${qualityShowComments} из <span class="comments-count">${qualityComments}</span> комментариев</div>`;
  document.querySelector('.social__comment-count').innerHTML = counterElement;
}

function updateCommentsElements (comments, qualityComments) {
  const commentsElements = generatorComments(comments, qualityComments);
  document.querySelector('.social__comments').replaceChildren(commentsElements);
}

function commentsElement (comments) {
  let qualityComments = 5;
  function handleExpandedComments () {

    if (qualityComments + 5 >= comments.length) {
      updateCommentsElementCounter(comments.length, comments.length);
      qualityComments = comments.length;
      document.querySelector('.comments-loader').classList.add('hidden');
    } else {
      qualityComments += 5;
      updateCommentsElementCounter(comments.length, qualityComments);
    }

    updateCommentsElements(comments, qualityComments);

  }

  if (qualityComments >= comments.length) {
    updateCommentsElementCounter(comments.length, comments.length);
    document.querySelector('.comments-loader').classList.add('hidden');
  } else {
    updateCommentsElementCounter(comments.length, qualityComments);
    document.querySelector('.comments-loader').classList.remove('hidden');
  }

  document.querySelector('.social__comments-loader').addEventListener('click', handleExpandedComments);

  updateCommentsElements(comments, qualityComments);

  document.querySelector('.social__comment-count').classList.remove('hidden');
  return handleExpandedComments;
}

export { generatorComments, commentsElement };

