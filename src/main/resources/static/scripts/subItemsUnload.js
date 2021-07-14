subCategoryId = new URLSearchParams(window.location.search).get("subId")
pageNumber = new URLSearchParams(window.location.search).get("pageNumber")
let subUrl2 = `http://localhost:8090/api/items/podcategory/${subCategoryId}?index=${pageNumber}&offset=${countOfGoods}`

function getData() {
    fetch(subUrl2)
        .then(response => response.json())
        .then(json => {
            json.map(item => {
                    const title = item.name
                    const photos = item.photo
                    const price = item.price
                    const id = item.id
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
                        <span class="item__date">Сегодня 20:49</span>
                    `
                    const itemsDiv = document.querySelector('.items')
                    itemsDiv.appendChild(itemForm)
            })
        })
}

getData()