    // searchValue = new URLSearchParams(window.location.search).get("value")
    pageNumber = new URLSearchParams(window.location.search).get("pageNumber")
    searchPageCategory = new URLSearchParams(window.location.search).get("category")

    // pageNumber != 0 ? pageValue = pageNumber * 20 : pageValue = 0

    let urlSearchPages = ''

    function categoryPaginationSwitcher() {
        return searchCategory == 'Везде' ? urlSearchPages = `http://localhost:8090/api/search/count/${searchValue}`
                                         : urlSearchPages = `http://localhost:8090/api/search/count/byCategory/${searchPageCategory}/${searchValue}`
    }

    // urlSearchPages = `http://localhost:8090/api/search/count/${searchValue}`
    let counter = doRequest(categoryPaginationSwitcher(), 'GET', {}, '')
    let countOfPages = Math.ceil(counter/countOfGoods)
    console.log(counter)

    if (countOfPages > 0 && searchValue != '') {
        const pages = (currentPage) => {
            let result = ''
            if (countOfPages <= 5) {
                for (let j = 0; j < countOfPages; j++)
                    (j == currentPage)
                        ? result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(j)}&category=${searchPageCategory}" class="items__page__link selected">${parseInt(j) + 1}</a>`
                        : result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(j)}&category=${searchPageCategory}" class="items__page__link">${parseInt(j) + 1}</a>`
            } else {
                if (parseInt(currentPage) + 1 === 1 || parseInt(currentPage) + 1 === 2) {
                    if ((parseInt(currentPage) + 1 === 1)) {
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage)}&category=${searchPageCategory}" class="items__page__link selected">${parseInt(currentPage) + 1}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 1}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 2}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 2}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 3}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 3}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 4}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 4}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 5}</a>`
                    } else if ((parseInt(currentPage) + 1 === 2)) {
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) - 1}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage)}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage)}&category=${searchPageCategory}" class="items__page__link selected">${parseInt(currentPage) + 1}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 1}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 2}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 2}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 3}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 3}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 4}</a>`
                    }
                } else if (parseInt(currentPage) + 1 === countOfPages - 1 || parseInt(currentPage) + 1 === countOfPages) {
                    if ((parseInt(currentPage) + 1 === countOfPages - 1)) {
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 5}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 4}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 4}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 3}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 3}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 2}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 2}&category=${searchPageCategory}" class="items__page__link selected">${countOfPages - 1}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 1}&category=${searchPageCategory}" class="items__page__link">${countOfPages}</a>`
                    } else if ((parseInt(currentPage) + 1 === countOfPages)) {
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 5}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 4}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 4}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 3}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 3}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 2}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 2}&category=${searchPageCategory}" class="items__page__link">${countOfPages - 1}</a>`
                        result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${countOfPages - 1}&category=${searchPageCategory}" class="items__page__link selected">${countOfPages}</a>`
                    }
                } else {
                    result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) - 2}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) - 1}</a>`
                    result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) - 1}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage)}</a>`
                    result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage)}&category=${searchPageCategory}" class="items__page__link selected">${parseInt(currentPage) + 1}</a>`
                    result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 1}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 2}</a>`
                    result += `<a href="../source/search.html?value=${searchValue}&pageNumber=${parseInt(currentPage) + 2}&category=${searchPageCategory}" class="items__page__link">${parseInt(currentPage) + 3}</a>`
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
    else {
        const itemsContainerWrapper = document.querySelector(".items__container__wrapper")
        const itemPages = document.createElement('div')
        itemPages.classList.add('items__pages')
        itemPages.innerHTML = `
                По вашему запросу ничего не найдено! 😭
            `
        itemPages.style.fontSize = "1.5rem"
        itemsContainerWrapper.appendChild(itemPages)
    }