// Script para navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
                
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            });
        });
});

// Script para cambiar el estilo del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

function mostrarCreditos() {
    document.getElementById("contenido-principal").style.display = "none";
    document.getElementById("creditos").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function volverInicio() {
    document.getElementById("contenido-principal").style.display = "block";
    document.getElementById("creditos").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}


const datos = {

    2020:{terrorismo:120, extorsion:950, secuestro:80},
    2021:{terrorismo:140, extorsion:1020, secuestro:95},
    2022:{terrorismo:160, extorsion:1150, secuestro:110},
    2023:{terrorismo:180, extorsion:1300, secuestro:125},
    2024:{terrorismo:200, extorsion:1450, secuestro:140},
    2025:{terrorismo:230, extorsion:1600, secuestro:155}

};

const años = Object.keys(datos);
    let index = 0;

function animarContador(id,valor){

    let elemento = document.getElementById(id);
    let inicio = 0;

    let intervalo = setInterval(()=>{

    inicio += Math.ceil(valor/20);

    if(inicio >= valor){
        inicio = valor;
        clearInterval(intervalo);
        }

    elemento.textContent = inicio;

    },50);

}

function actualizarDatos(){

    let año = años[index];
    document.getElementById("anio").textContent = año;

    animarContador("terrorismo",datos[año].terrorismo);
    animarContador("extorsion",datos[año].extorsion);
    animarContador("secuestro",datos[año].secuestro);

    index++;

    if(index >= años.length){
     index = 0;
    }

}

actualizarDatos();

setInterval(actualizarDatos,3000);
