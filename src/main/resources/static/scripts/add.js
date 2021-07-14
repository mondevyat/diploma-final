const cookieAuthKeyValue = getAuthorizationFromCookie()

const dropAllColors = () => {
    for (let i = 0; i < addTitleList.length; i++)
        addTitleList[i].style.color = 'black'
}

const addTitleList = document.querySelectorAll('.addTitle')
const addSubmit = document.getElementById('item__confirm')

addSubmit.onclick = function() {
    let addUrl = `http://localhost:8090/api/items/newItem`
    const addName = document.getElementById('item__name')
    const addPrice = document.getElementById('item__price')
    const categoriesList = document.getElementById('catList')
    const subcategoriesList = document.getElementById('subsList')
    const addDescription = document.getElementById('item__description')
    const addPhotos = document.getElementById('item__photos')
    console.log(addPhotos.value.slice(12))
    const addPhotoFile = document.getElementById('item__photos').files[0]
    console.log(addPhotoFile)
    console.log(categoriesList.options[categoriesList.selectedIndex].text.slice(3))

    let addSubcategory = ''
    if (subcategoriesList.options[subcategoriesList.selectedIndex] !== undefined) {
        let urlGetSublistByName = `http://localhost:8090/api/getSubcategory?name=${subcategoriesList.options[subcategoriesList.selectedIndex].text}`
        addSubcategory = JSON.parse(doRequest(urlGetSublistByName, 'GET', {}, ""))
    }

    let errors = 0;
    dropAllColors()
    const regBody = {
        "name": addName.value,
        "timeCreated": new Date().toISOString(),
        "countryCode": 7,
        "photo": `http://localhost:8090/img/${addPhotos.value.slice(12)}`,
        "description": addDescription.value,
        "price": addPrice.value,
        "views": 0,
        "podcategory": {
            "id": addSubcategory.id,
            "nameSubcategory": addSubcategory.nameSubcategory,
        }
    }

    if (addName.value.length === 0) {
        addTitleList[0].style.color = 'red'
        errors++
    }
    if (!(addPrice.value.match(/^[1-9][0-9]*(?:\.[0-9]+)?\$?$/))) {
        addTitleList[1].style.color = 'red'
        errors++
    }
    if (categoriesList.options[categoriesList.selectedIndex] === categoriesList.options[0]) {
        addTitleList[2].style.color = 'red'
        errors++
    }
    if (addSubcategory.length == '') {
        addTitleList[3].style.color = 'red'
        errors++
    }
    if (addDescription.value.length === 0) {
        addTitleList[4].style.color = 'red'
        errors++
    }
    if (addPhotos.value === '') {
        addTitleList[5].style.color = 'red'
        errors++
    }
    if (errors == 0) {
        sendFile(addPhotoFile, `http://localhost:8090/fileUploadPage`, cookieAuthKeyValue)
        const item = JSON.parse(doRequest(addUrl, 'POST', regBody, cookieAuthKeyValue))

        console.log(item);

        let regBodyUserItemIds = {
            "userId": obj.userId,
            "itemId": item.id
        }

        console.log(regBodyUserItemIds)
        const itemUserUrl = "http://localhost:8090/api/items/userItem"
        console.log(doRequest(itemUserUrl, 'POST', regBodyUserItemIds, cookieAuthKeyValue))
        window.location.href = "http://localhost:8090/source/cabinet.html"

        console.log("Ошибок не обнаружено!")
    }
}
