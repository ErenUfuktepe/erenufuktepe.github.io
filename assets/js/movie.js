const test = require('envify');

const movies = [['The Godfather',1972],
                ['Star Wars: Episode III - Revenge of the Sith',2005],
                ['The Lord of the Rings: The Return of the King',2003],
                ['Avengers: Endgame',2019],
                ['The Raid: Redemption',2011],
                ['Interstellar',2014],
                ['Django Unchained',2012],
                ['The Matrix',1999],
                ['The Dark Knight',2008],
                ['Inception',2010],];

const series = [['Spartacus',2010],
                ['Breaking Bad',2008],
                ['Daredevil',2015],
                ['Punisher',2017],
                ['Game of Thrones',2011],
                ['Peaky Blinders',2013],
                ['The Umbrella Academy',2019],
                ['Dexter',2006],  
                ['Friends',1994],
                ['How I Met Your Mother',2005],];

const apikey = process.env.API_KEY;

function putTopTenMovies(){
  let counter = 1;
  let visitedHTML = ''

  movies.forEach(element => 
    {
      const url = encodeURI('https://www.omdbapi.com/?t='+element[0]+'&y='+element[1]+'&apikey='+apikey);
      $.getJSON(url).then(function(response){
        var movieHTML = '<div class="row"> \
                            <div class="col-sm-4">\
                              <div class="journal-info mb-30"> \
                                <img src='+ response.Poster+'> \
                                <div class="journal-txt"> \
                                  <br>\
                                  <b>&#9733; '+ response.imdbRating+' IMDb Score</b>\
                                </div> \
                              </div>\
                            </div> \
                            <div class="col-sm-8" style="padding-left:30px;">\
                              <h4><b style="color:darkslategray;">'+counter+'.  ' +response.Title+'  ('+response.Year+')</b></h4>\
                              <p>'+response.Plot+'</p>\
                              <p><b>Genre  : </b>'+ response.Genre +'</p>'+
                              '<p><b>Actors  : </b>'+ response.Actors +'</p>\
                              <p><b>Director(s)  : </b>'+ response.Director +'</p>\
                            </div> \
                            </div>';
        visitedHTML = visitedHTML + movieHTML;
        document.getElementById('top-ten-movies').innerHTML= visitedHTML;
        counter += 1 ;
      })
    });    
}


function putTopTenSeries(){
  let counter = 1;
  var visitedHTML = ''

  series.forEach(element => 
    {
      const url = encodeURI('https://www.omdbapi.com/?t='+element[0]+'&y='+element[1]+'&apikey='+apikey);
      $.getJSON(url).then(function(response){
        var movieHTML = '<div class="row"> \
                            <div class="col-sm-4">\
                              <div class="journal-info mb-30"> \
                                <img src='+ response.Poster+'> \
                                <div class="journal-txt"> \
                                  <br>\
                                  <b>&#9733; '+ response.imdbRating+' IMDb Score</b>\
                                </div> \
                              </div>\
                            </div> \
                            <div class="col-sm-8" style="padding-left:30px;">\
                              <h4><b style="color:darkslategray;">'+counter+'.  ' +response.Title+'  ('+response.Year+')</b></h4>\
                              <p>'+response.Plot+'</p>\
                              <p><b>Genre  : </b>'+ response.Genre +'</p>'+
                              '<p><b>Actors  : </b>'+ response.Actors +'</p>\
                              <p><b>Writer(s)  : </b>'+ response.Writer +'</p>\
                            </div> \
                            </div>';
        visitedHTML = visitedHTML + movieHTML;
        document.getElementById('top-ten-series').innerHTML= visitedHTML;
        counter += 1 ;
      })
    });  
}

$("#series-button").click(function() {
  document.getElementById('top-ten-movies').innerHTML= '';
  putTopTenSeries();
  let titleHTML = '<h4 style="text-align: center;"> \
                    <b style="font-size: xx-large;">Top 10 Series</b>\
                  </h4>'
  document.getElementById('top-ten-title').innerHTML= titleHTML;
});

$("#movies-button").click(function() {
  document.getElementById('top-ten-series').innerHTML= '';
  let titleHTML = '<h4 style="text-align: center;"> \
                    <b style="font-size: xx-large;">Top 10 Movies</b>\
                  </h4>'
  putTopTenMovies();
  document.getElementById('top-ten-title').innerHTML= titleHTML;
});