let searchValue = new URLSearchParams(window.location.search).get("value")
let searchCategory = new URLSearchParams(window.location.search).get("category")
let searchTitleValue = document.querySelector('.search__title__value')
searchTitleValue.innerHTML = `Результаты поиска по запросу «${decodeURIComponent(searchValue)}» 
                              <br><br>В категории «${decodeURIComponent(searchCategory)}»`

document.title = `Поиск «${decodeURIComponent(searchValue)}»`

searchableText.value = decodeURIComponent(searchValue)

const countOfGoods = 20
let countOfTitleSymblos = 45

let pageNumber = new URLSearchParams(window.location.search).get("pageNumber")
let pageValue = 0

pageNumber != 0 ? pageValue = pageNumber * 20 : pageValue = 0

let searchURL = ``
let searchCategoryURL = ``

function categorySwitcher() {
    return searchCategory == 'Везде' ? searchURL = `http://localhost:8090/api/search/${decodeURIComponent(searchValue)}/${pageValue}`
                                     : searchCategoryURL = `http://localhost:8090/api/search/unloadCategory/${decodeURIComponent(searchCategory)}/${decodeURIComponent(searchValue)}/${pageValue}`
}

// function emptyBodyReturned() {
//     return doRequest(categorySwitcher(), 'GET', {}, '') === "[]"
// }

if (searchValue != '') {
    // if (emptyBodyReturned())
    // {
    //     let temporary = searchValue
    //     searchValue = switchKeymap(searchValue).toLowerCase()
    //     if (doRequest(categorySwitcher(), 'GET', {}, '') === "[]") {
    //         searchValue = temporary
    //     } else {
    //         searchTitleValue.innerHTML = `Возможно, вы имели ввиду: «${searchValue}»
    //                                       <br><br>В категории «${decodeURIComponent(searchCategory)}»`
    //     }
    // }
    function getData() {
        fetch(categorySwitcher())
            .then(response => response.json())
            .then(json => {
                json.map(searchItem => {
                    const id = searchItem.id
                    const title = searchItem.itemName
                    const category = searchItem.categoryName
                    const sub = searchItem.subcategoryName
                    const photos = searchItem.photography
                    const price = searchItem.price
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
                       <span class="item__address">${sub}</span>
                       <span class="item__date">${category}</span>
                   `
                    const itemsDiv = document.querySelector('.items')
                    itemsDiv.appendChild(itemForm)
                })
            })
    }

    getData()
}