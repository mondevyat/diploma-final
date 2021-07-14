const cabinet = document.createElement("div")
cabinet.classList.add("user__interface__container")

function deleteAllCookies() {
    let allCookies = document.cookie.split(';');

    for (let i = 0; i < allCookies.length; i++) {
        document.cookie = allCookies[i] + "=;expires="
            + new Date(0).toUTCString();
    }

    document.cookie = `Authorization=deleted; path=/; max-age=-1`
    window.location.href = "http://localhost:8090/source/auth.html"
}

cabinet.innerHTML = `
                <div class="user__interface">
                    <a href="../../source/add.html " class="user__interface__add">
                        <svg class="place__advertising" xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt">
                            <path fill="currentColor" d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"/><path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                            <path fill="currentColor" d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0"/>
                        </svg>
                    </a>
                    <a href="" class="user__interface__my__ads">
                        <svg class="my__advertising" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                <g><path fill="currentColor" d="M833.3,10H166.7C95.3,10,37.2,70.2,37.2,144.4v711.2c0,74.2,58.1,134.4,129.5,134.4h666.5c71.5,0,129.5-60.2,129.5-134.4V144.4C962.8,70.2,904.7,10,833.3,10z M909.5,855.6c0,43.6-34.2,79.1-76.2,79.1H166.7c-42,0-76.2-35.5-76.2-79.1V144.4c0-43.6,34.2-79.1,76.2-79.1h666.5c42,0,76.2,35.5,76.2,79.1L909.5,855.6L909.5,855.6z M263.1,618.5c-31.5,0-57.1,26.6-57.1,59.2c0,32.8,25.6,59.3,57.1,59.3c31.5,0,57.1-26.5,57.1-59.3C320.2,645,294.6,618.5,263.1,618.5z M263.1,440.7c-31.5,0-57.1,26.6-57.1,59.2c0,32.6,25.6,59.3,57.1,59.3c31.5,0,57.1-26.6,57.1-59.3C320.2,467.3,294.6,440.8,263.1,440.7z M263.1,263c-31.5,0-57.1,26.6-57.1,59.2c0,32.6,25.6,59.2,57.1,59.2c31.5,0,57.1-26.6,57.1-59.2C320.2,289.6,294.6,263,263.1,263z M410.4,347.6h390.9v-73.7H410.4V347.6z M410.4,536.8h390.9v-73.7H410.4V536.8z M410.4,726.2h390.9v-73.8H410.4V726.2z"/></g>
                            </svg>
                    </a>
                    <div class="user__interface__rightside">
                        <span class="user__interface__rightside__greeting">Здравствуйте, ${obj.name}!</span>
                        <a onclick="deleteAllCookies()" class="user__interface__rightside__leave">Выйти</a>
                    </div>
                </div>
            
`

const containerDivElem = document.querySelector('.container')
containerDivElem.appendChild(cabinet)