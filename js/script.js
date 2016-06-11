window.onload = function () {
    var link = document.querySelector(".map__button");
    var map = document.querySelector(".map");

    ymaps.ready(function showMap() {
        var myMap = new ymaps.Map(map, {
            center: [59.938631, 30.323055],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
         myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
             hintContent: 'Наш магазин',
         }, {
             iconLayout: 'default#image',
             iconImageHref: 'img/pin.png',
             iconImageSize: [180, 120],
             iconImageOffset: [-50, -120],
         });

        myMap.geoObjects.add(myPlacemark);
    });

    if (link) {
        var popup = document.querySelector(".feedback");
        var popupOverlay = document.querySelector(".feedback__overlay");
        var close = popup.querySelector(".feedback__close");
        link.onclick = function (e) {
            e.preventDefault();
            popup.classList.add("feedback-show");
            popupOverlay.classList.add("overlay-show");
        };
        close.onclick = function (e) {
            e.preventDefault();
            popup.classList.remove("feedback-show");
            popupOverlay.classList.remove("overlay-show");
        };
    };
}