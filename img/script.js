document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылку на div media и div feed
    var mediaDiv = document.querySelector('.media');
    var feedDiv = document.querySelector('.feed');

    // Проверяем, какая кнопка заранее нажата при загрузке страницы
    var clickedContainer = document.querySelector('.container.clicked');

    // Скрываем соответствующий div в зависимости от нажатой кнопки
    if (clickedContainer.textContent.includes('MEDIA')) {
        mediaDiv.style.display = 'block';
        feedDiv.style.display = 'none';
    } else if (clickedContainer.textContent.includes('POSTS')) {
        feedDiv.style.display = 'block';
        mediaDiv.style.display = 'none';
    }
});

function toggleStyle(clickedElement) {
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
        if(container !== clickedElement) {
            container.classList.remove('clicked');
        }
    });
    clickedElement.classList.toggle('clicked');

    // Получаем ссылку на div media и div feed
    var mediaDiv = document.querySelector('.media');
    var feedDiv = document.querySelector('.feed');

    // Проверяем, какой элемент был нажат, и скрываем соответствующий div
    if (clickedElement.textContent.includes('MEDIA')) {
        mediaDiv.style.display = 'block';
        feedDiv.style.display = 'none'; // Показываем div feed, если он скрыт
    } else if (clickedElement.textContent.includes('POSTS')) {
        feedDiv.style.display = 'block';
        mediaDiv.style.display = 'none'; // Показываем div media, если он скрыт
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtn = document.querySelector('.more');
    var moreText = document.querySelector('.more-text');

    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (moreText.style.display === 'none') {
            moreText.style.display = 'block';
            readMoreBtn.textContent = 'Collapse info';
        } else {
            moreText.style.display = 'none';
            readMoreBtn.textContent = 'More info';
        }
    });
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;

    if (scrollPosition + windowHeight >= fullHeight) {
        var dialogContainer = document.getElementById('dialogContainer');
        dialogContainer.style.display = 'block';
        // Вызываем функцию для плавного скролла вверх после показа диалогового окна
        scrollToTop();
    }
});

function closeDialog() {
    // Вызываем функцию для плавного скролла вверх перед закрытием диалогового окна
    scrollToTop();
    // Закрываем диалоговое окно после завершения плавного скролла
    setTimeout(function() {
        var dialogContainer = document.getElementById('dialogContainer');
        dialogContainer.style.display = 'none';
    }, 100); // Задержка 1 секунда для завершения плавного скролла
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

    function openLoader() {
        window.location.href = 'loader.html';
    }

    function closeModal() {
        var modalContainer = document.getElementById('modalContainer');
        modalContainer.style.display = 'none';
    }

function openModal() {
    document.getElementById("modalContainer").style.display = "block";
}

function closeModal() {
    document.getElementById("modalContainer").style.display = "none";
}

 let touchstartX = 0;
    let touchendX = 0;
    const container = document.getElementById('swipeContainer');

    container.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
    }, false);

    container.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      handleGesture();
    }, false);

    function handleGesture() {
      if (touchendX < touchstartX) {
        window.location.href = "land.html";
      }
    }