function openModal() {
  if (sessionStorage["logged_in"] == true) {
    return;
  }
  var modal = document.getElementById("modal");
  modal.style.display = "flex";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

globalThis.openModal = openModal;
globalThis.closeModal = closeModal;

export { closeModal };