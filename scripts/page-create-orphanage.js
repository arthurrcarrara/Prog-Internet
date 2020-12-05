//Create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

//Create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;



    //remove icon

    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

});

//Add photo field

function addPhotoField() {
    
    //Get photos container #images
    const container = document.querySelector('#images');

    //Get container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //Clone last photo added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //Verify if field it's empty, if not, it wont add
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    // //Clean field before adding to image container
    input.value = ""

    //Add clone to images container
    container.appendChild(newFieldContainer)
};

function deleteField(event) {
   const span = event.currentTarget;

   const fieldsContainer = document.querySelectorAll('.new-upload');


   if (fieldsContainer.length < 2) {
    //Clean field value
    span.parentNode.children[0].value =""
    return
    }

    //Delete field
    span.parentNode.remove();

};

//Change of selection yes or no

function toggleSelect(event) {

    //Remove .active from buttons
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

     //input class .active
     const button = event.currentTarget
     button.classList.add('active')

    //Update input hidden with selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    //Verify Yes or No
    input.value = button.dataset.value

}

// function validate(event) {

//     const needsLatAndLng = true;
//     if(needsLatAndLng)
//     event.preventDefault()
//     alert('Selecione um ponto no mapa')
// }