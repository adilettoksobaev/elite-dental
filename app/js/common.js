$(function () {
  $(".main-carousel").slick({
    dots: false,
    infinite: false,
  });

  $(".office-carousel").slick({
    arrows: false,
    dots: true,
    infinite: true,
  });
});

/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initMap() {
  const myLatlng = { lat: 34.16393025, lng: -118.2803277247166 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatlng,
  });
  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    title: "ELITE DENTAL GROUP, 1249 W. Glenoaks Blvd Glendale, CA 91201",
    icon: "../img/marker.png",
  });
}

window.initMap = initMap;
