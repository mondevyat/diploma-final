let regUrl = `http://localhost:8090/auth`
const regEmail = document.getElementById("email")
const regSubmit = document.getElementById("confirm")
const regPassword = document.getElementById("password")
const regTitleList = document.querySelectorAll('.regTitle')

const dropAllColors = () => {
    for (let i = 0; i < regTitleList.length; i++)
        regTitleList[i].style.color = 'black'
}

regSubmit.onclick = function() {
    let errors = 0
    dropAllColors()
    const regBody = {
        "email": regEmail.value,
        "password": regPassword.value
    }

    const registeredUserWithToken = JSON.parse(authRequest(regUrl, regBody))
    console.log(registeredUserWithToken)
    if (registeredUserWithToken === 500) {
        regTitleList[0].style.color = 'red'
        regTitleList[1].style.color = 'red'
    } else {
        console.log(registeredUserWithToken)
        document.cookie = `userId=${registeredUserWithToken.id}`
        document.cookie = `name=${registeredUserWithToken.name}`
        document.cookie = `userSurname=${registeredUserWithToken.userSurname}`
        document.cookie = `email=${registeredUserWithToken.email}`
        document.cookie = `Authorization=Bearer ${registeredUserWithToken.token}; path=/; `
        console.log(document.cookie);
        window.location.href = "http://localhost:8090/source/index.html"
    }
}