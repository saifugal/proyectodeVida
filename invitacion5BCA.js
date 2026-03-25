const evento = {
  titulo: "Seminario Proyecto de Vida 5BCA A",
  fecha: "2026-04-09",
  horaInicio: "10:30",
  horaFin: "12:00",
  ubicacion: "Colegio SCJ Guatemala",
  mapa: "https://www.google.com/maps?q=Colegio+SCJ+Guatemala&output=embed"
};

function formatearFecha() {
  const fecha = new Date(evento.fecha + "T00:00:00");
  const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  document.getElementById("fecha-evento").innerText =
    fecha.toLocaleDateString("es-ES", opciones);
}

function iniciarContador() {
  const fechaEvento = new Date(`${evento.fecha}T${evento.horaInicio}:00`);

  function actualizar() {
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      document.getElementById("contador").innerText = "El evento ya comenzó";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerText =
      dias + "d " + horas + "h " + minutos + "m " + segundos + "s";
  }

  actualizar();
  setInterval(actualizar, 1000);
}

function agregarCalendario() {
  const inicio = `${evento.fecha}T${evento.horaInicio}:00`.replace(/[-:]/g,"") + "Z";
  const fin = `${evento.fecha}T${evento.horaFin}:00`.replace(/[-:]/g,"") + "Z";

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evento.titulo)}&dates=${inicio}/${fin}&location=${encodeURIComponent(evento.ubicacion)}`;
  window.open(url, "_blank");
}

function verUbicacion() {
  document.getElementById("mapa").innerHTML =
    `<iframe src="${evento.mapa}" width="100%" height="250" style="border:0; border-radius:10px;"></iframe>`;
}

formatearFecha();
iniciarContador();