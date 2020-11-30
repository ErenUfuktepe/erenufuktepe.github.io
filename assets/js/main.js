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
  if(document.getElementById('song-stories') == null){
    //Do nothing
  }else{
    const stories = [["Eric Clapton - Tears In Heaven", "https://www.youtube.com/watch?v=JxPj3GAYYZ0","“Tears in Heaven” is one of the Clapton’s most heartbreaking songs, based on the tragic death of his Conor, who was only four when he died after accidentally falling from a 54 story apartment. The track was written during Clapton’s 6-month hiatus from music after this devastating event and has three verses and a bridge. The first verse is Clapton singing to his son about whether if he would recognise or know him if he saw him in heaven, and whether it would be the same if he was in heaven too – but he knows that he has to “be strong and carry on”, because he can’t “stay here in heaven”, meaning he can’t spend his whole life mourning over the loss of his son or just focusing on that, he has to move on. The second verse is Clapton asking his son if he would still “hold his hand” and “help him stand” if he saw him heaven, maybe alluding to Clapton seeking forgiveness from his son. Again, Clapton reiterates that he’ll get through night and day as he cannot “stay here in heaven”. The bridge focuses on the concept of time, and how it can break your heart and have you begging for time to progress quicker for you to heal through the pain. He knows that “beyond the door there’s peace I’m sure”, meaning he is aware that after this painful time (“the door”) he’ll be fine. The song ends with Clapton repeating the first verse."],
                     ["Evanescence - Hello","https://www.youtube.com/watch?v=Ih61MJ72v1Y","This song is about death coming from a child's point of view. When Amy Lee was 6 years old, her sister Bonnie, who was 3, died. Amy was at school when she found out, hence the line, 'Playground school bell rings again, rain clouds come to play again.' What she's saying in the song is what she felt when she found out, and since she was so young, she didn't fully understand the concept of death."] 
                    ,["The Cranberries - Zombie","https://www.youtube.com/watch?v=6Ejga4kJUts","This was inspired by the IRA bombing in Warrington, Cheshire, England on March 20, 1993. Two children, Jonathan Ball and Tim Parry, were killed. The IRA (Irish Republican Army) is a militant group that was determined to remove British troops from Northern Ireland."]
                    ,["Soul Asylum - Runaway Train","https://www.youtube.com/watch?v=NRtvqT_wMeY","The music video for 'Runaway Train' featured photographs and names of missing children in the style of a public service announcement. At the end of the video, lead singer Dave Pirner appeared and said, 'If you've seen one of these kids, or you are one of them, please call this number' before a missing children telephone helpline number appeared. The video was edited for use outside the US to include photos and names of missing children from wherever the video was to be shown. The video drew awareness to the problem and was instrumental in reuniting several children with their families."]
                    ,["The Eagles - Hotel California","https://www.youtube.com/watch?v=5EHyht_Kx5I","Written by Don Felder, Glenn Frey and Don Henley, this song is about materialism and excess. California is used as the setting, but it could relate to anywhere in America. Don Henley in the London Daily Mail November 9, 2007 said: 'Some of the wilder interpretations of that song have been amazing. It was really about the excesses of American culture and certain girls we knew. But it was also about the uneasy balance between art and commerce.' On November 25, 2007 Henley appeared on the TV news show 60 Minutes, where he was told, 'everyone wants to know what this song means.' Henley replied: 'I know, it's so boring. It's a song about the dark underbelly of the American Dream, and about excess in America which was something we knew about.' He offered yet another interpretation in the 2013 History of the Eagles documentary: 'It's a song about a journey from innocence to experience.'"]
                    ,["Ed Sheeran - The A Team","https://www.youtube.com/watch?v=UAWcs5H-qgQ","The song is a true story and was written by Sheeran after meeting a girl called Angel whilst volunteering at a Crisis homeless shelter. The song became the highest selling debut single on the UK singles charts in the first half of 2011. He told The Sun July 15, 2011: 'I wrote that song last year in a student flat in Guildford. I recorded it for less than £200 and made the video for under £20. In two weeks we'd sold 200,000 copies. I've made a song about a homeless prostitute who has been able to get on A-list radio.'"]
                    ,["Foster The People - Pumped up Kicks","https://www.youtube.com/watch?v=SDTZ7iX4vTQ","Mark Foster explained the song's meaning to Spinner UK: ''Pumped Up Kicks' is about a kid that basically is losing his mind and is plotting revenge. He's an outcast. I feel like the youth in our culture are becoming more and more isolated. It's kind of an epidemic. Instead of writing about victims and some tragedy, I wanted to get into the killer's mind, like Truman Capote did in In Cold Blood. I love to write about characters. That's my style. I really like to get inside the heads of other people and try to walk in their shoes.'Foster says he considered writing the song from the perspective of the victim, but felt that would be a cop out. He also points out that there is no actual violence in the song, as the threats are all the kid's internal monologue."]
                    ,["Green Day - Wake Me Up When September Ends","https://www.youtube.com/watch?v=NU9JoFKlaZ0","Green Day lead singer Billie Joe Armstrong wrote this song about his father, who died of cancer on September 1, 1982. At his father's funeral, Billie cried, ran home and locked himself in his room. When his mother got home and knocked on the door to Billie's room, Billie simply said, 'Wake me up when September ends,' hence the title."]
                    ,["Paul McCartney - Blackbird ","https://www.youtube.com/watch?v=5mJYYVM-nj4","Paul McCartney wrote this about the civil rights struggle for African Americans after reading about race riots in the US. He penned it in his kitchen in Scotland not long after an incident in Little Rock when the federal courts forced the racial desegregation of the Arkansas capital's school system.'I was sitting around with my acoustic guitar and I'd heard about the civil rights troubles that were happening in the '60s in Alabama, Mississippi, Little Rock in particular,' he told GQ. 'I just thought it would be really good if I could write something that if it ever reached any of the people going through those problems, it might give them a little bit of hope. So, I wrote 'Blackbird.''"]
                    ,["The Police - Every Breath You Take","https://www.youtube.com/watch?v=OMOGaugKpzs","This is one of the most misinterpreted songs ever. It is about an obsessive stalker, but it sounds like a love song. Some people even used it as their wedding song. The Police frontman Sting wrote it after separating from his first wife, Frances Tomelty."]
                    ,["The Beatles - Hey Jude","https://www.youtube.com/watch?v=A_MjCqQoLLA","Paul McCartney wrote this as 'Hey Jules,' a song meant to comfort John Lennon's 5-year-old son Julian as his parents were getting a divorce. The change to 'Jude' was inspired by the character 'Jud' in the musical Oklahoma!"]               
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
}

$("#turkish-relax").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/0S1exqFsHgqnbgyfGfoP7Z" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#turkish-rock").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/1lYrwuXJbBRDZKculnSNwt" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  document.getElementById('play-list').innerHTML= playList;
});
$("#turkish-rap").click(function(event) {
  var playList = '<iframe src="https://open.spotify.com/embed/playlist/3wgH7nhWF2r4HQG4a1YQOn" width="300" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
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

function getRespomse()
{
    let selection = event.target.innerHTML;
    let title = '<h4 style="text-align: center;"><b style="font-size: xx-large;">'+selection+'</b></h4>';
    document.getElementById('top-ten-title').innerHTML = title;
    $(document).ready(function(){
        $.getJSON("assets/js/omdbResponse.json", function(data){
            if(selection == "Movies"){
                let movies = data.movies;
                let rows = ''
                let counter = 1;
                movies.forEach(element => {
                    rows = rows + '<div class="row"><div class="col-sm-4"><div class="journal-info mb-30"><img src="'+element.Poster+'"><div class="journal-txt"><br><b>★ '+element.imdbRating+' IMDb Score</b></div></div></div><div class="col-sm-8" style="padding-left:30px;"><h4><b style="color:darkslategray;">'+counter+'.  '+element.Title+'</b></h4><p>'+element.Plot+'</p><p><b>Genre  : </b>'+element.Genre+'</p><p><b>Actors  : </b>'+element.Actors+'</p><p><b>Director(s)  : </b>'+element.Director+'</p></div></div> \n'
                    counter = counter + 1; 
                });
                document.getElementById('top-ten-result').innerHTML = rows;
            }
            if(selection == "Series"){
                let movies = data.series;
                let rows = ''
                let counter = 1;
                movies.forEach(element => {
                    rows = rows + '<div class="row"><div class="col-sm-4"><div class="journal-info mb-30"><img src="'+element.Poster+'"><div class="journal-txt"><br><b>★ '+element.imdbRating+' IMDb Score</b></div></div></div><div class="col-sm-8" style="padding-left:30px;"><h4><b style="color:darkslategray;">'+counter+'.  '+element.Title+'</b></h4><p>'+element.Plot+'</p><p><b>Genre  : </b>'+element.Genre+'</p><p><b>Actors  : </b>'+element.Actors+'</p><p><b>Director(s)  : </b>'+element.Director+'</p></div></div> \n'
                    counter = counter + 1; 
                });
                document.getElementById('top-ten-result').innerHTML = rows;
            }
            if(selection == "Recommendations"){
                let movies = data.recommendations;
                let rows = ''
                let counter = 1;
                movies.forEach(element => {
                    rows = rows + '<div class="row"><div class="col-sm-4"><div class="journal-info mb-30"><img src="'+element.Poster+'"><div class="journal-txt"><br><b>★ '+element.imdbRating+' IMDb Score</b></div></div></div><div class="col-sm-8" style="padding-left:30px;"><h4><b style="color:darkslategray;">'+counter+'.  '+element.Title+'</b></h4><p>'+element.Plot+'</p><p><b>Genre  : </b>'+element.Genre+'</p><p><b>Actors  : </b>'+element.Actors+'</p><p><b>Director(s)  : </b>'+element.Director+'</p></div></div> \n'
                    counter = counter + 1; 
                });
                document.getElementById('top-ten-result').innerHTML = rows;
            }
        }).fail(function(){
            console.log("An error has occurred.");
        });
    });
}
