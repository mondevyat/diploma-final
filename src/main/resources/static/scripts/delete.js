function deleteRequest(url, method) {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, false);
    xhr.setRequestHeader("Content-Type", "application/json  ");
    xhr.setRequestHeader("Authorization", getAuthorizationFromCookie());
    xhr.send()

    if (xhr.status != 200) {
        console.log(xhr.responseText, xhr.status)
    } else {
        // вывести результат
        return  xhr.responseText // responseText -- текст ответа.
    }
}

function deleteThisItem(element) {
    let deleteUserId = obj.userId
    let deleteItemId = element.parentElement.querySelector('.item__id').textContent
    let deleteReferenceURL = `http://localhost:8090/api/items/deleteItem/${deleteUserId}/${deleteItemId}`
    let deleteItemURL = `http://localhost:8090/api/items/${deleteItemId}`
    console.log(deleteReferenceURL)
    console.log(deleteItemURL)

    deleteRequest(deleteReferenceURL, 'DELETE')
    deleteRequest(deleteItemURL, 'DELETE')
    window.location.href = "http://localhost:8090/source/cabinet.html"
}

