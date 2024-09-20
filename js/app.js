let currentImageIndex = 0;
const images = [];

// Функция для открытия модального окна
function openModal(imageElement) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageElement.src;

    // Сохраняем индекс текущего изображения
    currentImageIndex = Array.from(imageElement.parentNode.parentNode.children).indexOf(imageElement.parentNode);
    // Сохраняем все изображения в массив
    images.length = 0; // Очистка массива
    document.querySelectorAll('.gallery-item img').forEach(img => images.push(img.src));
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

// Обработчик нажатия на клавишу 'Esc' для закрытия модального окна
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});







const services = [
    {
        title: "Аренда страйкбольного комплекта",
        description: "Стандартный комплект (2000 Р): в комплект входит: Маскхалат, перчатки, маска полнолицевая, привод, шары. <br>Максимальный пакет (от 2000 Р): Станьте суперсолдатом! Максимум защиты! Максимум огневой мощи!"
    },
    {
        title: "Аренда привода",
        description: "АКСУ, G36c, P90 на выбор, в комплекте бункерный магазин - 1000 рублей. <br>Дополнительно безлимит шаров - +500 рублей"
    },
    {
        title: "Аренда бронижелета на выбор",
        description: "Аренда защитного жилета на выбор (оливковый / черный раскрас)."
    },
    {
        title: "Доп.магазин (G36/AK)",
        description: "Доп. магазин (G36, AK) - бункер/механический."
    },
    {
        title: "Защита коленей-локтей",
        description: "Аренда защитного комплекта - наколенники и налокотники."
    },
    {
        title: "Перчатки",
        description: "Аренда защитных перчаток. В наличии размеры (M/L/XL)."
    },
    {
        title: "Аренда шлема",
        description: "Аренда шлема (олива / черный)."
    },
    {
        title: "Аренда активных наушников",
        description: "Аренда активных наушников - помогают лучше слышать противника и реагировать на опасность"
    },
    {
        title: "Аренда очков",
        description: "Аренда очков (линза прозрачная/жёлтая)."
    },
    {
        title: "Аренда полулицевой маски",
        description: "Аренда полулицевой маски для защиты нижней части лица."
    },
    {
        title: "Аренда фонаря",
        description: "Аренда фонаря - для игры в темное время суток."
    },
    {
        title: "Аренда ножей",
        description: "Аренда Нож/мачете/томагавк тренировочный на выбор"
    },
];

document.querySelectorAll('.order-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');

        // Устанавливаем заголовок
        modalTitle.textContent = services[index].title;
        modalTitle.classList.add('modal-header'); // Добавляем класс заголовку

        // Устанавливаем описание и добавляем класс
        modalDescription.innerHTML = services[index].description;
        modalDescription.classList.add('modal-description'); // Добавляем класс описанию
        
        modal.style.display = 'block';
    });
});

// Закрытие модального окна
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Закрытие при клике вне модального окна
window.onclick = (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
