/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    let path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
});
  $(document).ready(function() {
  $('#dataTable').DataTable();
});
  $(function() {
      $('input[name="birthday"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10)
      })
    //function(start, end, label) {
    //let years = moment().diff(start, 'years');
    //alert("You are " + years + " years old!");
  //});
});
  $(function() {
      $('input[name="data"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2020,
        maxYear: parseInt(moment().format('YYYY'),10)
      })
});

