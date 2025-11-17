const aboutForm = document.querySelector('.about-form');

aboutForm.addEventListener('submit', event => {
  event.preventDefault();

  const aboutEmail = event.target.elements.email.value.trim();

  if (aboutEmail === '') {
    alert('Введите ваш e-mail');
    return;
  }

  alert('Успешно!');

  console.log(`E-mail: ${aboutEmail}`);
  aboutForm.reset();
});
