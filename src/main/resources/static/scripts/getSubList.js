let subsList = document.createElement('select')
subsList.setAttribute('id','subsList')

let catList = document.getElementById('catList')
let catListOptions = document.getElementById('catList').getElementsByTagName('option')
let getCategoryId = 0

catList.onchange = function () {
    subsList.innerHTML = ''
    for (let i = 0; i < catListOptions.length; i++) {
        if (catListOptions[i].value === catList.options[catList.selectedIndex].text) {
            getCategoryId = catListOptions[i].value.slice(0, 1)
            console.log(getCategoryId)
            break
        }
    }

    let getSubsListUrl = `http://localhost:8090/api/subcategory/${getCategoryId}`

    function getSubs() {
        fetch(getSubsListUrl)
            .then(response => response.json())
            .then(json => {
                json.map(sub => {
                    const nameSubcategory = sub.nameSubcategory
                    subsList.innerHTML += `
                        <option>${nameSubcategory}</option> `
                })
            })
    }
    getSubs()
}

const authDiv = document.querySelector('.item__subcategory')
authDiv.appendChild(subsList)