const enlargeableImages = document.querySelectorAll(".enlargeable-image");

if (enlargeableImages.length > 0) {
  const lightbox = document.createElement("dialog");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = `
    <button class="image-lightbox-close" aria-label="Close image">×</button>
    <img class="image-lightbox-image" alt="" />
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".image-lightbox-image");
  const closeButton = lightbox.querySelector(".image-lightbox-close");

  const closeLightbox = () => {
    if (lightbox.open) {
      lightbox.close();
    }
  };

  enlargeableImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || "";
      lightbox.showModal();
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}
