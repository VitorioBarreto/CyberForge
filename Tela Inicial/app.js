const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "RTX 4090 SUPER TUF OG OC GDDR6",
    price: "PROMOÇÃO",
    colors: [
      {
        code: "black",
        img: "./imagens/pc/preto.png",
      },
      {
        code: "darkblue",
        img: "./imagens/pc/branco.png",
      },
    ],
  },
  {
    id: 2,
    title: "PC Gamer Completo",
    price: "Desconto 60%",
    colors: [
      {
        code: "black",
        img: "./imagens/notebook/10.png",
      },
      {
        code: "darkblue",
        img: "./imagens/notebook/07.png",
      },
    ],
  },
  {
    id: 3,
    title: "KIT PERIFÉRICOS",
    price: "Até 50% de desconto",
    colors: [
      {
        code: "gray",
        img: "./imagens/pc/3.png",
      },
      {
        code: "lightgray",
        img: "./imagens/pc/1.png",
      },
    ],
  },
  {
    id: 4,
    title: "PLACAS DE VÍDEO",
    price: "Ofertas Especiais",
    colors: [
      {
        code: "black",
        img: "./imagens/pc/2.png",
      },
      {
        code: "lightgray",
        img: "./imagens/pc/preto.png",
      },
    ],
  },
  {
    id: 5,
    title: "NOTEBOOKS DE QUALIDADE",
    price: "Descontos Exclusivos",
    colors: [
      {
        code: "black",
        img: "./imagens/notebook/10.png",
      },
      {
        code: "gray",
        img: "./imagens/notebook/07.png",
      },
    ],
  },
];

let currentProductIndex = 0;

// Elementos da página
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Função para atualizar o produto
function updateProduct() {
    const product = products[currentProductIndex];
    currentProductTitle.textContent = product.title;
    currentProductPrice.textContent = product.price;
    currentProductImg.src = product.colors[0].img;

    // Atualizar cores
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = product.colors[index].code;
        color.addEventListener("click", () => {
            currentProductImg.src = product.colors[index].img;
        });
    });
}

// Função para o próximo slide
function nextSlide() {
    currentProductIndex = (currentProductIndex + 1) % products.length;
    wrapper.style.transform = `translateX(-${currentProductIndex * 100}vw)`;
    updateProduct();
}

// Função para o slide anterior
function prevSlide() {
    currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
    wrapper.style.transform = `translateX(-${currentProductIndex * 100}vw)`;
    updateProduct();
}

// Eventos do menu
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentProductIndex = index;
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        updateProduct();
    });
});

// Eventos dos tamanhos
currentProductSizes.forEach((size) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((s) => s.classList.remove("selected"));
        size.classList.add("selected");
    });
});

// Eventos dos botões do slider
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Autoplay do slider
let autoplayInterval = setInterval(nextSlide, 5000);

// Controle do autoplay com mouse
wrapper.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
wrapper.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
});

// Inicializar primeiro produto
updateProduct();