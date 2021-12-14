function loadContent(url) {
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        document.querySelector('#main').innerHTML = data;
        document.querySelector("#main").querySelectorAll('script').forEach(function (pageScript) {
            eval(pageScript.innerText);
        });
    }).catch(function (err) {
        console.log('Errore: ', err);
    });
}