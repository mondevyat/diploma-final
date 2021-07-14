let data = {}
let countOfGoods = 36
let countOfTitleSymblos = 45
let page = 0
let url = `http://localhost:8090/api/items/page?index=${page}&offset=${countOfGoods}`

let showUserName = () => {
    return document.cookie.match(/Authorization=(.+?)(;|$)/) ? `Рекомендации для вас, ${obj.name}`
        : 'Рекомендации для вас'
}

let indexPageTitle = document.querySelector('.recommendations__title')
indexPageTitle.innerHTML = showUserName()

function getData() {
    fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(json => {
            let iterator = 0
            json.map(item => {
                if (iterator < countOfGoods) {
                    const title = item.name
                    const photos = item.photo
                    const price = item.price
                    const id = item.id
                    const timeStamp = item.timeCreated
                    const itemForm = document.createElement('div')
                    itemForm.classList.add('item')
                    itemForm.innerHTML = `
                        <a href="../source/item.html?id=${id}" class="item__image__link__wrapper">
                            <img src="${photos.split(' ')[0]}" alt="Изображение отсутствует" class="item__image">
                        </a>
                        <div class= "item__id">${id}</div>
                        <a href="../source/item.html?id=${id}" class="item__title__link">
                            <span class="item__title__span">${
                                title.length < countOfTitleSymblos 
                                    ? title 
                                    : title.replace(title.slice(countOfTitleSymblos, title.length), '...')
                           }</span>
                        </a>
                        <span class="item__price">${price} ₽</span>
                        <span class="item__address">Брянск, р-н Бежицкий</span>
                        <span class="item__date">${timeStamp.split('T')[0]} ${timeStamp.split('T')[1].slice(0, 5)}</span>
                    `
                    const itemsDiv = document.querySelector('.items')
                    itemsDiv.appendChild(itemForm)
                } else {return null}
                iterator++
            })
        })
}

getData()

let loader = document.querySelector('.loader')
let flag = true

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

onscroll = function(){
    if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
        loader.style.display = 'flex'
        flag = true
        sleep(1500).then(() => {
            if (flag) {
                loader.style.display = 'none'
                url = `http://localhost:8090/api/items/page?index=${++page}&offset=${countOfGoods}`
                getData()
            }
            flag = false
        })
    };
};
