// const fechaIn = localStorage.getItem('fechain');
// const fechaOut = localStorage.getItem('fechaout');
// const cantidadSafaris = 8;
// const cantidadAncestral = 1;
const reservaRealizada = false;
// const cantidadDeCabanasSafari = document.getElementById('cantidadDeCabanasSafari');
// const cantidadDeCabanasAncestral = document.getElementById('cantidadDeCabanasAncestral');

// DIVISON DE FECHAS
// function getDatesInRange (fechaIn, fechaOut) {
//   const dates = [];
//   const currentDate = new Date(fechaIn);
//   const endDate = new Date(fechaOut);

//   while (currentDate.valueOf() < endDate.valueOf()) {
//     const currentDateFormatted = currentDate.toISOString().slice(0, 10);
//     dates.push(currentDateFormatted);

//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return { dates };
// }

// const solicitud = getDatesInRange(fechaIn, fechaOut);

// console.log('FECHAS SOLICITADAS: ', solicitud);

// SOLICITUD DE TABLA DE FECHAS RESERVADAS SAFARI
let fechasReservadasSafari = [];

function disponibilidadSafari (solicitud, fechasReservadasSafari) {
  let ocupadasSafari = 0;

  for (const i in solicitud.dates) {
    const element = solicitud.dates[i];

    const ocurrences = fechasReservadasSafari.filter(item => item === element).length;
    ocupadasSafari += ocurrences;
  }

  return ocupadasSafari;
}

fetch('/datos')
  .then(response => response.json())
  .then(data => {
    fechasReservadasSafari = data;
    console.log('DATOS BASE DE DATOS: ', fechasReservadasSafari);

    // FUNCION PARA DETERMINAR DISPONIBILIDAD CON BASE DE DATOS

    console.log('disponibilidadSafari()', disponibilidadSafari(solicitud, fechasReservadasSafari));

    const resultadoOcupadasSafari = cantidadSafaris - disponibilidadSafari(solicitud, fechasReservadasSafari);
    console.log('RESULTADO DE OCUPADAS resultadoOcupadasSafari', resultadoOcupadasSafari);

    // RESULTADO DISPONIBILIDAD EN PANTALLA
    const disponibilidadSafariLabel = document.getElementById('disponibilidad-safari');
    disponibilidadSafariLabel.innerText = 'Cabañas disponibles: ' + resultadoOcupadasSafari;

    // BLOQUEAR BOTON

    if (resultadoOcupadasSafari === 0) {
      cantidadDeCabanasSafari.disabled = true;
      reservarSafari.innerText = 'NO HAY DISPONIBLE';
      reservarSafari.disabled = true;
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

// SOLICITUD DE TABLA DE FECHAS RESERVADAS ANCESTRAL
let fechasReservadasAncestral = [];

function disponibilidadAncestral (solicitud, fechasReservadasAncestral) {
  let ocupadasAncestral = 0;

  for (const i in solicitud) {
    const element = solicitud[i];

    const ocurrences = fechasReservadasAncestral.filter(item => item === element).length;
    ocupadasAncestral += ocurrences;
  }

  return ocupadasAncestral;
}

fetch('/datos2')
  .then(response => response.json())
  .then(data => {
    fechasReservadasAncestral = data;
    console.log('DATOS BASE DE DATOS: ', fechasReservadasAncestral);

    // FUNCION PARA DETERMINAR DISPONIBILIDAD CON BASE DE DATOS

    console.log(disponibilidadAncestral());

    const resultadoOcupadasAncestral = cantidadAncestral - disponibilidadAncestral(solicitud, fechasReservadasAncestral);
    console.log('RESULTADO DE OCUPADAS resultadoOcupadasAncestral', resultadoOcupadasAncestral);

    // RESULTADO DISPONIBILIDAD EN PANTALLA
    const disponibilidadAncestralLabel = document.getElementById('disponibilidad-ancestral');
    disponibilidadAncestralLabel.innerText = 'Cabañas disponibles: ' + resultadoOcupadasAncestral;

    // BLOQUEAR BOTON
    if (resultadoOcupadasAncestral === 0) {
      cantidadDeCabanasAncestral.disabled = true;
      reservarAncestral.innerText = 'NO HAY DISPONIBLE';
      reservarAncestral.disabled = true;
    }
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

// ENVIAR DATOS A LA PAGINA DE RESERVA

// SAFARI

const reservarSafari = document.getElementById('reservar-safari');
const cantidadCabanasSafari = document.getElementById('cantidadDeCabanasSafari');

reservarSafari.addEventListener('click', function () {
  event.preventDefault();
  const numCantidadCabanas = cantidadCabanasSafari.value;
  localStorage.setItem('tipoDeCabaña', 'Safari');
  localStorage.setItem('cantidadDeCabañas', numCantidadCabanas.toString());
  localStorage.setItem('ReservaRealizada', reservaRealizada);
  window.location.href = 'reservar.html';
});

// ANCESTRAL

const reservarAncestral = document.getElementById('reservar-ancestral');
const cantidadCabanasAncestral = document.getElementById('cantidadDeCabanasAncestral');

reservarAncestral.addEventListener('click', function () {
  event.preventDefault();
  const numCantidadCabanas = cantidadCabanasAncestral.value;
  localStorage.setItem('tipoDeCabaña', 'Ancestral');
  localStorage.setItem('cantidadDeCabañas', numCantidadCabanas.toString());
  localStorage.setItem('ReservaRealizada', reservaRealizada);
  window.location.href = 'reservar.html';
});

// LIMITAR NUMERO DE CABAÑAS SAFARI SELECCIONABLES SEGÚN DISPONIBILIDAD

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');
const option6 = document.getElementById('option6');
const option7 = document.getElementById('option7');
const option8 = document.getElementById('option8');

const options = [option1, option2, option3, option4, option5, option6, option7, option8];

const btnListaCabanas = document.getElementById('cantidadDeCabanasSafari');
btnListaCabanas.addEventListener('focus', function () {
  const resultadoOcupadasSafari = cantidadSafaris - disponibilidadSafari(solicitud, fechasReservadasSafari);
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const index = i + 1;

    if (index > resultadoOcupadasSafari && resultadoOcupadasSafari > 0) {
      option.style.display = 'none';
    }
  }
});
