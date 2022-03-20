let menuElements = document.getElementsByClassName('menuElement') // Элементы меню. [0] - ресурсы, [1] - запуск, [2] - другое

function hasClass(element, className) { // Функция для проверки классов
    let rx = new RegExp('(?:^| )' + className + '(?: |$)');
    return rx.test(element.className);
}

menuElements[0].onclick = function () {
  if (!hasClass(menuElements[0], 'active')) {
    menuElements[0].classList.add('active')
    menuElements[1].classList.remove('active')
    menuElements[2].classList.remove('active')
  }
}
menuElements[1].onclick = function () {
  if (!hasClass(menuElements[1], 'active')) {
    menuElements[1].classList.add('active')
    menuElements[0].classList.remove('active')
    menuElements[2].classList.remove('active')
  }
}
menuElements[2].onclick = function () {
  if (!hasClass(menuElements[2], 'active')) {
    menuElements[2].classList.add('active')
    menuElements[1].classList.remove('active')
    menuElements[0].classList.remove('active')
  }
}
