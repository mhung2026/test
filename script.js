function blowCandles() {
    var flameElements = document.querySelectorAll('.flame');
    var audio = document.getElementById("HPBDAudio");
    audio.play();
    audio.volume = 0.1;
    flameElements.forEach(function (flameElement) {
        flameElement.style.opacity = '0';
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var showImageButton = document.getElementById('showImageButton');
    var imageContainer = document.getElementById('imageContainer');
    setTimeout(function () {
        showImageButton.addEventListener('click', function () {
            imageContainer.style.display = 'block';
            var imgElement = document.createElement('img');
            imgElement.src = 'https://github.com/mhung2026/test/blob/main/gift.png?raw=true';
            imgElement.alt = 'Image';
            imgElement.style.width = '60%';
            imgElement.style.height = '60%';
            imageContainer.innerHTML = '';
            imageContainer.appendChild(imgElement);
        });
    }, 0);
});
document.addEventListener('DOMContentLoaded', function () {
    var openWebsiteBtn = document.getElementById('openWebsiteBtn');
    openWebsiteBtn.addEventListener('click', function () {
        window.open('https://www.instagram.com/hung.2026', '_blank');
    });
});
