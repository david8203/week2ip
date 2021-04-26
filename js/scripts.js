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