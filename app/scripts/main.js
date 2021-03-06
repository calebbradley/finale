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

//  Mason Got me rolling with this...
//  $.getJSON('http://api.themoviedb.org/3/discover/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&append_to_response=releases,trailers&year=1985&callback=?').then(function(data){
//   console.log(data)
//   })

//api_key = '50e4716d262aabda1d6b863d0e6f0d0c';

$(document).ready(function(){

   $('#see').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').html('WELCOME! Begin by entering a Movie Title in Search Bar i.e. fast and furious');
      }
   });

   var getPoster = function(){

        var film = $('#see').val();
         if(film == ''){
            
            $('#poster').html("<h2 class='loading'>Please enter a Valid Movie Title so I know which Poster to fetch!</h2>");
         
         } else {

            //$('#poster').html("<h2 class='loading'>Searching through our infinite database of Posters, one moment please!</h2>");

            //$.getJSON('http://api.themoviedb.org/3/search/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&language=en&query=' + film + "&callback=?", function(json)

            //{
            //    $('#poster').html('<h2 class="loading">Here you go!</h2> <img id="thePoster" src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' + json.results[2].poster_path + '" /> <button id="add">ADD</button>');
            //})         
                ////////// ADDING 'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' TO THE 'src=' ON LINE #90 TOOK FOREVER TO FIGURE OUT!!!! /////////////// 

            $.getJSON('http://api.themoviedb.org/3/search/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&language=en&query=' + film + "&callback=?", function(json)

            {
                $('#poster').html('<h2 class="loading">Here you go!</h2> <img id="thePoster" src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' + json.results[0].poster_path + '" /> <button id="add">ADD</button>');
            })

          }

        return false;
   }

//This causes the images to appear in same div but first image 'flashes in' and second image 'flashes over it an instant later'
//not what I wanted and didn't have the time to play with more

//var index;
//var a = ["0", "1", "2"];
//for (index = 0; index < a.length; ++index) {
//  console.log(a[index]);
//}

   $('#search').click(getPoster);
   $('#poster').keyup(function(event){
       if(event.keyCode === 13){
           getPoster();
       }
   });

});

$(document).ready(function(){

   $('#see').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').html('WELCOME! Begin by entering a Movie Title in Search Bar i.e. fast and furious');
      }
   });

   var getPoster = function(){

        var film = $('#see').val();
         if(film == ''){
            
            $('#poster').html("<h2 class='loading'>Please enter a Valid Movie Title so I know which Poster to fetch!</h2>");
         
         } else {

            //$('#poster').html("<h2 class='loading'>Searching through our infinite database of Posters, one moment please!</h2>");

            //$.getJSON('http://api.themoviedb.org/3/search/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&language=en&query=' + film + "&callback=?", function(json)

            //{
            //    $('#poster').html('<h2 class="loading">Here you go!</h2> <img id="thePoster" src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' + json.results[2].poster_path + '" /> <button id="add">ADD</button>');
            //})         
                ////////// ADDING 'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' TO THE 'src=' ON LINE #90 TOOK FOREVER TO FIGURE OUT!!!! /////////////// 

            $.getJSON('http://api.themoviedb.org/3/search/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&language=en&query=' + film + "&callback=?", function(json)

            {
                $('#post').html('<h2 class="loading"></h2> <img id="thePoster" src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' + json.results[1].poster_path + '" /> <button id="add">ADD</button>');
            })

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#post').keyup(function(event){
       if(event.keyCode === 13){
           getPoster();
       }
   });

});


$(document).ready(function(){

   $('#see').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').html('WELCOME! Begin by entering a Movie Title in Search Bar i.e. fast and furious');
      }
   });

   var getPoster = function(){

        var film = $('#see').val();
         if(film == ''){
            
            $('#poster').html("<h2 class='loading'>Please enter a Valid Movie Title so I know which Poster to fetch!</h2>");
         
         } else {

            //$('#poster').html("<h2 class='loading'>Searching through our infinite database of Posters, one moment please!</h2>");

            //$.getJSON('http://api.themoviedb.org/3/search/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&language=en&query=' + film + "&callback=?", function(json)

            //{
            //    $('#poster').html('<h2 class="loading">Here you go!</h2> <img id="thePoster" src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' + json.results[2].poster_path + '" /> <button id="add">ADD</button>');
            //})         
                ////////// ADDING 'http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' TO THE 'src=' ON LINE #90 TOOK FOREVER TO FIGURE OUT!!!! /////////////// 

            $.getJSON('http://api.themoviedb.org/3/search/movie?api_key=50e4716d262aabda1d6b863d0e6f0d0c&language=en&query=' + film + "&callback=?", function(json)

            {
                $('#pos').html('<h2 class="loading"></h2> <img id="thePoster" src=http://d3gtl9l2a4fn1j.cloudfront.net/t/p/w500' + json.results[2].poster_path + '" /> <button id="add">ADD</button>');
            })

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#pos').keyup(function(event){
       if(event.keyCode === 13){
           getPoster();
       }
   });

});

//AddView = Backbone.View.extend({


  //      events: {
  //              "click .add": "add"

  //      },

  //      initialize: function() {
  //              $('.fav').append(this.el)
  //              this.render()
  //      },

   //     render: function() {
   //             this.$('#poster').append('thePoster')
             
  //      },

  //      add: function() {
  //              var image = $('.poster').val()
  //              var data = {
  //                      image: poster
  //              }
  //  }
  //  })