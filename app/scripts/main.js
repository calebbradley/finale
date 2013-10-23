require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition'
    },
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery']
        },
        bootstrapCollapse: {
            deps: ['jquery']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapPopover: {
            deps: ['jquery']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery']
        },
        bootstrapTooltip: {
            deps: ['jquery']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
//////////////////////////////////////////////////////////Starts Here///////////////////////

api_key = '50e4716d262aabda1d6b863d0e6f0d0c';

$(document).ready(function(){

   $('#movie').focus(function(){
      var full = $("#trailers").has("").length ? true : false;
      if(full == false){
         $('#trailers').empty();
      }
   });

   var getTrailer = function(){

        var film = $('#movie').val();

         if(film == ''){

            $('#trailers').html("<h2 class='loading'>Please enter a Movie so I know which Trailer to find!</h2>");

         } else {

            $('#trailers').html("<h2 class='loading'>Searching through our infinite database of Trailers, one moment please!</h2>");

            $.getJSON("http://api.themoviedb.org/3/movie/550?api_key=50e4716d262aabda1d6b863d0e6f0d0c&append_to_response=trailers" + film + "?callback=?", function(json) {
               if (json != "Not found"){
                     $('#trailers').html('<h2 class="loading">Found It!</h2><id=" " src=' + json[0].trailers[0].youtube.source + ' />');
                  } else {
                     $.getJSON("http://api.themoviedb.org/3/movie/550?api_key=50e4716d262aabda1d6b863d0e6f0d0c&append_to_response=trailers", function(json) {
                        console.log(json);
                        });
                  }
             });

          }

        return false;
   }

   $('#search').click(getTrailer);
   $('#movie').keyup(function(event){
       if(event.keyCode == 13){
           getTrailer();
       }
   });

});

