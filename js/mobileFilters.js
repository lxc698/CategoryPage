// OPEN FILTERS NAV ON THE LEFT SIDE WHEN BUTTON CLICKED - THIS IS JUST FOR THE MOBILE VERSION

function openNav() {
   // $('html, body').css({
   //     overflow: 'hidden',
   //     height: '100%',
   //     width: '100%',
   //     position: 'fixed'
   // });
   $('body, html').css({
      'overflow': 'hidden',
      'min-height': '100%',
      'max-height': '100%',
      'position': 'fixed',
      'touch-action': 'auto'
   });
   $(document).bind('scroll', function () {
      window.scrollTo(0, 0);
   });

   document.getElementById("mobile-overlay").style.width = "100%";
   document.getElementById("mobile-overlay").style.height = "100%";
   document.getElementById("mobile-filters").style.width = "85%";
   // document.getElementById("mobile-filters").style.position = "fixed";
}

function closeNav() {
   // $('html, body').css({
   //     overflow: 'auto',
   //     height: 'auto'
   // });
   $(document).unbind('scroll');
   $('body, html').css({
      'overflow': 'visible',
      'position': 'unset'
   });
   document.getElementById("mobile-overlay").style.width = "0";
   document.getElementById("mobile-filters").style.width = "0";
}