const header = document.createElement("header")

let obj = {};
let cookies = document.cookie.split(/; /);
for (let i = 0, len = cookies.length; i < len; i++) {
    let cookie = cookies[i].split(/=/);
    obj[cookie[0]] = cookie[1];
}

let userName = () => {
    return document.cookie.match(/Authorization=(.+?)(;|$)/) ? `${obj.name}`
                                                                      : 'Войти'
}

let linkUserRedirect = () => {
    return document.cookie.match(/Authorization=(.+?)(;|$)/) ? 'http://localhost:8090/source/cabinet.html'
                                                                      : 'http://localhost:8090/source/auth.html'
}

let linkAddRedirect = () => {
    return document.cookie.match(/Authorization=(.+?)(;|$)/) ? 'http://localhost:8090/source/add.html'
                                                                      : 'http://localhost:8090/source/auth.html'
}

let linkMyAdsRedirect = () => {
    return document.cookie.match(/Authorization=(.+?)(;|$)/) ? 'http://localhost:8090/source/ads.html'
                                                                      : 'http://localhost:8090/source/auth.html'
}

let linkFavouritesRedirect = () => {
    return document.cookie.match(/Authorization=(.+?)(;|$)/) ? 'http://localhost:8090/source/favourites.html'
                                                                      : 'http://localhost:8090/source/auth.html'
}

header.innerHTML = `
    <header>
            <div class="top__menu">
                <a href="../source/index.html"><div class="logotype"></div></a>
                <div class="catalogue">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="_1nZS" data-v-414055a2="">
                        <g fill="none" fill-rule="evenodd" data-v-414055a2="">
                            <path d="M0 0h24v24H0z" data-v-414055a2=""></path>
                            <path d="M9 5h12a1 1 0 010 2H9a1 1 0 110-2zm0 6h12a1 1 0 010 2H9a1 1 0 010-2zm0 6h6a1 1 0 010 2H9a1 1 0
                                    010-2zM3.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" fill-rule="nonzero" data-v-414055a2=""></path>
                        </g>
                    </svg>
                    <div class="button__text">
                        Каталог
                    </div>
                </div>
                <div class="search__bar">
                    <select name="selector" class="search__category">
                            <option selected>Везде</option>
                            <option>Электроника</option>
                            <option>Мода</option>
                            <option>Красота и здоровье</option>
                            <option>Авто и мото</option>
                            <option>Коллекционные товары</option>
                            <option>Спортивные товары</option>
                            <option>Дом и сад</option>
                    </select>
                    <div class="search__field">
                        <input placeholder="Поиск по сайту..." type="text" name="search" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" maxlength="255" value="" class="searchable__text" data-v-414055a2="" style="opacity: 1;">
                        <input readonly="readonly" value="" class="searchable__hints" style="visibility: hidden;">
                    </div>
                    <button onclick="addSearchHistoryOnButtonClick()" class="search__button" type="submit" aria-label="Поиск">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="_1nZS" data-v-414055a2="">
                            <g fill="none" fill-rule="evenodd" data-v-414055a2="">
                                <path d="M0 0h24v24H0z" data-v-414055a2=""></path>
                                <path d="M9.996 17.991a7.996 7.996 0 117.995-7.995 1 1 0 01-2 0 5.996 5.996 0 10-1.756 4.24l.707-.708 7.115 7.115a1 1 0 01-1.414 1.414l-5.745-5.745a7.967 7.967 0 01-4.902 1.68z" fill="currentColor" fill-rule="nonzero" data-v-414055a2=""></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="hidden__search__field">
                    <div class="hsf__wrapper"></div>
                </div>
                <div class="icons__box">
                    <div class="personal__account">
                        <a class="personal__account__link" href="${linkUserRedirect()}">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="du" data-v-414055a2="">
                                <g fill="none" fill-rule="evenodd" data-v-414055a2="">
                                    <path d="M0 0h24v24H0z" data-v-414055a2=""></path>
                                    <path d="M7 12.1c-.26 0-.52-.11-.71-.292a1.062 1.062 0 01-.29-.714c0-.262.11-.524.29-.715a1.042 1.042 0 011.42 0c.18.191.29.453.29.715 0 .261-.11.523-.29.714-.19.181-.45.292-.71.292zm10 0c-.26 0-.52-.11-.71-.29-.09-.1-.16-.21-.21-.331a.998.998 0 01-.08-.38c0-.13.03-.261.08-.381s.12-.23.21-.33c.28-.271.72-.371 1.09-.211.13.05.23.12.33.21.09.1.16.21.21.33.05.12.08.251.08.381s-.03.26-.08.381c-.05.12-.12.23-.21.33-.19.18-.45.291-.71.291zm-8.207 4.704a1 1 0 011.414-1.414c.99.99 2.596.99 3.586 0a1 1 0 011.414 1.414 4.537 4.537 0 01-6.414 0zM3.5 11.864c0 5.071 4.405 9.027 9.51 8.442 3.77-.433 6.876-3.455 7.402-7.204.411-2.927-.66-5.734-2.79-7.614a8.473 8.473 0 00-3.496-1.857 1 1 0 01.498-1.937 10.473 10.473 0 014.32 2.294c2.63 2.32 3.955 5.792 3.449 9.392-.653 4.653-4.48 8.376-9.156 8.912C6.943 23.014 1.5 18.127 1.5 11.863c0-4.819 3.273-8.985 7.876-10.17l1.249-.32v1.29a3.45 3.45 0 003.45 3.45h.3a1 1 0 010 2h-.3A5.453 5.453 0 018.789 3.99 8.507 8.507 0 003.5 11.863z" fill="currentColor" fill-rule="nonzero" data-v-414055a2=""></path>
                                </g>
                            </svg>
                            <span class="personal__account__span personal__account__username">${userName()}</span>
                        </a>
                    </div>
                    <div class="orders">
                        <a class="personal__account__link" href="${linkAddRedirect()}">
                            <svg class="place__advertising" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt">
                                <path fill="currentColor" d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/><path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                                <path fill="currentColor" d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"/>
                            </svg>
                            <span class="personal__account__span">Разместить</span>
                        </a>
                    </div>
                    <div class="favourites">
                        <a class="personal__account__link" href="${linkMyAdsRedirect()}">
                           <svg class="my__advertising" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <g><path fill="currentColor" d="M833.3,10H166.7C95.3,10,37.2,70.2,37.2,144.4v711.2c0,74.2,58.1,134.4,129.5,134.4h666.5c71.5,0,129.5-60.2,129.5-134.4V144.4C962.8,70.2,904.7,10,833.3,10z M909.5,855.6c0,43.6-34.2,79.1-76.2,79.1H166.7c-42,0-76.2-35.5-76.2-79.1V144.4c0-43.6,34.2-79.1,76.2-79.1h666.5c42,0,76.2,35.5,76.2,79.1L909.5,855.6L909.5,855.6z M263.1,618.5c-31.5,0-57.1,26.6-57.1,59.2c0,32.8,25.6,59.3,57.1,59.3c31.5,0,57.1-26.5,57.1-59.3C320.2,645,294.6,618.5,263.1,618.5z M263.1,440.7c-31.5,0-57.1,26.6-57.1,59.2c0,32.6,25.6,59.3,57.1,59.3c31.5,0,57.1-26.6,57.1-59.3C320.2,467.3,294.6,440.8,263.1,440.7z M263.1,263c-31.5,0-57.1,26.6-57.1,59.2c0,32.6,25.6,59.2,57.1,59.2c31.5,0,57.1-26.6,57.1-59.2C320.2,289.6,294.6,263,263.1,263z M410.4,347.6h390.9v-73.7H410.4V347.6z M410.4,536.8h390.9v-73.7H410.4V536.8z M410.4,726.2h390.9v-73.8H410.4V726.2z"/></g>
                            </svg>
                            <span class="personal__account__span">Объявления</span>
                        </a>
                    </div>
                    <div class="cart">
                        <a class="personal__account__link" href="${linkFavouritesRedirect()}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="c6j1" data-v-414055a2="">
                                <path fill="currentColor" d="M21 8.5C21 5.805 19.621 4 17.282 4 14.969 4 13 5.743 13 8h-2c0-2.257-1.97-4-4.282-4C4.378 4 3 5.805 3 8.5c0 2.93 2.398 6.212 9 11.246 6.602-5.035 9-8.317 9-11.246zM17.282 2c3.58 0 5.717 2.8 5.718 6.5 0 3.816-2.885 7.664-10.4 13.3l-.6.45-.6-.45C3.886 16.164 1 12.317 1 8.5 1 4.8 3.139 2 6.718 2 8.884 2 10.864 3.069 12 4.742 13.136 3.069 15.115 2 17.282 2z" data-v-414055a2=""></path>
                            </svg>
                            <span class="personal__account__span">Избранное</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="bottom__menu">
                <ul class="bottom__menu__categories">
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=1&subId=0&pageNumber=0">Электроника</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=2&subId=0&pageNumber=0">Мода</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=3&subId=0&pageNumber=0">Красота и здоровье</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=4&subId=0&pageNumber=0">Авто и мото</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=5&subId=0&pageNumber=0">Коллекционные товары</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=6&subId=0&pageNumber=0">Спортивные товары</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=7&subId=0&pageNumber=0">Дом и сад</a>
                    </li>
                    <li class="bottom__menu__li">
                        <a href="../source/categories.html?category=8&subId=0&pageNumber=0">Скидки</a>
                    </li>
                </ul>
            </div>
        </header>
`

const containerDiv = document.querySelector('.container')
containerDiv.appendChild(header)

// ======================================================================================================================

const searchableText = document.querySelector('.searchable__text')
let searchBarURL = ''
let emptyBodyReturnedURL = ''

function headerCategorySwitcher() {
    return $('select[name=selector] option').filter(':selected').val() == 'Везде' ? searchBarURL = `http://localhost:8090/api/search/${searchableText.value}`
                                     : searchBarURL = `http://localhost:8090/api/search/byCategory/${$('select[name=selector] option').filter(':selected').val()}/${searchableText.value}`
}

// function counterForBodySwitcher() {
//     return $('select[name=selector] option').filter(':selected').val() == 'Везде' ? emptyBodyReturnedURL = `http://localhost:8090/api/search/count/${searchableText.value}`
//         : emptyBodyReturnedURL = `http://localhost:8090/api/search/count/byCategory/${$('select[name=selector] option').filter(':selected').val()}/${searchableText.value}`
// }
//
// function emptyBodyReturned() {
//     return doRequest(counterForBodySwitcher(), 'GET', {}, '') === "0"
// }

// categoriesList.options[categoriesList.selectedIndex].text

$(searchableText).bind("keyup",function () {

    console.log($('select[name=selector] option').filter(':selected').val())

    if (searchableText.value.length > 0) {

        // if (emptyBodyReturned()) {
        //     let temporary = searchableText.value
        //     searchableText.value = switchKeymap(searchableText.value).toLowerCase()
        //     if (JSON.parse(doRequest(headerCategorySwitcher(), 'GET', {}, '')).length == 0)
        //         searchableText.value = temporary
        // }

        headerCategorySwitcher()

        // console.log(doRequest(categorySwitcher(), 'GET', {}, cookieAuthKeyValue))

        function getSearchData() {
            fetch(searchBarURL,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                })
                .then(response => response.json())
                .then(json => {
                    let iterator = 0
                    document.querySelector('.hidden__search__field').style.display = 'flex'
                    document.querySelector('.hsf__wrapper').innerHTML = ''
                    if (json.length === 0) document.querySelector('.hidden__search__field').style.display = 'none'
                    json.map(search => {
                        if (iterator < 8) {
                            let searchableItemName = search.itemName
                            let searchableItemId = search.id
                            const hiddenSearchItem = document.createElement('div')
                            hiddenSearchItem.classList.add('search__item__container')
                            hiddenSearchItem.innerHTML = `
                            <a onclick="addSearchHistoryOnLinkClick(this)" href="http://localhost:8090/source/item.html?id=${searchableItemId}" class="search__item__container">${searchableItemName}</a>
                        `
                            const hsfWrapper = document.querySelector('.hsf__wrapper')
                            hsfWrapper.appendChild(hiddenSearchItem)
                        } else {
                            return null
                        }
                        iterator++
                    })
                })
        }
        getSearchData()
    }
})

document.querySelector(".container__wrapper").addEventListener("keydown", function(event) {
    if (event.keyCode == 27)
        document.querySelector('.hidden__search__field').style.display = 'none'
})

document.querySelector(".searchable__text").addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
        window.location.href = `http://localhost:8090/source/search.html?value=${encodeURIComponent(searchableText.value)}&pageNumber=0&category=${encodeURIComponent($('select[name=selector] option').filter(':selected').val())}`
})

$(".search__button").bind("click", function () {
    window.location.href = `http://localhost:8090/source/search.html?value=${encodeURIComponent(searchableText.value)}&pageNumber=0&category=${encodeURIComponent($('select[name=selector] option').filter(':selected').val())}`
})

function overlap(array, value) {
    for (let i = 0; i < array.length; i++)
    {
        if (value == array[i])
        {
            return true
        }
    }
    return false
}

function addSearchHistoryOnButtonClick() {

    if (searchableText.value != '' && searchableText.value.match(/^[а-яА-ЯёЁa-zA-Z0-9 ]+$/)
        && (document.cookie.match(/Authorization=(.+?)(;|$)/))) {
        let searchBody = {
            "id": 0,
            "searchResults": ''
        }

        let searchHistoryAddURL = `http://localhost:8090/api/updateSearchHistory`
        let searchHistoryUnloadURL = `http://localhost:8090/api/getSearchHistory/${obj.userId}`

        let searchResultsObj = JSON.parse(doRequest(searchHistoryUnloadURL, 'GET', {}, getAuthorizationFromCookie()))
        // let searchResultsObj = "моби;Мобильный телефон Samsung;попка;попка;попка;попка;попка;попка;"
        // searchResultsObj - это распаршеная JSONка от URL выгружающий search_results

        console.log(searchResultsObj[0])

        if (searchResultsObj[0].searchResults == null) {
            searchBody = {
                "id": searchResultsObj[0].id,
                "searchResults": `${searchableText.value.trim()};;;;;;;;`
            }
            doRequest(searchHistoryAddURL, 'PUT', searchBody, getAuthorizationFromCookie())
        } else {

            console.log("Что приходит из БД: ")
            console.log(searchResultsObj[0].searchResults)

            let arr = []
            for (let i = 0; i < searchResultsObj[0].searchResults.split(';').length - 1; i++) {
                arr.push(searchResultsObj[0].searchResults.split(';')[i])
            }

            if (!overlap(arr, searchableText.value.trim())) {

                console.log("повторений не найдено")

                console.log("Изначально массив выглядит так:")
                console.log(arr)

                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == '') {
                        arr[i] = searchableText.value.trim()
                        break
                    } else if (i == arr.length - 1) {
                        arr.shift()
                        arr.push(searchableText.value.trim())
                        break
                    }
                }

                console.log("Потом так:")
                console.log(arr)

                // arr = arr.reverse()
                // let arr2 = []
                //
                // for (let i = 0; i < arr.length; i++) {
                //     if (arr[i] != '') {
                //         arr2.push(arr[i])
                //     }
                // } `${arr2.reverse().join(';')};`

                // console.log("Что пользователь видит в выпадающем меню: ")
                // console.log(arr2)
                searchResultsObj[0].searchResults = `${arr.join(';')};`
                searchBody = {
                    "id": searchResultsObj[0].id,
                    "searchResults": searchResultsObj[0].searchResults
                }
                doRequest(searchHistoryAddURL, 'PUT', searchBody, getAuthorizationFromCookie())
                console.log("Что посылается в БД: ")
                console.log(searchResultsObj[0].searchResults)
            }
        }
    }
}

function addSearchHistoryOnLinkClick(search__item__container) {

    if (searchableText.value != '' && searchableText.value.match(/^[а-яА-ЯёЁa-zA-Z0-9 ]+$/)
        && (document.cookie.match(/Authorization=(.+?)(;|$)/))) {
        let searchBody = {
            "id": 0,
            "searchResults": ''
        }

        let searchHistoryAddURL = `http://localhost:8090/api/updateSearchHistory`
        let searchHistoryUnloadURL = `http://localhost:8090/api/getSearchHistory/${obj.userId}`

        let searchResultsObj = JSON.parse(doRequest(searchHistoryUnloadURL, 'GET', {}, getAuthorizationFromCookie()))
        // let searchResultsObj = "моби;Мобильный телефон Samsung;попка;попка;попка;попка;попка;попка;"
        // searchResultsObj - это распаршеная JSONка от URL выгружающий search_results

        console.log(searchResultsObj[0])

        if (searchResultsObj[0].searchResults == null) {
            searchBody = {
                "id": searchResultsObj[0].id,
                "searchResults": `${search__item__container.textContent.trim()};;;;;;;;`
            }
            doRequest(searchHistoryAddURL, 'PUT', searchBody, getAuthorizationFromCookie())
        } else {

            console.log("Что приходит из БД: ")
            console.log(searchResultsObj[0].searchResults)

            let arr = []
            for (let i = 0; i < searchResultsObj[0].searchResults.split(';').length - 1; i++) {
                arr.push(searchResultsObj[0].searchResults.split(';')[i])
            }

            if (!overlap(arr, search__item__container.textContent.trim())) {

                console.log("повторений не найдено")

                console.log("Изначально массив выглядит так:")
                console.log(arr)

                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] == '') {
                        arr[i] = search__item__container.textContent.trim()
                        break
                    } else if (i == arr.length - 1) {
                        arr.shift()
                        arr.push(search__item__container.textContent.trim())
                        break
                    }
                }

                console.log("Потом так:")
                console.log(arr)

                // arr = arr.reverse()
                // let arr2 = []
                //
                // for (let i = 0; i < arr.length; i++) {
                //     if (arr[i] != '') {
                //         arr2.push(arr[i])
                //     }
                // } `${arr2.reverse().join(';')};`

                // console.log("Что пользователь видит в выпадающем меню: ")
                // console.log(arr2)
                searchResultsObj[0].searchResults = `${arr.join(';')};`
                searchBody = {
                    "id": searchResultsObj[0].id,
                    "searchResults": searchResultsObj[0].searchResults
                }
                doRequest(searchHistoryAddURL, 'PUT', searchBody, getAuthorizationFromCookie())
                console.log("Что посылается в БД: ")
                console.log(searchResultsObj[0].searchResults)
            }
        }
    }
}

searchableText.addEventListener("mousedown", function() {
    if (searchableText.value.length == 0 && (document.cookie.match(/Authorization=(.+?)(;|$)/))) {
        console.log("Открыта история поиска")

        document.querySelector('.hidden__search__field').style.display = 'flex'

        document.querySelector('.hsf__wrapper').innerHTML = ''

        let searchHistoryUnloadURL = `http://localhost:8090/api/getSearchHistory/${obj.userId}`

        // console.log(doRequest(categorySwitcher(), 'GET', {}, cookieAuthKeyValue))

        function unloadSearchData() {
            fetch(searchHistoryUnloadURL,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                })
                .then(response => response.json())
                .then(json => {
                    json.map(search => {
                        for (let iterator = 0; iterator < search.searchResults.split(';').length; iterator++) {
                            let searchableItemName = search.searchResults.split(';').reverse()[iterator]
                            // let searchableItemId = search.id
                            if (searchableItemName != '') {
                                const hiddenSearchItem = document.createElement('div')
                                hiddenSearchItem.classList.add('search__item__container')
                                hiddenSearchItem.innerHTML = `
                                       <a onclick="addSearchHistoryOnLinkClick(this)" href="http://localhost:8090/source/search.html?value=${searchableItemName}&pageNumber=0&category=Везде" class="search__item__container">${searchableItemName}</a>
                               `
                                const hsfWrapper = document.querySelector('.hsf__wrapper')
                                hsfWrapper.appendChild(hiddenSearchItem)
                            }
                        }
                    })
                })
        }
        unloadSearchData()
    } else {
        console.log("История поиска убрана")
    }
})

let TestSTR = 'SamsUng телефон'

// switchKeymap = (str) => {
//     let map = {
//         'q' : 'й', 'w' : 'ц', 'e' : 'у', 'r' : 'к', 't' : 'е', 'y' : 'н', 'u' : 'г', 'i' : 'ш', 'o' : 'щ', 'p' : 'з', '[' : 'х', ']' : 'ъ', 'a' : 'ф', 's' : 'ы', 'd' : 'в', 'f' : 'а', 'g' : 'п', 'h' : 'р', 'j' : 'о', 'k' : 'л', 'l' : 'д', ';' : 'ж', '\'' : 'э', 'z' : 'я', 'x' : 'ч', 'c' : 'с', 'v' : 'м', 'b' : 'и', 'n' : 'т', 'm' : 'ь', ',' : 'б', '.' : 'ю','Q' : 'Й', 'W' : 'Ц', 'E' : 'У', 'R' : 'К', 'T' : 'Е', 'Y' : 'Н', 'U' : 'Г', 'I' : 'Ш', 'O' : 'Щ', 'P' : 'З', '[' : 'Х', ']' : 'Ъ', 'A' : 'Ф', 'S' : 'Ы', 'D' : 'В', 'F' : 'А', 'G' : 'П', 'H' : 'Р', 'J' : 'О', 'K' : 'Л', 'L' : 'Д', ';' : 'Ж', '\'' : 'Э', 'Z' : '?', 'X' : 'ч', 'C' : 'С', 'V' : 'М', 'B' : 'И', 'N' : 'Т', 'M' : 'Ь', ',' : 'Б', '.' : 'Ю',
//     }
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//         result += map[str.charAt(i)] || str.charAt(i)
//     }
//     return result
// }

// let str = 'vj,bkmysq'
// str = switchKeymap(str)
// console.log(str.toLowerCase())
//
// let testConsoleLogURL = `http://localhost:8090/api/search/${str}`
// tCLValuesURL = JSON.parse(doRequest(testConsoleLogURL, 'GET', {}, ''))
// console.log(tCLValuesURL)
