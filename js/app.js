const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minutosElemento = document.getElementById("minutos");
const segundosElemento = document.getElementById("segundos");

if (diasElemento && horasElemento && minutosElemento && segundosElemento) {
  const fechaCampus = new Date(2026, 6, 13, 0, 0, 0).getTime();

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaCampus - ahora;

    if (diferencia <= 0) {
      diasElemento.textContent = "00";
      horasElemento.textContent = "00";
      minutosElemento.textContent = "00";
      segundosElemento.textContent = "00";
      clearInterval(intervaloCuentaRegresiva);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    diasElemento.textContent = String(dias).padStart(2, "0");
    horasElemento.textContent = String(horas).padStart(2, "0");
    minutosElemento.textContent = String(minutos).padStart(2, "0");
    segundosElemento.textContent = String(segundos).padStart(2, "0");
  }

  actualizarCuentaRegresiva();
  const intervaloCuentaRegresiva = setInterval(actualizarCuentaRegresiva, 1000);
}
const menuToggle = document.getElementById("menu-toggle");
const inicioNav = document.getElementById("inicio-nav");

if (menuToggle && inicioNav) {
  menuToggle.addEventListener("click", () => {
    inicioNav.classList.toggle("menu-abierto");
  });
}