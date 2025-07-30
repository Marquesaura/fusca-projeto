document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        prevBtn.style.backgroundColor = 'yellow';
        setTimeout(() => {
            prevBtn.style.backgroundColor = '#fff9a5';
        }, 300);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        nextBtn.style.backgroundColor = 'yellow';
        setTimeout(() => {
            nextBtn.style.backgroundColor = '#fff9a5';
        }, 300);
    });

    showImage(currentIndex);
});

//contador
function atualizarContador() {
    const dataLancamento = new Date("2025-08-08T00:00:00");
    const agora = new Date();
    const diferenca = dataLancamento - agora;

    if (diferenca <= 0) {
        document.getElementById("contador").innerText = "LANÇADO!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerText =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();


//animacao
function typeWriter(elemento) {
    const tituloArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    tituloArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.querySelector("#titulo");

    typeWriter(titulo);
});
