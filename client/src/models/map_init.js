var MapInit = function () {
    
    var coords = {lat: 53.5, lng: -3}; 
    map = new google.maps.Map(document.getElementById('map'), {
        center: coords, 
        zoom: 5,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        disableDoubleClickZoom: true,
        scrollwheel: false,

        styles:
              [{"featureType": "all",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "saturation": "-100"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "saturation": 36
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 40
                  },
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#4d6059"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#7f8d89"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#2b3638"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#2b3638"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#24282b"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#24282b"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          }]
    })


    var CenterControl = function(controlDiv, map) {

      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = '#fff';
      controlUI.style.border = '2px solid #fff';
      controlUI.style.borderRadius = '3px';
      controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
      controlUI.style.cursor = 'pointer';
      controlUI.style.marginBottom = '22px';
      controlUI.style.textAlign = 'center';
      controlUI.title = 'Click to recenter the map';
      controlDiv.appendChild(controlUI);

      var controlText = document.createElement('div');
      controlText.style.color = 'rgb(25,25,25)';
      controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
      controlText.style.fontSize = '16px';
      controlText.style.lineHeight = '38px';
      controlText.style.paddingLeft = '5px';
      controlText.style.paddingRight = '5px';
      controlText.innerHTML = 'Center Map';
      controlUI.appendChild(controlText);

      controlUI.addEventListener('click', function() {
          map.setCenter(coords);
          map.setZoom(5)
        });
    }

    var centerControlDiv = document.createElement('div')
    var centerControl = new CenterControl(centerControlDiv, map)

    centerControlDiv.index = 1
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)  
}

module.exports = MapInit