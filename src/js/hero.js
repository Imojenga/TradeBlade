const heroForm = document.querySelector('.hero-form');

heroForm.addEventListener('submit', event => {
  event.preventDefault();

  const heroEmail = event.target.elements.email.value.trim();

  if (heroEmail === '') {
    alert('Введите ваш e-mail');
    return;
  }

  alert('Успешно!');

  console.log(`E-mail: ${heroEmail}`);
  heroForm.reset();
});
