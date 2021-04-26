$("document").ready(function () {
    $("#datepicker").datepicker({
      firstDay: 1,
      showButtonPanel: true,
      currentText: "Current Date",
      closeText: "Close",
      constrainInput: true,
      defaultDate: 3,
      changeMonth: true,
      changeYear: true,
      dateFormat: "mm/dd/yy",
    });
  });
  $(document).ready(function () {
    $(".popup-btn").click(function () {
      $(".popup")
        .css("display", "flex")
        .css("animation", "popup-bg 1s")
        .css("animation-interaction-count", "1");
      $(".popup-wrap")
        .css("animation", "popup 1s")
        .css("animation-iteration-count", "1");
    });
  
    $(".close").click(function () {
      $(".popup-wrap")
        .css("animation", "popup 1s")
        .css("animation-iteration-count", "1");
      $(".popup").delay(500).fadeOut();
    });
  });
  
  $(document).ready(function () {
    $(".submit-btn").click(function () {
      $("#display").toggle("slow");
    });
  });