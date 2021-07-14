if (subCategoryId == 0) {

function getRequest(url) {
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', url, false);

// 3. Отсылаем запрос
    xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        return  xhr.responseText // responseText -- текст ответа.
    }
}

categoryId = new URLSearchParams(window.location.search).get("category")
subCategoryId = new URLSearchParams(window.location.search).get("subId")
pageNumber = new URLSearchParams(window.location.search).get("pageNumber")
urlCategoryPages = `http://localhost:8090/api/items/countCategory/${categoryId}`
let counter = getRequest(urlCategoryPages)
let countOfPages = Math.ceil(counter/countOfGoods)
    console.log(countOfPages);
    const pages = (currentPage) => {
        let result = ''
        if (countOfPages <= 5) {
            for (let j = 0; j < countOfPages; j++)
                (j == currentPage)
                    ? result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(j)}" class="items__page__link selected">${parseInt(j) + 1}</a>`
                    : result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(j)}" class="items__page__link">${parseInt(j) + 1}</a>`
        }
        else {
            if (parseInt(currentPage) + 1 === 1 || parseInt(currentPage) + 1 === 2) {
                if ((parseInt(currentPage) + 1 === 1)) {
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage)}" class="items__page__link selected">${parseInt(currentPage) + 1}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 1}" class="items__page__link">${parseInt(currentPage) + 2}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 2}" class="items__page__link">${parseInt(currentPage) + 3}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 3}" class="items__page__link">${parseInt(currentPage) + 4}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 4}" class="items__page__link">${parseInt(currentPage) + 5}</a>`
                } else if ((parseInt(currentPage) + 1 === 2)) {
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) - 1}" class="items__page__link">${parseInt(currentPage)}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage)}" class="items__page__link selected">${parseInt(currentPage) + 1}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 1}" class="items__page__link">${parseInt(currentPage) + 2}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 2}" class="items__page__link">${parseInt(currentPage) + 3}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 3}" class="items__page__link">${parseInt(currentPage) + 4}</a>`
                }
            } else if (parseInt(currentPage) + 1 === countOfPages - 1 || parseInt(currentPage) + 1 === countOfPages) {
                if ((parseInt(currentPage) + 1 === countOfPages - 1)) {
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 5}" class="items__page__link">${countOfPages - 4}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 4}" class="items__page__link">${countOfPages - 3}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 3}" class="items__page__link">${countOfPages - 2}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 2}" class="items__page__link selected">${countOfPages - 1}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 1}" class="items__page__link">${countOfPages}</a>`
                } else if ((parseInt(currentPage) + 1 === countOfPages)) {
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 5}" class="items__page__link">${countOfPages - 4}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 4}" class="items__page__link">${countOfPages - 3}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 3}" class="items__page__link">${countOfPages - 2}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 2}" class="items__page__link">${countOfPages - 1}</a>`
                    result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${countOfPages - 1}" class="items__page__link selected">${countOfPages}</a>`
                }
            } else {
                result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) - 2}" class="items__page__link">${parseInt(currentPage) - 1}</a>`
                result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) - 1}" class="items__page__link">${parseInt(currentPage)}</a>`
                result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage)}" class="items__page__link selected">${parseInt(currentPage) + 1}</a>`
                result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 1}" class="items__page__link">${parseInt(currentPage) + 2}</a>`
                result += `<a href="../source/categories.html?category=${categoryId}&subId=${subCategoryId}&pageNumber=${parseInt(currentPage) + 2}" class="items__page__link">${parseInt(currentPage) + 3}</a>`
            }
        }
        return result
    }

    const itemsContainerWrapper = document.querySelector(".items__container__wrapper")
    const itemPages = document.createElement('div')
    itemPages.classList.add('items__pages')
    itemPages.innerHTML = `
    ${pages(pageNumber)}
`
    itemsContainerWrapper.appendChild(itemPages)

    const allItemPages = document.querySelectorAll('.items__pages')
    for (let i = 0; i < allItemPages.length; i++) {
        allItemPages[i].addEventListener('click', function () {
            pages(parseInt(pageNumber) - 1)
        });
    }
}