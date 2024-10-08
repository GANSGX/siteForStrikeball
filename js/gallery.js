let currentImageIndex = 0;
const images = [];

// Функция для открытия модального окна
function openModal(imageElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageElement.src;

    // Сохраняем индекс текущего изображения
    currentImageIndex = images.indexOf(imageElement.src);
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Функция для переключения изображений
function changeImage(direction) {
    currentImageIndex += direction;

    // Ограничение по индексам
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Переход на последний элемент
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Переход на первый элемент
    }

    document.getElementById("modalImage").src = images[currentImageIndex];
}

// Инициализация массива изображений
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gallery-item img').forEach(img => images.push(img.src));
});

// Обработчик нажатия на клавишу 'Esc' для закрытия модального окна
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
