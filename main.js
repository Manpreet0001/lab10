function initMap() {
    let Scarborough = {
        lat: 43.7431713,
        lng: -79.2597034
    };


    let location = document.getElementById("maps");

    let mylocation = new google.maps.Map(location, {
        zoom: 15,
        center: Scarborough,
    });

    let marker = new google.maps.Marker({
        position: Scarborough,
        maps: mylocation
    });


}