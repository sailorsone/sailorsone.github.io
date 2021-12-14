function loadContent(url) {
    fetch(url, {
        method: 'GET'
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        document.querySelector('#main').innerHTML = data;
    }).catch(function (err) {
        console.log('Errore: ', err);
    });
}