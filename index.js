function scrollToSection(id) {
    document.getElementById(id).scrollIntoView();
}

function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function submitForm(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
}