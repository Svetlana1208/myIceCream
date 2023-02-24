(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      productOpenModalBtn: document.querySelector("[data-productModal-open]"),
      productCloseModalBtn: document.querySelector("[data-productModal-close]"),
      productModal: document.querySelector("[data-productModal]"),
      readMoreOpenModalBtn: document.querySelector("[data-readMoreModal-open]"),
      readMoreCloseModalBtn: document.querySelector("[data-readMoreModal-close]"),
      readMoreModal: document.querySelector("[data-readMoreModal]"),
      locationOpenModalBtn: document.querySelector("[data-locationModal-open]"),
      locationCloseModalBtn: document.querySelector("[data-locationModal-close]"),
      locationModal: document.querySelector("[data-locationModal]"),
      franchiseOpenModalBtn: document.querySelector("[data-franchiseModal-open]"),
      franchiseCloseModalBtn: document.querySelector("[data-franchiseModal-close]"),
      franchiseModal: document.querySelector("[data-franchiseModal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.productOpenModalBtn.addEventListener("click", productToggleModal);
    refs.productCloseModalBtn.addEventListener("click", productToggleModal);
    refs.readMoreOpenModalBtn.addEventListener("click", readMoreToggleModal);
    refs.readMoreCloseModalBtn.addEventListener("click", readMoreToggleModal);
    refs.locationOpenModalBtn.addEventListener("click", locationToggleModal);
    refs.locationCloseModalBtn.addEventListener("click", locationToggleModal);
    refs.franchiseOpenModalBtn.addEventListener("click", franchiseToggleModal);
    refs.franchiseCloseModalBtn.addEventListener("click", franchiseToggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

    function productToggleModal() {
      refs.productModal.classList.toggle("is-hidden");
      document.body.classList.toggle("body-modal-open");
    }

    function readMoreToggleModal() {
      refs.readMoreModal.classList.toggle("is-hidden");
      document.body.classList.toggle("body-modal-open");
    }

    function locationToggleModal() {
      refs.locationModal.classList.toggle("is-hidden");
      document.body.classList.toggle("body-modal-open");
    }
    
    function franchiseToggleModal() {
      refs.franchiseModal.classList.toggle("is-hidden");
      document.body.classList.toggle("body-modal-open");
    }
  })();