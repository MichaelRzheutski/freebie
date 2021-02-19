$(function() {

  /* Menu nav toggle */
  $("#nav-toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /* Collapse */
  $("[data-collapse]").on("click", function(event) {
      event.preventDefault();

      var $this = $(this),
          blockId = $this.data('collapse');

      $this.toggleClass("active");
  });

});
