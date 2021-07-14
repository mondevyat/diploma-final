function getRequest(url, data) {
    // 1. Создаём новый объект XMLHttpRequest
    let xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('POST', url, false);
    xhr.setRequestHeader("Content-Type", "application/json  ");
    xhr.send(JSON.stringify(data));

// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        return  xhr.responseText // responseText -- текст ответа.
    }
}

let regUrl = `http://localhost:8090/register`
const regEmail = document.getElementById("email")
const regSubmit = document.getElementById("confirm")
const regName = document.getElementById("user__name")
const regPassword = document.getElementById("password")
const regLastName = document.getElementById("user__surname__form")
const regPasswordConfirm = document.getElementById("confirm__password")
const regTitleList = document.querySelectorAll('.regTitle')

const dropAllColors = () => {
    for (let i = 0; i < regTitleList.length; i++)
            regTitleList[i].style.color = 'black'
}

const searchHistoryURL = `http://localhost:8090/api/searchHistory`

regSubmit.onclick = function() {
    let errors = 0;
    dropAllColors()
    const regBody = {
        "name": regName.value,
        "userSurname": regLastName.value,
        "password": regPassword.value,
        "email": regEmail.value,
        "historyId": 0
    }

    if (regName.value.length < 3)
    {
        regTitleList[0].style.color = 'red'
        errors++
    }
    if (regLastName.value.length < 3)
    {
        regTitleList[1].style.color = 'red'
        errors++
    }
    if (!(regEmail.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))) {
        regTitleList[2].style.color = 'red'
        errors++
    }
    if (regPassword.value.length < 3)
    {
        regTitleList[3].style.color = 'red'
        errors++
    }
    if ((regPasswordConfirm.value != regPassword.value) || (regPasswordConfirm.value === ''))
    {
        regTitleList[4].style.color = 'red'
        errors++
    }
    if (errors == 0) {
        let searchHistoryValues = JSON.parse(doRequest(searchHistoryURL, 'POST', {}, ''))
        regBody.historyId = searchHistoryValues.id
        console.log(regBody)
        console.log(doRequest(regUrl, 'POST', regBody, ''))
        window.location.href = "http://localhost:8090/source/auth.html"
    }
}