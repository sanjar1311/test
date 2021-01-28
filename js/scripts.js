var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};


var elModalOpenBtn = $_('.js-modal-btn');
var elModal = $_('.modal');
var elModalCloseBtn = $_('.js-modal-close');


function openModal() {
  elModal.classList.add('modal--open');
}

function modalClose() {
  elModal.classList.remove('modal--open');
}

function docClick(e) {
  if(e.target.matches('.modal')) {
    modalClose();
    elModalOpenBtn.addEventListener('click', modalOpenBtnClick);
    elModalCloseBtn.removeEventListener('click', modalCloseBtnClick);
    elModal.removeEventListener('click', docClick);
  }
}

function modalOpenBtnClick() {
  openModal();
  elModalCloseBtn.addEventListener('click', modalCloseBtnClick);
  elModal.addEventListener('click', docClick);
  elModalOpenBtn.removeEventListener('click', modalOpenBtnClick);
}

function modalCloseBtnClick() {
  modalClose();
  elModalOpenBtn.addEventListener('click', modalOpenBtnClick);
  elModalCloseBtn.removeEventListener('click', modalCloseBtnClick);
  elModal.removeEventListener('click', docClick);
}

function escapePress(e) {
  if(e.key === "Escape") {
    modalClose();
    elModalOpenBtn.addEventListener('click', modalOpenBtnClick);
    elModalCloseBtn.removeEventListener('click', modalCloseBtnClick);
    elModal.removeEventListener('click', docClick);
  }
}

elModalOpenBtn.addEventListener('click', modalOpenBtnClick);

document.addEventListener('keyup', escapePress);