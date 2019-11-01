if (document.querySelector('.body-index')) {
  var write_us_link = document.querySelector('.feedback-btn');
  var write_us_choice = document.querySelector('.modal-write-us');

  var close_btn_form = write_us_choice.querySelector('.modal-close');

  var sel_form_write_us = write_us_choice.querySelector('.form-write-us');
  var login_input_form = write_us_choice.querySelector('[name=modal-user-login]');
  var password_input_form = write_us_choice.querySelector('[name=modal-user-email]');
  var text_input_form = write_us_choice.querySelector('[name=modal-user-text]');

  var isStorageSupport = true;
  var storage = "";

  try {
  storage = localStorage.getItem("login_input_form");
}
catch (err) {
  isStorageSupport = false;
}

write_us_link.addEventListener('click', function(evt) {
  evt.preventDefault();
  write_us_choice.classList.add('modal-show');

  if (storage) {
    login.value = storage;
    password_input_form.focus();
  }
  else {
    login_input_form.focus();
  }
});

close_btn_form.addEventListener('click', function(evt) {
  evt.preventDefault();
  write_us_choice.classList.remove('modal-show');
  write_us_choice.classList.remove('modal-error');
});

sel_form_write_us.addEventListener('submit', function(evt) { //отказ отправлять форму
  if (!login_input_form.value || !password_input_form.value || !text_input_form.value) {
    evt.preventDefault();
    write_us_choice.classList.remove('modal-error');
    write_us_choice.offsetWidth = write_us_choice.offsetWidth;
    write_us_choice.classList.add('modal-error');
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("login_input_form", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (write_us_choice.classList.contains("modal-show")) {
      write_us_choice.classList.remove("modal-show");
      write_us_choice.classList.remove("modal-error");
    }
  }
});

var map_choice = document.querySelector('.modal-map')
var map_close = map_choice.querySelector('.modal-close');

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map_choice.classList.contains("modal-show")) {
      evt.preventDefault();
      map_choice.classList.remove("modal-show");
    }
  }
});
}
