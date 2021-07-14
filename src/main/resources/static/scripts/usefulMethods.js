documentcookie = document.cookie
function getAuthorizationFromCookie() {
    return documentcookie
        .split('; ')
        .find(row => row.startsWith('Authorization='))
        .split('=')[1];
}

function doRequest(url, method, data, authToken) {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", authToken);
    xhr.send(JSON.stringify(data));

    if (xhr.status !== 200) {
        return xhr.status
    } else {
        return  xhr.responseText
    }
}

function sendFile(file, url, authToken) {
    // Создаем форму в конструкторе:
    let formData = new FormData();
    // Добавляем наш файл в форму:
    formData.append('file', file, file.name);
    // Отправляем форму на сервер:
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Authorization", authToken);
    xhr.send(formData);
}

function authRequest(url, data) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    if (xhr.status !== 200) {
        return xhr.status
    } else {
        return  xhr.responseText
    }
}