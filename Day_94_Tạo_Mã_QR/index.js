const imageQR = document.querySelector("#image_qr");
const inputQR = document.querySelector(".handle_qr_code>input");
const buttonQR = document.querySelector(".handle_qr_code>button");
const LINK_QR = "https://api.qrserver.com/v1/create-qr-code/?data=";

buttonQR.addEventListener("click", () => {
  let value = inputQR.value;
  if (value.trim().length > 0) {
    imageQR.src = LINK_QR + inputQR.value;
  }
});
