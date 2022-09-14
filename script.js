const btnLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const labelCounter = document.querySelector('#counter');

function validationLogin() {
  const emailLogin = document.querySelector('#email-login');
  const senhaLogin = document.querySelector('#senha-login');
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validationLogin);

btnSubmit.disabled = true;

inputAgreement.addEventListener('change', () => {
  if (inputAgreement.checked) {
    btnSubmit.disabled = false;
  }
});

textArea.addEventListener('keyup', () => {
  const characters = textArea.value;
  labelCounter.innerText = 500 - characters.length;
});
