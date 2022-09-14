const btnLogin = document.querySelector('#btn-login');

function validationLogin() {
  const emailLogin = document.querySelector('#email-login');
  const senhaLogin = document.querySelector('#senha-login');
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
}

btnLogin.addEventListener('click', validationLogin);
