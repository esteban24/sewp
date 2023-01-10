(function($) {

'use strict';		
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		// Create an array of styles
		//=======================================================================================
  		var styles = [
    		{
      			stylers: [
        			{ hue: "#f98d8a" },
        			{ saturation: -50 }
      			]
    		}
  		];
		
		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});
			
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 16,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(40.402690608620084, -3.8767696405611973),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas-3'), mapOptions);
		
		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(35.441938, -97.432494),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.407716616752026, -3.87548991526033),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle"></div><div class="main-icon-text">El Antiguo</br>Convento</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.40477884940656, -3.87411302698928),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="gift-marker" class="de-icon circle small-size" style="background-color:#fc9e9e;"><i class="de-icon-cab"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.405357860962404, -3.8776199179411526),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="bus-marker" class="de-icon circle small-size" style="background-color:#e9c24c;"><i class="de-icon-bus"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.40588794755436, -3.876098233814005),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="food-marker" class="de-icon circle small-size" style="background-color:#bfd730;"><i class="de-icon-money"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});
		
		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(40.40201711017588, -3.8793090250192215),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="train-marker" class="de-icon circle small-size" style="background-color:#8fcbda;"><i class="de-icon-subway"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});

		var marker6 = new MarkerWithLabel({
			position: new google.maps.LatLng(40.40758797353754, -3.876560093776134),
			draggable: false,
			raiseOnDrag: false,
			icon: ' ',
			map: map, 
		  	labelContent: '<div id="food-marker-2" class="de-icon circle small-size" style="background-color:#bfd730;"><i class="de-icon-money"></i></div>',
			labelAnchor: new google.maps.Point(27, 27),
			labelClass: "labels" // the CSS class for the label
	  	});

		var marker7 = new MarkerWithLabel({
			position: new google.maps.LatLng(40.40761265164744, -3.8772826180742492),
			draggable: false,
			raiseOnDrag: false,
			icon: ' ',
			map: map, 
			labelContent: '<div id="food-marker-2" class="de-icon circle small-size" style="background-color:#235EC8;"><i class="de-icon-cab"></i></div>',
			labelAnchor: new google.maps.Point(27, 27),
			labelClass: "labels" // the CSS class for the label
	  	});
			
		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Ceremonia</h6>'+
			'<div class="info-window-desc">Lugar donde se celebrará la boda.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/Hjtftu8vxbUDUUtT8" target=”_blank” class="grey-link with-underline">C. las Monjas, s/n, 28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker1_infowindow = new google.maps.InfoWindow({
      		content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//OPEN INFO WINDOWS ON LOAD
  		marker1_infowindow.open(map,marker1);
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function() {
			marker1_infowindow.open(map,marker1);	
  		});
		
		
		//INFO WINDOWS 2
		//=======================================================================================
		var contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Parking gratuito</h6>'+
			'<div class="info-window-desc">Parking Palacio De Boadilla.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/4zFzxBND4tagEy3a6" target=”_blank” class="grey-link with-underline">28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker2_infowindow = new google.maps.InfoWindow({
      		content: contentString2,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker2, 'click', function() {
			marker2_infowindow.open(map,marker2);	
  		});
		
		
		//INFO WINDOWS 3
		//=======================================================================================
		var contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Parada Bus</h6>'+
			'<div class="info-window-desc">Ctra.majadahonda-av.adolfo Suárez.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/NM24gAGJdC7FK5mi9" target=”_blank” class="grey-link with-underline">28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker3_infowindow = new google.maps.InfoWindow({
      		content: contentString3,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker3, 'click', function() {
			marker3_infowindow.open(map,marker3);	
  		});	
		
		
		//INFO WINDOWS 4
		//=======================================================================================
		var contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Cajero</h6>'+
			'<div class="info-window-desc">Banco Ibercaja.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/CbTGwj5gj3FKHz4V6" target=”_blank” class="grey-link with-underline">Av. de Adolfo Suárez, 17, 28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker4_infowindow = new google.maps.InfoWindow({
      		content: contentString4,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker4, 'click', function() {
			marker4_infowindow.open(map,marker4);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker4_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		
		//INFO WINDOWS 5
		//=======================================================================================
		var contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Parada Metro Ligero</h6>'+
			'<div class="info-window-desc">Ferial De Boadilla.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/zzFgJDGkCj3SguKDA" target=”_blank” class="grey-link with-underline">28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker5_infowindow = new google.maps.InfoWindow({
      		content: contentString5,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker5, 'click', function() {
			marker5_infowindow.open(map,marker5);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker5_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});

		//INFO WINDOWS 6
		//=======================================================================================
		var contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Cajero</h6>'+
			'<div class="info-window-desc">Banco BBVA.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/7Bo3e65LvzoQsiPGA" target=”_blank” class="grey-link with-underline">C. de los Mártires, 13, 28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker6_infowindow = new google.maps.InfoWindow({
      		content: contentString6,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker6, 'click', function() {
			marker6_infowindow.open(map,marker6);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker6_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});

		//INFO WINDOWS 7
		//=======================================================================================
		var contentString7 = ''+
		'<div class="info-window-wrapper">'+
			'<h6>Aparcamiento 24h</h6>'+
			'<div class="info-window-desc">Aparcamiento Plaza de la Concordia. Gratuito de 10:00 a 20:00 de Lunes a Domingo.</div>'+
			'<div class="info-window-link"><a href="https://goo.gl/maps/Bk8rvedJz7Nqdpg96" target=”_blank” class="grey-link with-underline">Cam. de San Sebastián, 7, 28660 Boadilla del Monte, Madrid</a></div>'+
      	'</div>';
		
		var marker7_infowindow = new google.maps.InfoWindow({
      		content: contentString7,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0,-10)
  		});
		
		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker7, 'click', function() {
			marker7_infowindow.open(map,marker7);	
  		});
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker7_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
})(jQuery);