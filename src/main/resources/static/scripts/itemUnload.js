let itemId = (location.search).split('?id=').join('')
let url = `http://localhost:8090/api/items/${itemId}`

let counterPlusPlusViewURL = `http://localhost:8090/api/items/views/${itemId}`
doRequest(counterPlusPlusViewURL, 'PUT', {}, '')

function getData() {
    fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(item => {
                    document.title = item.name

                    const title = item.name
                    const description = item.description

                    const photos = item.photo
                    const imagesArr = () => {
                        let result = ''
                        for (let photography = 0; photography < photos.split(' ').length; photography++) {
                            // if (checkImgSrc(photos.split(' ')[photography]))
                                result += `<img src="${photos.split(' ')[photography]}" onerror="this.style.display = 'none'" onclick="placeImage(this.src)" alt="" class="another__images">`
                        }
                        return result;
                    }

                    console.log(imagesArr())

                    const views = item.views
                    const price = item.price
                    const id = item.id
                    const timeStamp = item.timeCreated.split('T')[0]
                    const itemForm = document.createElement('div')

                    itemForm.classList.add('item__container')
                    itemForm.innerHTML = `
                        <div class="title__and__price">
                            <h1 class="item__container__title">${title}</h1>
                            <span class="item__container__price">${price} ₽</span>
                        </div>
                        <div class="item__container__content">
                            <img class="item__container__content__image" src="${photos.split(' ')[0]}" alt="">
                            <div class="item__container__content__actions">
                                <div class="actions__show__number">
                                    <a href="" class="show__number__link">
                                        <span class="show__number__text">Показать телефон</span>
                                        <span class="show__number__phone">8 919 XXX-XX-XX</span>
                                    </a>
                                </div>
                                <div class="actions__write__message">
                                    <a href="" class="write__message__link">
                                        <span class="write__message__text">Написать сообщение</span>
                                        <span class="write__message__phone">Отвечает за несколько часов</span>
                                    </a>
                                </div>
                                <div class="actions__seller__account">
                                    <a href="" class="seller__account__link">
                                        <span class="seller__account__name">Имя Фамилия</span>
                                        <img src="../img/profile_picture.png" alt="Ошибка" class="seller__account__picture">
                                    </a>
                                </div>
                                <div class="actions__id__and__views">
                                    <span class="actions__item__id">№${id}</span>
                                    <div class="actions__item__views">
                                        <svg class="svg__eye">
                                            <path xmlns="http://www.w3.org/2000/svg" id="a" d="M1.24 9.67a9.6 9.6 0 0 1 17.52 0c.1.21.1.45 0 .66a9.6 9.6 0 0 1-17.52 0 .8.8 0 0 1 0-.66zM10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-1.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                                        </svg>
                                        <span title="Количество просмотров страницы" class="actions__item__views__counter">${views}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item__container__information">
                            <div class="item__container__information__fields">
                                <div class="fields__images">
                                        ${imagesArr()}
<!--                                    <a class="fields__images__link" href="#"><img src="" alt="" class="another__images"></a>-->
                                </div>
                                <div class="fields__address">Дата добавления: ${timeStamp}</div>
<!--                                <div class="fields__address">Брянская область, Брянск, Черепки р-н Фокинский</div>-->
                                <div class="fields__description">${
                                        description == null
                                        ?  "Описание отсутствует" 
                                        : description
                                }</div>
                            </div>
                            <div class="item__container__information__filler"></div>
                        </div>
                    `
                    const containerDiv = document.querySelector('.container')
                    containerDiv.appendChild(itemForm)
        })
}

getData()


function placeImage(src) {
    const currImg = document.querySelector('.item__container__content__image')
    currImg.src = src
}


// for (let photography = 0; photography > photos.split(' ').length; photography++) {
//     itemForm.innerHTML += `<a class="fields__images__link" href="#"><img src="${photos.split(' ')[photography]}" alt="" class="another__images"></a>`
// }