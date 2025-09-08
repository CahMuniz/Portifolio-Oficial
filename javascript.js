function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;
  const mensagemEnviada = document.getElementById('mensagemEnviada');

  if (nome && email && mensagem) {
    mensagemEnviada.textContent = "Mensagem enviada com sucesso! 🚀";
    // Aqui você pode integrar com um backend ou serviço de e-mail como Formspree, EmailJS, etc.
  } else {
    mensagemEnviada.textContent = "Por favor, preencha todos os campos.";
  }

  // Limpa os campos
  document.getElementById('nome').value = "";
  document.getElementById('email').value = "";
  document.getElementById('mensagem').value = "";

  // Apaga mensagem após 5 segundos
  setTimeout(() => {
    mensagemEnviada.textContent = "";
  }, 5000);
}