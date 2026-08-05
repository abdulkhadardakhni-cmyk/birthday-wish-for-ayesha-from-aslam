function nextPage(page) {
    window.location.href = page;
}

// Fade-in animation
window.onload = function () {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
};