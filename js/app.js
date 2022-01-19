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

/* FORECAST */

function forecastTemperature(data) {

}

function forecastWind(data) {
    return L.velocityLayer({
        displayValues: true,
        displayOptions: {
            velocityType: 'Global Wind',
            position: 'bottomleft',//REQUIRED !
            emptyString: 'No velocity data',//REQUIRED !
            angleConvention: 'bearingCW',//REQUIRED !
            displayPosition: 'bottomleft',
            displayEmptyString: 'No velocity data',
            speedUnit: 'm/s'
        },
        data: forecast_data,
        // OPTIONAL
        /*minVelocity: 0,      // used to align color scale
        maxVelocity: 10,       // used to align color scale*/
        velocityScale: 0.005,  // modifier for particle animations, arbitrarily defaults to 0.005
        colorScale: []         // define your own array of hex/rgb colors
    });
    
}

function forecast(name, model, hour) {

    var forecast_url = '/forecast/' + model + '/' + hour;
    var forecast_request = new XMLHttpRequest();
    forecast_request.open('GET', forecast_url, true);
    forecast_request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var forecast_data = JSON.parse(this.response);
            switch (model) {
                case 'temperature':
                    _forecast = forecastTemperature(forecast_data)
                    break;

                case 'wind':
                    _forecast = forecastWind(forecast_data)
                    map.addLayer(_forecast);
                    break;

                default:

                    break;
            }
            control_layers.addOverlay(_forecast, name);
        } else {
            console.log('no ' + model + ' data');
        }
    };
    forecast_request.send();
}