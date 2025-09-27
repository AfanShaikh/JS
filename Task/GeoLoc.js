function getLocation(){
    console.log('🚀 ~ navigator:', navigator);
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        document.getElementById("output").innerHTML = "Geolocation not supported"
    }
}
function showPosition(position){
    document.getElementById("output").innerHTML =
        "Latitude:" + position.coords.latitude +
        "<br> Longitude:" + position.coords.longitude;
}