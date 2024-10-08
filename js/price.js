
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



    {
        title: "Аренда комплекта для гидробола",
        description: "Аренда комплекта для игры в гидробол"
    },
    {
        title: "Аренда привода для гидробола",
        description: "Аренда привода P90"
    },
    {
        title: "Аренда бронижелета на выбор для гидробола",
        description: "Аренда игрового бронижелета"
    },
    {
        title: "Доп.магазин на P90",
        description: "Аренда доп.магазина на привод P90"
    },
    {
        title: "Защита коленей и локтей",
        description: "Аренда защитного комплекта - наколенники и налокотники."
    },
    {
        title: "Перчатки (гидробол)",
        description: "Аренда перчаток для игры в гидробол. В наличии размеры (M/L/XL)."
    },
    {
        title: "Аренда шлема для гидробола",
        description: "Аренда шлема  для игры в гидробол (олива / черный)."
    },
    {
        title: "Аренда наушников",
        description: "Аренда наушников для защиты."
    },
    {
        title: "Аренда защитных очков",
        description: "Аренда очков (линза прозрачная/жёлтая)."
    },
    {
        title: "Аренда полулицевой маски (гидробол)",
        description: "Аренда полулицевой маски для защиты нижней части лица."
    },
    {
        title: "Аренда фонаря",
        description: "Аренда фонаря - для игры в темное время суток."
    },
    {
        title: "Подарочный сертификат",
        description: "Подарите то, чего действительно хочется, и что есть у нас - на Рубеже! <br>В стоимость входит наша забота, фирменный комфорт и чувство настоящего боя! <br>Распространяется на все услуги и товары нашего полигона. <br> Сумма сертификата обговаривается лично!"
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



