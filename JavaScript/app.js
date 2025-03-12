const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginForm = document.getElementById('login-form');

// Alternar entre as telas
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Função de Registro
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = document.getElementById('registro-usuario').value;
  const email = document.getElementById('registro-email').value;
  const senha = document.getElementById('registro-senha').value;

  // Salvando dados no LocalStorage
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('email', email);
  localStorage.setItem('senha', senha);

  alert('Registrado com sucesso!');

  // Adiciona a classe para a animação de transição
  container.classList.add('sign-up-mode');

});

// Função de Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginUsuario = document.getElementById('login-usuario').value;
  const loginSenha = document.getElementById('login-senha').value;

  // Verifica os dados no LocalStorage
  const storedUsuario = localStorage.getItem('usuario');
  const storedSenha = localStorage.getItem('senha');

  const loginError = document.getElementById('login-error');

  if (loginUsuario === storedUsuario && loginSenha === storedSenha) {
    loginError.style.display = 'none'; // Esconde a mensagem de erro, caso tenha aparecido
    alert('Login bem-sucedido!');
    window.location.href = 'categorias.html'; // Redireciona para outra página
  } else {
    loginError.textContent = 'Usuário ou senha incorretos'; // Define a mensagem de erro
    loginError.style.display = 'block'; // Exibe a mensagem de erro
  }
});