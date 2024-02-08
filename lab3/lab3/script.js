document.addEventListener("DOMContentLoaded", function () {
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const gallery = document.getElementById("gallery");
    const widthInput = document.getElementById("widthInput");
    const heightInput = document.getElementById("heightInput");
    const borderWidthInput = document.getElementById("borderWidthInput");
    const altTextInput = document.getElementById("altTextInput");
  
    function updateSelectedImage() {
      const selectedImage = document.querySelector(".selected");
      if (selectedImage) {
        selectedImage.style.width = widthInput.value + "px";
        selectedImage.style.height = heightInput.value + "px";
        selectedImage.style.borderWidth = borderWidthInput.value + "px";
        selectedImage.alt = altTextInput.value;
      }
    }
  
    widthInput.addEventListener("input", updateSelectedImage);
    heightInput.addEventListener("input", updateSelectedImage);
    borderWidthInput.addEventListener("input", updateSelectedImage);
    altTextInput.addEventListener("input", updateSelectedImage);
  
    upButton.addEventListener("click", function () {
      const selectedImage = document.querySelector(".selected");
      if (selectedImage) {
        const previousSibling = selectedImage.previousElementSibling;
        if (previousSibling) {
          gallery.insertBefore(selectedImage, previousSibling);
        }
      }
    });
  
    downButton.addEventListener("click", function () {
      const selectedImage = document.querySelector(".selected");
      if (selectedImage) {
        const nextSibling = selectedImage.nextElementSibling;
        if (nextSibling) {
          gallery.insertBefore(nextSibling, selectedImage);
        }
      }
    });
  
    const images = document.querySelectorAll("#gallery img");
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        images.forEach(function (img) {
          img.classList.remove("selected");
        });
        image.classList.add("selected");
        widthInput.value = image.width;
        heightInput.value = image.height;
        borderWidthInput.value = parseInt(window.getComputedStyle(image).borderWidth);
        altTextInput.value = image.alt;
      });
    });
});