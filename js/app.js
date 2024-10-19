

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openButton = document.querySelector(".unique-order-button");
    const closeButton = document.querySelector(".close-button");

    // Функция для открытия модального окна
    openButton.addEventListener("click", function (event) {
        event.preventDefault(); // Отменяем действие по умолчанию
        modal.style.display = "block"; // Показываем модальное окно
    });

    // Функция для закрытия модального окна
    function closeModal() {
        modal.style.display = "none"; // Скрываем модальное окно
    }

    // Закрытие модального окна при клике на кнопку закрытия
    closeButton.addEventListener("click", closeModal);

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закрытие модального окна при нажатии клавиши Esc
    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});
