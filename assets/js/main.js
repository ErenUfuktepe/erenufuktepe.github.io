/**
* Template Name: Folio - v2.0.1
* Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    var strings = $('.typed-items').text();
    strings = $('.typed-items').data('typed-person') + ',' + strings;
    strings = strings.split(',');

    typed.typed({
      strings: strings,
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 4
      }
    }
  });

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).on('load', function() {
  var portfolioIsotope = $('.skills-container').isotope({
    itemSelector: '.skills-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#skills-flters li').on('click', function() {
    $("#skills-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });
});

function displaySkills(){
  const skills = document.getElementsByClassName("skills-thumbnail");
  Array.from(skills).forEach(element =>
    {
      if(element.className == "skills-thumbnail "+ $(event.target).get(0).id){
        element.style.display = 'block'
      }else{
        element.style.display = 'none'
      }
    } 
  );
}

function songStory(){
  const stories = [["Eric Clapton - Tears In Heaven", "https://www.youtube.com/watch?v=JxPj3GAYYZ0","Eric Clapton wrote the song Tears in Heaven when his 4 year-old son Connor fell from the window of his house on the 53rd floor."],
                   ["Evanescence - Hello","https://www.youtube.com/watch?v=Ih61MJ72v1Y","This song was written by a painful incident that happened to lead singer, Amy Lee. Her mum left her 3-year-old sister alone in the tub and, her sister died due to getting drowned in the bathtub. When this happens, Amy was 6. This track was never sung at any concert."] 
                   ]; 
  let storyHTML = '';
  let count = 1 ;
  stories.forEach(element => {
    let story = '<div class="col-lg-12"><a href="'+element[1]+'" style="font-weight: bolder; font-size: large;" target="_blank">'+count +'. '+element[0]+'</a><p>'+element[2]+'</p></div>';
    storyHTML = storyHTML + story;
    document.getElementById('song-stories').innerHTML = storyHTML;
    count = count + 1;
  })

}

$("#turkish-relax").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/0S1exqFsHgqnbgyfGfoP7Z" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#classical-music").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/2TFglh7fqXwfiyzXGx3w3X" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#gas").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/4kaIlvqzxRQNuEDrbyeZR3" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#rap").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/0JrsYC5Zwh7lZF9KApiBEg" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#rock").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/0CgebalKqSAaTtr2GKqWY8" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#reggae").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/3subHOAqs513422FW2heaI" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#electronic").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/5YnPrwKgaOQAfsUhQ0CJho" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#oldies-but-goldies").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/3d2p0JemovF1KyBFj2i4fm" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#never-gets-old").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/42DVcev5IKd6zdEFNSejrD" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#mix").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/00eRhbnOQbzZOAPTc0Q1uA" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#relax").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/0yvKPm6mrruYICgeCbOXrV" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});

$(window).on('load', function() {
  songStory();
});


