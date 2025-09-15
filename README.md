# 👩‍💻 Portfólio Técnico - Ana Carolina

> Desenvolvedora Full Stack em formação | Apaixonada por tecnologia acessível | 4º semestre de Análise e Desenvolvimento de Sistemas

---

## 🧠 Sobre Mim

Olá! Sou **Ana Carolina**, tenho 20 anos e estou em constante evolução no mundo da programação. Meu foco é aprender e aplicar tecnologias que possam impactar positivamente pessoas e negócios.

Aqui você encontrará os principais projetos que desenvolvi até agora, com explicações técnicas, exemplos de código e instruções de uso — tudo com muita dedicação e vontade de crescer.

---

## 📌 Índice de Projetos

1. [🚗 Carrinho com Arduino](#1-carrinho-com-arduino)
2. [📋 Sistema de Tarefas em Java](#2-sistema-de-tarefas-em-java)
3. [🌐 Site Pessoal com HTML/CSS/JS](#3-site-pessoal-com-htmlcssjs)
4. [📊 Dashboard com SQL + Power BI](#4-dashboard-com-sql--power-bi)

---

## 1. 🚗 Carrinho com Arduino

### 🔧 Descrição
Protótipo de carrinho automatizado com sensor de umidade ou distância. Desenvolvido no Tinkercad e também em hardware real com Arduino Uno.

### 🛠️ Tecnologias
- Arduino Uno
- C/C++ (linguagem)
- Tinkercad (simulação)
- Protoboard, sensores, motores

### 💡 Código de exemplo

```cpp
int motor = 3;
int sensorUmidade = A0;

void loop() {
  int umidade = analogRead(sensorUmidade);
  if (umidade < 500) {
    digitalWrite(motor, HIGH);
  } else {
    digitalWrite(motor, LOW);
  }
}

- GitHub: [https://github.com/CahMuniz]  
- LinkedIn: [https://br.linkedin.com/in/ana-carolina-muniz-soares-939669279/pt]  
- E-mail: [anamunizcarolina@gmail.com]

---

*Obrigada por visitar meu portfólio!*
