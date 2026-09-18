 

   
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
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.265314609566!2d-62.85271132459842!3d-33.15466088242459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ceca955d0023fd%3A0x376ebd85ba548d6a!2sDoctor%20Dario%20Galassi%20124%2C%20X2657%20Laborde%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1783375951028!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>',
        
        
    })
  });
   
   
  function exito(){
    Swal.fire({
        title: '<strong>VER LA UBICACION<u></u></strong>',
        icon: 'success',
        html:
          'INGRESÁ' +
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.02361420434!2d-57.7721125!3d-37.9532346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95852f05a374a15f%3A0x61475146b9311c2e!2sParroquia%20Nuestra%20Se%C3%B1ora%20del%20Pilar!5e0!3m2!1ses!2sar!4v1758125223088!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
          'Podes ampliar el mapa',
          
          
      })
}
   
      
  // Botón 2 (nuevo)
  const boton2 = document.getElementById("boton2");
  boton2.addEventListener("click", () => {
    Swal.fire({
      title: '<strong>VER LA UBICACION</strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.0646111938745!2d-57.761958!3d-37.928920999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95852efde2df4f1f%3A0x9a2af04341877482!2sLa%20Victoriana!5e0!3m2!1ses!2sar!4v1758125963480!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    })
  });
  

    
    

   
        
    
    