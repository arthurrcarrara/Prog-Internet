const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//Create map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 15);

//Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize: [58, 68],
    // iconAnchor: [29, 68],
    // popupAnchor: [170, 2]
});


//Create and add marker
L
.marker([-29.9293999,-51.0390298], { icon })
.addTo(map)

//Image gallery

function selectImage(event) {
    const button = event.currentTarget;

    //Remover todas as classes actives
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //Atualizar o container de imagem
    imageContainer.src = image.src

    //Adicionar a classe .active para este botao
    button.classList.add("active")
}
