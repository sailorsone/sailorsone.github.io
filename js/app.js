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

function getJSON(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
        } else {
            // We reached our target server, but it returned an error
        }
    };
    request.onerror = function() {
        // There was a connection error of some sort
    };
    request.send();
}