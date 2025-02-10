
const siteLoader = document.getElementsByClassName('loader'); ///loader_active Лодер
const item = document.getElementsByClassName('item');// элемент списка


//Отправляем запрос GET
let xhr = new XMLHttpRequest(); // создаём переменную
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'); ///инициализируем запрос
xhr.send();///отправляем запрос

xhr.addEventListener('readystatechange', function () {
  const items = document.querySelector('#items');
  if (this.readyState === xhr.DONE) {

    let obj = JSON.parse(xhr.responseText);//Парсим JSON
    let valute = obj.response.Valute;//Присваеваем объект переменной
    let valuteArr = Object.entries(valute);//Объект в массив

    siteLoader[0].classList.remove('loader_active'); //Прячем лодер при загрузке


    //Подгружаем данные в элемент #items
    valuteArr.forEach((e) => {
      items.insertAdjacentHTML('beforeend', `<div class="item">
          <div class="item__code">`
        + e[1].CharCode +
        `</div>
              <div class="item__value">`
        + e[1].Value +
        `</div>
              <div class="item__currency">
                  руб.
              </div>
        </div>`);
    });

  }

})