    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style:"mapbox://styles/mapbox/streets-v12",
        center: coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    console.log(coordinates);

    const marker1 = new mapboxgl.Marker({color:"red"})
    .setLngLat(coordinates) //listing geometry coordinates
    .setPopup(new mapboxgl.Popup({offset: 25,})
    .setHTML("<h4>Welcome to Wanderlust!</h4>")
    )
    .addTo(map);
