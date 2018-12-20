$('#recipeCarousel').carousel({
  interval: 0
})
$('#recipeCarousel2').carousel({
  interval: 0
})
$('#recipeCarousel3').carousel({
  interval: 0
})
$('#recipeCarousel4').carousel({
  interval: 0
})
$('#recipeCarousel5').carousel({
  interval: 0
})
$('#recipeCarousel6').carousel({
  interval: 0
})
$('#recipeCarousel7').carousel({
  interval: 0
})
$('#recipeCarousel8').carousel({
  interval: 0
})
$('#recipeCarousel9').carousel({
  interval: 0
})
$('#recipeCarousel10').carousel({
  interval: 0
})
$('#recipeCarousel11').carousel({
  interval: 0
})
$('#recipeCarousel12').carousel({
  interval: 0
})


//This is for the gallery carousel 
$('.carousel .carousel-item').each(function() {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length > 0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }});


// THIS IS FOR FILTERS SIDE NAV - MOBILE

// function openNav() {
//   document.getElementById("mobile-filters").style.width = "85%";
//   document.getElementById(".overlay-filters").style.display = "block";
// }

// function closeNav() {
//   document.getElementById("mobile-filters").style.width = "0";
// }