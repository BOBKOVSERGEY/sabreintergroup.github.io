// enable strict mode
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    let plugins = {
        googleMap: $('#google-map'),
        customWaypoints: $('[data-custom-scroll-to]'),
    };
    if (plugins.googleMap.length) {
        plugins.googleMap.googleMap({
            styles: [/*{
        "featureType": "landscape",
        "stylers": [{"hue": "#FFBB00"}, {"saturation": 43.400000000000006}, {"lightness": 37.599999999999994}, {"gamma": 1}]
      }, {
        "featureType": "road.highway",
        "stylers": [{"hue": "#FFC200"}, {"saturation": -61.8}, {"lightness": 45.599999999999994}, {"gamma": 1}]
      }, {
        "featureType": "road.arterial",
        "stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 51.19999999999999}, {"gamma": 1}]
      }, {
        "featureType": "road.local",
        "stylers": [{"hue": "#FF0300"}, {"saturation": -100}, {"lightness": 52}, {"gamma": 1}]
      }, {
        "featureType": "water",
        "stylers": [{"hue": "#0078FF"}, {"saturation": -13.200000000000003}, {"lightness": 2.4000000000000057}, {"gamma": 1}]
      }, {
        "featureType": "poi",
        "stylers": [{"hue": "#00FF6A"}, {"saturation": -1.0989010989011234}, {"lightness": 11.200000000000017}, {"gamma": 1}]
      }*/
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
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
                            "color": "#fefefe"
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
                            "color": "#fefefe"
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
                            "color": "#f5f5f5"
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
                            "color": "#d5d5d5"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#d5d5d5"
                        },
                        {
                            "saturation": "-37"
                        },
                        {
                            "lightness": "75"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7574c0"
                        },
                        {
                            "saturation": "-2"
                        },
                        {
                            "lightness": "53"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7574c0"
                        },
                        {
                            "lightness": "69"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#7574c0"
                        },
                        {
                            "lightness": "25"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
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
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "lightness": "38"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ]
        });
    }
    /**
     * Custom Waypoints
     */
    if (plugins.customWaypoints.length) {
        var i;
        for (i = 0; i < plugins.customWaypoints.length; i++) {
            var $this = $(plugins.customWaypoints[i]);
            
            $this.on('click', function (e) {
                e.preventDefault();
                $("body, html").stop().animate({
                    scrollTop: $("#" + $(this).attr('data-custom-scroll-to')).offset().top
                }, 1000, function () {
                    $(window).trigger("resize");
                });
                
            });
        }
    }
    /**/
    
    $('.nav-link').click(function (e) {
        var tab = $(this);
        if(tab.parent('li').hasClass('active')){
            window.setTimeout(function(){
                $(".tab-pane").removeClass('active');
                tab.parent('li').removeClass('active');
            },1);
        }
    });
    
    //Added a class for the tab control, but there's a better name
    $('.solutions-item__hide').on('click', function (e) {
      
        $('.nav-link').removeClass('active');
        $('.tab-pane').removeClass('active');
    })
    
});
