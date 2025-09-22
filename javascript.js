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


// Lista de tecnologias
const tecnologias = [
  "Java ☕",
  "Python 🐍",
  "JavaScript 🌐",
  "TypeScript 🔷",
  "SQL 🗄️",
  "C# ⚙️",
  "Arduino 🤖"
];

let i = 0; // índice da tecnologia
let j = 0; // índice da letra
let atual = "";
let palavra = "";
const display = document.getElementById("tecnologias-dinamicas");

function type() {
  if (i < tecnologias.length) {
    if (j <= tecnologias[i].length) {
      palavra = tecnologias[i].substring(0, j++);
      display.innerHTML = `<span class="digitando">${palavra}</span>`;
    } else {
      j = 0;
      i++;
      setTimeout(type, 1200); // tempo antes de mudar de tecnologia
      return;
    }
  } else {
    i = 0; // reinicia o loop
  }
  setTimeout(type, 150);
}

type();

// Puxa os dados do JSON e mostra no site
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("nome").textContent = data.nome;
    document.getElementById("profissao").textContent = data.profissao;
    document.getElementById("sobre").textContent = data.sobre;

    const lista = document.getElementById("lista-projetos");
    data.projetos.forEach(proj => {
      const div = document.createElement("div");
      div.className = "projeto";
      div.innerHTML = `<h3>${proj.titulo}</h3><p>${proj.descricao}</p>`;
      lista.appendChild(div);
    });

    document.getElementById("email").textContent = data.contato.email;
    document.getElementById("linkedin").href = data.contato.linkedin;
    document.getElementById("github").href = data.contato.github;
  });