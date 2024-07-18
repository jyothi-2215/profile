function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function toggleCertifications() {
    const certList = document.getElementById('certification-list');
    
    if (certList.classList.contains('hidden')) {
        certList.classList.remove('hidden');
    } else {
        certList.classList.add('hidden');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    let currentIndex = 0;

    function showImage(index) {
        galleryItems.forEach((item, idx) => {
            item.classList.toggle("active", idx === index);
        });
    }

    prevArrow.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    nextArrow.addEventListener("click", () => {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    });

    // Initial display
    showImage(currentIndex);
});
  
