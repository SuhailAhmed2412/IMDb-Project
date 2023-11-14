//Updating Movie Title, Release Year, Runtime, Rating
$('#title-rating').ready(function() {
  $.get('https://imdb-api.projects.thetuhin.com/title/tt4832640',function(response,status,xhr) {
    if(xhr.status == 200) {
      $('#movie-title').html(response.title);
      $('#release').html(response.releaseDetailed.year);
      $('#runtime').html(response.runtime);
      $('#rating-number').html(response.rating.star);
      $('views').html(response.rating.count);
    } else if (xhr.status == 'error') {
      alert('Error: ' + xhr.status);
    }
  })
})

//Updating the Movie Poster
$('#pic-videos').ready(function() {
  $.get('https://imdb-api.projects.thetuhin.com/title/tt4832640',function(response,status,xhr) {
    if(xhr.status == 200) {
     $('#poster').attr('src',response.image);
    } else if (xhr.status == 'error') {
      alert('Error: ' + xhr.status);
    }
  })
})

// Updating the Genre
$('#genre').ready(function(){
  $.get('https://imdb-api.projects.thetuhin.com/title/tt4832640',function(response,status,xhr) {
    if(xhr.status == 200) {
      var genre = response.genre;
        for (var i=0 ;i<genre.length;i++){
          $('#genre').append("<li>"+genre[i]+"</li>");
        }
      } else if (status == 'error') {
        alert('Error: '+xhr.status);
      }
  })
})

// Updating the Director, Writer and Stars
$('#movie-details').ready(function() {
  $.get('https://imdb-api.projects.thetuhin.com/title/tt4832640',function(response,status,xhr) {
    if(xhr.status == 200) {
      var star = response.actors;
      $('#movie-plot').html(response.plot);
      $('#director').html(response.directors);
      $('#writer').html(response.top_credits[1].value);
      for (var i=0; i<star.length; i++) {
        $('#stars').append("<li>"+star[i]+"</li>");
      }
    }
  })
})

// Updating Wins & Nominations
$('#videos-and-photos').ready(function() {
  $.get('https://imdb-api.projects.thetuhin.com/title/tt4832640',function(response,status,xhr) {
    if(xhr.status == 200) {
      var images = response.images;
      $('#wins').html(response.award.wins);
      $('#nominations').html(response.award.nominations);
    }
  })
})