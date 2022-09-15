const form = document.querySelector('#evaluation-form');
const btnLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const labelCounter = document.querySelector('#counter');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const frontend = document.querySelector('#frontend');
const backend = document.querySelector('#backend');
const fullstack = document.querySelector('#fullstack');
const subject = document.querySelectorAll('.subject');
const rateInput = document.querySelectorAll('.input-rate');
const nameP = document.querySelector('#nameP');
const emailP = document.querySelector('#emailP');
const casaP = document.querySelector('#casaP');
const familiaP = document.querySelector('#familiaP');
const materiasP = document.querySelector('#materiasP');
const avaliacaoP = document.querySelector('#avaliacaoP');
const observacoesP = document.querySelector('#observacoesP');
const formData = document.querySelector('#form-data');

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

function familia() {
  if (frontend.checked) {
    familiaP.innerText = `Família: ${frontend.value}`;
  } else if (backend.checked) {
    familiaP.innerText = `Família: ${backend.value}`;
  } else {
    familiaP.innerText = `Família: ${fullstack.value}`;
  }
}

function materias() {
  const mat = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      mat.push(subject[index].value);
    }
  }
  materiasP.innerText = `Matérias: ${mat.join(', ')}`;
}

function rate() {
  for (let index = 0; index < rateInput.length; index += 1) {
    if (rateInput[index].checked) {
      avaliacaoP.innerText = `Avaliação: ${rateInput[index].value}`;
    }
  }
}

btnSubmit.addEventListener('click', (event) => {
  nameP.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  emailP.innerText = `Email: ${inputEmail.value}`;
  casaP.innerText = `Casa: ${house.value}`;
  familia();
  materias();
  rate();
  observacoesP.innerText = `Observações: ${textArea.value}`;
  formData.style.display = 'block';
  form.style.display = 'none';
  event.preventDefault();
});
