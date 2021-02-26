$(function() {

  let header = $("#nav-wrap"),
      introH = $("#nav-wrap").innerHeight(),
      scrollOffset = $(window).scrollTop();

  // Fixed Header
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {
    if ( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  };


  // Menu nav toggle
  $("#nav-toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });


  // Smooth Scroll to elements
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data("scroll"),
        blockOffset = $(blockId).offset().top - 65;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });


  // Slider
  $("[data-slider]").slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1
  });


  // Collapse
  $("[data-collapse]").on("click", function(event) {
      event.preventDefault();

      let $this = $(this),
          blockId = $this.data('collapse');

      $this.toggleClass("active");
  });


  // ToTop Button
  let btn = $('#to-top');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});


// Price Switcher
function priceSwitch() {
  let checkbox = document.getElementById('dn');
  let text1 = document.getElementsByClassName('text1');
  let text2 = document.getElementsByClassName('text2');

  for (let i = 0; i < text1.length; i++) {

    if (!checkbox.checked) {
      text1[i].style.display = 'grid';
      text2[i].style.display = 'none';
    } else {
      text1[i].style.display = 'none';
      text2[i].style.display = 'grid';
    }

  }

}
