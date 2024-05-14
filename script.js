//Tillgängligt modalfönster:
//Skapa ett modalfönster (popup-fönster) som hanterar fokus och tillgänglighet
//på ett korrekt sätt med hjälp av ARIA-attribut.
//Fönstret ska kunna öppnas med en knapp på sidan.

//Funktionerna för att kunna öppna och stänga ett Modalfönster

function openModal() {
  var modal = document.getElementById("accessibleModal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("closeModalBtn").focus();
}

function closeModal() {
  var modal = document.getElementById("accessibleModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("openModalBtn").focus();
}

// Tillängligt modalfönster med <dialog>
function openDialog() {
  var dialog = document.getElementById("accessibleDialog");
  dialog.showModal();
  dialog.setAttribute("aria-hidden", "false");
  document.getElementById("closeDialogBtn").focus();
}

function closeDialog() {
  var dialog = document.getElementById("accessibleDialog");
  dialog.close();
  dialog.setAttribute("aria-hidden", "true");
  document.getElementById("openDialogBtn").focus();
}

//Closing the modal display and dialog with the ESC key

document.addEventListener("keydown", function (event) {
  var modal = document.getElementById("accessibleModal");
  var dialog = document.getElementById("accessibleDialog");

  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }

  if (event.key === "Escape" && dialog.hasAttribute("open")) {
    closeDialog();
  }
});

// Tillgänglig hamburgarmeny

const menuBtn = document.getElementById("menuBtn");
const menuContent = document.getElementById("menuContent");

menuBtn.addEventListener("click", function () {
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
});
