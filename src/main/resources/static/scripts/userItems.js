let userId = obj.userId;
let countOfTitleSymblos = 45
let userItemsURL = `http://localhost:8090/api/users/${userId}`

const cookieAuthKeyValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('Authorization='))
    .split('=')[1];

function getUserData() {
    fetch(userItemsURL,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookieAuthKeyValue
            },
        })
        .then(response => response.json())
        .then(json => {
            console.log(json.items)
            json.items.map(item => {
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
                        <span onclick="deleteThisItem(this)" class="item__delete">Удалить</span>
                    `
                const userItemsList = document.querySelector('.user__items__list')
                userItemsList.appendChild(itemForm)
            })
        })
}

getUserData()