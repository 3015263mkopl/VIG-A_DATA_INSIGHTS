//problematicas sociales 
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                // animación en cadena
                const delay = index * 200;

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, delay);

                observer.unobserve(entry.target); // para que no se repita
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
});

const data = [
{ year: 2020, terrorismo: 372, extorsion: 8188, secuestro: 162 },
{ year: 2021, terrorismo: 203, extorsion: 8342, secuestro: 160 },
{ year: 2022, terrorismo: 578, extorsion: 9791, secuestro: 223 },
{ year: 2023, terrorismo: 174, extorsion: 11078, secuestro: 338 },
{ year: 2024, terrorismo: 344, extorsion: 13869, secuestro: 313 },
{ year: 2025, terrorismo: 209, extorsion: 12180, secuestro: 651 }
];

let index = 0;

// FORMATO DE NÚMEROS
function formatNumber(num){
    return num.toLocaleString("es-CO");
}

let firstLoad = true;

function updateData(){

    const year = document.getElementById("year");
    const terrorismo = document.getElementById("terrorismo");
    const extorsion = document.getElementById("extorsion");
    const secuestro = document.getElementById("secuestro");

    if (!firstLoad) {
        year.style.opacity = 0;
        terrorismo.style.opacity = 0;
        extorsion.style.opacity = 0;
        secuestro.style.opacity = 0;
    }

    setTimeout(()=>{
        year.textContent = data[index].year;
        terrorismo.textContent = formatNumber(data[index].terrorismo);
        extorsion.textContent = formatNumber(data[index].extorsion);
        secuestro.textContent = formatNumber(data[index].secuestro);

        year.style.opacity = 1;
        terrorismo.style.opacity = 1;
        extorsion.style.opacity = 1;
        secuestro.style.opacity = 1;

        index = (index + 1) % data.length;
        firstLoad = false;

    }, firstLoad ? 0 : 300);
}

// INTERVALO CADA 3 SEGUNDOS
setInterval(updateData, 3000);
updateData(); // mostrar datos iniciales

// NOTICIAS DE LA PROBLEMÁTICA SOCIAL

function filtrar(categoria) {

    const botones = document.querySelectorAll('.filtros button');
    botones.forEach(b => b.classList.remove('activo'));

    event.target.classList.add('activo');

    const tarjetas = document.querySelectorAll('.card-noticia');

    tarjetas.forEach(tarjeta => {
        if (categoria === 'todas' || tarjeta.classList.contains(categoria)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}


