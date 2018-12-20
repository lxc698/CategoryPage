// $('#recipeCarousel').carousel({
//   interval: 0
// })
$(document).ready(function(e) {
    
  // FIRST PRODUCT THUMBNAILS HOVER
  var product1Original = $('.main').attr('src');
    $('.thumbnail').mouseover(function() {
        // retrieve image product1Source
      var product1Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main').attr('src', product1Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main').attr('src', product1Original); // restore product1Original image product1Source
  });

  // SECOND PRODUCT THUMBNAILS HOVER
  var product2Original = $('.main2').attr('src');
    $('.thumbnail2').mouseover(function() {
        // retrieve image product1Source
      var product2Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main2').attr('src', product2Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main2').attr('src', product2Original); // restore product1Original image product1Source
  });

  // THIRD PRODUCT THUMBNAILS HOVER
  var product3Original = $('.main3').attr('src');
    $('.thumbnail3').mouseover(function() {
        // retrieve image product1Source
      var product3Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main3').attr('src', product3Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main3').attr('src', product3Original); // restore product1Original image product1Source
  });

  // FOURTH PRODUCT THUMBNAILS HOVER
  var product4Original = $('.main4').attr('src');
    $('.thumbnail4').mouseover(function() {
        // retrieve image product1Source
      var product4Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main4').attr('src', product4Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main4').attr('src', product4Original); // restore product1Original image product1Source
  });

  // 5th PRODUCT THUMBNAILS HOVER
  var product5Original = $('.main5').attr('src');
    $('.thumbnail5').mouseover(function() {
        // retrieve image product1Source
      var product5Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main5').attr('src', product5Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main5').attr('src', product5Original); // restore product1Original image product1Source
  });

  // 6th PRODUCT THUMBNAILS HOVER
  var product6Original = $('.main6').attr('src');
    $('.thumbnail6').mouseover(function() {
        // retrieve image product1Source
      var product6Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main6').attr('src', product6Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main6').attr('src', product6Original); // restore product1Original image product1Source
  });

  // 7th PRODUCT THUMBNAILS HOVER
  var product7Original = $('.main7').attr('src');
    $('.thumbnail7').mouseover(function() {
        // retrieve image product1Source
      var product7Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main7').attr('src', product7Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main7').attr('src', product7Original); // restore product1Original image product1Source
  });


  // 8th PRODUCT THUMBNAILS HOVER
  var product8Original = $('.main8').attr('src');
    $('.thumbnail8').mouseover(function() {
        // retrieve image product1Source
      var product8Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main8').attr('src', product8Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main8').attr('src', product8Original); // restore product1Original image product1Source
  });

  // 9th PRODUCT THUMBNAILS HOVER
  var product9Original = $('.main9').attr('src');
    $('.thumbnail9').mouseover(function() {
        // retrieve image product1Source
      var product9Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main9').attr('src', product9Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main9').attr('src', product9Original); // restore product1Original image product1Source
  });

  // 10th PRODUCT THUMBNAILS HOVER
  var product10Original = $('.main10').attr('src');
    $('.thumbnail10').mouseover(function() {
        // retrieve image product1Source
      var product10Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main10').attr('src', product10Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main10').attr('src', product10Original); // restore product1Original image product1Source
  });

  // 11th PRODUCT THUMBNAILS HOVER
  var product11Original = $('.main11').attr('src');
    $('.thumbnail11').mouseover(function() {
        // retrieve image product1Source
      var product11Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main11').attr('src', product11Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main11').attr('src', product11Original); // restore product1Original image product1Source
  });

  // 12th PRODUCT THUMBNAILS HOVER
  var product12Original = $('.main12').attr('src');
    $('.thumbnail12').mouseover(function() {
        // retrieve image product1Source
      var product12Source = $(this).attr('src'); // retrieve image product1Source of hovered image
      $('.main12').attr('src', product12Source); // update main image product1Source
    })
    .mouseout(function() {
      $('.main12').attr('src', product12Original); // restore product1Original image product1Source
  });

});

