categoryId = new URLSearchParams(window.location.search).get("category")
pageNumber = new URLSearchParams(window.location.search).get("pageNumber")
let subUrl = `http://localhost:8090/api/subcategory/${categoryId}`

function getData() {
    fetch(subUrl)
        .then(response => response.json())
        .then(json => {
            json.map(sub => {
                    const subTitle = sub.nameSubcategory
                    const subId = sub.id
                    const itemForm = document.querySelector('.subcategories')
                    itemForm.classList.add('subcategories')
                    itemForm.innerHTML += `
                        <a class="subcategories__link" href="../source/categories.html?category=${categoryId}&subId=${subId}&pageNumber=0">${subTitle}</a>  `
            })
        })
}

getData()