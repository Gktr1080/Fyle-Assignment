document.addEventListener("DOMContentLoaded", function() {
    const infoItems = document.querySelectorAll(".info-item");
    const projectImage = document.getElementById("projectImage");

    infoItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove highlighted class from all items
            infoItems.forEach(i => i.classList.remove("highlighted"));
            
            // Add highlighted class to the clicked item
            this.classList.add("highlighted");

            // Change the image
            const newImage = this.getAttribute("data-image");
            projectImage.setAttribute("src", newImage);
        });
    });
});
