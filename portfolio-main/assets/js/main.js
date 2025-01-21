document.addEventListener("DOMContentLoaded", () => {
  // Mapeamento de textos para cada card
  const descriptions = {
    html: "HTML é a linguagem de marcação padrão para criar páginas web.",
    css: "CSS é usado para estilizar elementos em páginas web.",
    js: "JavaScript é uma linguagem de programação para adicionar interatividade.",
    mysql: "MySQL é um sistema de gerenciamento de banco de dados relacional.",
    react: "React é uma biblioteca JavaScript para construir interfaces de usuário.",
    next: "Next.js é um framework React para renderização do lado do servidor.",
    angular: "Angular é um framework JavaScript para criar aplicações web robustas.",
    mongodb: "MongoDB é um banco de dados NoSQL orientado a documentos.",
    php: "PHP é uma linguagem de script para desenvolvimento web dinâmico.",
    python: "Python é uma linguagem versátil para desenvolvimento e análise de dados.",
    java: "Java é uma linguagem de programação amplamente usada para aplicativos robustos.",
    postgresql: "PostgreSQL é um sistema de gerenciamento de banco de dados relacional avançado.",
  };

  const descriptionElement = document.querySelector(".delayMediumReveal.changeDescription");
  const cards = document.querySelectorAll("#skills-cards .card");

  // Adiciona eventos para cada card
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const className = Array.from(card.classList).find((name) => descriptions[name]);
      if (className && descriptionElement) {
        descriptionElement.textContent = descriptions[className];
      }
    });

    card.addEventListener("mouseleave", () => {
      if (descriptionElement) {
        descriptionElement.textContent = "*Passe o cursor do mouse sobre os cards para ler*";
      }
    });
  });
});

 


// Criação das partículas
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Tamanho aleatório
        const size = Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Atraso na animação
        particle.style.animationDelay = Math.random() * 15 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Inicializar partículas quando o documento carregar
document.addEventListener('DOMContentLoaded', createParticles);