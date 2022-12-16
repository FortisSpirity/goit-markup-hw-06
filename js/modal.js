(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }


  document.querySelectorAll(".menu-link").forEach((el) => {
    if (window.location.pathname.indexOf(el.getAttribute("href")) > -1) {
        el.classList.add("active-link");
    }
});

})();
