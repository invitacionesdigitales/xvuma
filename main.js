 

   
let diaEvento = new Date('October 02 2026,  21:30:00').getTime();
let boton = document.querySelector("#btn")


window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader') || document.getElementById('preloader-svg');
  
  // Le da mínimo 2 segundos para lucirse y luego desaparece
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => preloader.remove(), 500);
  }, 2000);
});
// diaEvento = new Date().getTime() + 1_000 * 20;

let relojE = document.getElementById('reloj');

const diaM = 86_400_000;
const horaM = 3_600_000;
const minutoM = 60_000;
const segundoM = 1_000;
const ejecutarReloj = setInterval(
    () => {

        let hoy = new Date().getTime();
        let distancia = diaEvento - hoy;

        let diaR = Math.trunc(distancia / diaM);

        let horaR = Math.trunc((distancia % diaM) / horaM);

        let minutoR = Math.trunc((distancia % horaM) / minutoM);

        let segundoR = Math.trunc((distancia % minutoM) / segundoM);

        if (distancia  < 1) {
            clearInterval(ejecutarReloj);
            diaEventoAhora();
        }

        pintarElementos(diaR, horaR, minutoR, segundoR);

    }
, 1000);

let creDia = document.getElementById('cre-dia');
let creHora = document.getElementById('cre-hora');
let creMinuto = document.getElementById('cre-minuto');
let creSegundo = document.getElementById('cre-segundo');
function pintarElementos(dia, hora, minuto, segundo) {

    segundo = (segundo < 10) ? '0' + segundo : segundo;

    minuto = (minuto < 10) ? '0' + minuto : minuto;

    hora = (hora < 10) ? '0' + hora : hora;

    creDia.innerHTML = dia;
    creHora.innerHTML = hora;
    creMinuto.innerHTML = minuto;
    creSegundo.innerHTML = segundo;
}

function diaEventoAhora () {
    alert('Dia del Evento!!!');
    // Todo el codigo cuando el evento llegue
}




   boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION<u></u></strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!4v1778935429563!6m8!1m7!1sjGE5thmhTUgxrET0_2Ru7A!2m2!1d-33.1540884760236!2d-62.86196557590743!3f294.8475504045752!4f-2.854366487984109!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        
        
    })
  });
   
   

    
    
    

   
        
    
    