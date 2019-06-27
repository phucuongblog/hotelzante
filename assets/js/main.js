$(document).ready(function(){
  // Back Top
  var $backtop = $('.backtop');
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    if (y > 400) {
      $backtop.addClass('active');
    }
    else {
      $backtop.removeClass('active');
    }
  });
  $backtop.click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
  });
  // Fancybox
  $('[data-fancybox="gallery"]').fancybox({
  });
  // Slider 
  $('.banner').slick({
    autoplay: false,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
  }).slickAnimation();
  // Top Menu Mobile
  var $submenu = $('.submenu-1'),
      $menu = $('.main-menu');
  $('.sub-btn').on('click', function(e) {
    e.preventDefault();
    if ($submenu.is(':visible')) {
        $submenu.slideUp(300);
        $('.sub-btn').removeClass('active');
    }
    if ($(this).next('.submenu-1').is(':visible')) {
        $(this).next('.submenu-1').slideUp(300);
        $(this).parent('li').find('.sub-btn').removeClass('active');

    } else {
        $(this).next('.submenu-1').slideDown(300);
        $(this).parent('li').find('.sub-btn').addClass('active');
    }
  });
  $('.open-menu-btn').click(function(e){
    e.preventDefault();
    $menu.addClass('active');
  });
  $('.close-menu-btn').click(function(e){
    e.preventDefault();
    $menu.removeClass('active');
  });
  // Show and hide element over max height
  $('.show-more').click(function(){
      $(this).siblings('.hidden-element').addClass('active');
      $(this).css('display','none');
      $(this).siblings('.show-less').css('display','block');
  });
  $('.show-less').click(function(){
      $(this).siblings('.hidden-element').removeClass('active');
      $(this).css('display','none');
      $(this).siblings('.show-more').css('display','block');
  });
  // Remove attr href from a:link rooms sv
  $('.rooms-services a, .info--services a').removeAttr('href');
  // Show and hide rooms filter
  var filterbtn = $('.filter-btn'),
      roomscontent = $('.rooms-filter--pick ul');
  filterbtn.click(function(e){
      e.stopPropagation();
      $(this).toggleClass('updown');
      $(this).next('.rooms-filter--pick ul').slideToggle('fast');
  });
  roomscontent.on('click', function(e){
      e.stopPropagation();
  });
  $(document).on('click', function(){
      roomscontent.slideUp('fast');
      filterbtn.removeClass('updown');
  });
  // Popup after clicking book now
  var $popuproom = $('.popup-room');
  $('.book-btn').click(function(e){
    e.preventDefault();
    $popuproom.fadeIn();
  });
  $('.close-selected-room').click(function(){
    $popuproom.fadeOut();
  });
  // Owl Carousel
  $('.feedback-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots:true,
      responsive:{
          0:{
              items:1,
              margin:0
          },
          768:{
              items:2,
              margin:30
          },
          992:{
              items:3
          }
      }
  });
  $('.mobile-reviews').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      items:1
  });
});

// Sync Owl Carousel 2
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 5000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});

// Sync Owl Carousel 2
$(document).ready(function() {

  var sync3 = $("#sync3");
  var sync4 = $("#sync4");
  var slidesPerPage = 6; //globaly define number of elements per page
  var syncedSecondary = true;

  sync3.owlCarousel({
    items : 1,
    slideSpeed : 5000,
    nav: false,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition3);

  sync4
    .on('initialized.owl.carousel', function () {
      sync4.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    margin: 10,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100,
    responsiveClass:true,
    responsive:{
        0:{
            items:4,
        },
        600:{
            items:5,
        },
        1000:{
            items:6,
        }
    }
  }).on('changed.owl.carousel', syncPosition4);

  function syncPosition3(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync4
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync4.find('.owl-item.active').length - 1;
    var start = sync4.find('.owl-item.active').first().index();
    var end = sync4.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync4.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync4.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition4(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync3.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync4.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync3.data('owl.carousel').to(number, 300, true);
  });
});

// Sticky Menu
$(document).scroll(function() {
    var y = $(this).scrollTop();
    var h = $(".top-menu").height();
    if (y > h) {
        $(".top-menu").addClass("sticky");
    } else {
        $(".top-menu").removeClass("sticky");
    }
});
$(document).ready(function () {

  var datepicker = $('.datepicker');
  var checkin_date = $('#eagle_booking_checkin');
  var checkout_date = $('#eagle_booking_checkout');

  // TRANSLATE
  $.fn.datepicker.dates['en'] = {
    days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ],
    daysShort: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
    ],
    daysMin: [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa"
    ],
    months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ],
    monthsShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    ],
    today: "Today",
    clear: "Clear",
    // format: "mm/dd/yyyy",
    titleFormat: "MM yyyy",
    weekStart: 0
  };

    // CHECKIN
    checkin_date.datepicker({
      format: "dd/mm/yyyy",
      startDate: new Date(),
      autoclose: true,
      todayHighlight: true,
      disableTouchKeyboard: true,
      //language: 'en',
    });

    // CHECKOUT
    checkout_date.datepicker({
      format: "dd/mm/yyyy",
      startDate: new Date(),
      autoclose: true,
      todayHighlight: false,
      disableTouchKeyboard: true,
      //language: 'en',
    });

    // DISABLE DATE PICKER INPUT
    datepicker.attr('autocomplete', 'off');
    datepicker.on("ready", function() {
      $(this).attr('autocomplete', 'off');
    });

    // CHANGE THE CHECKOUT BASED ON THE CHECKIN
    checkin_date.one('changeDate', function(e){

      var checkin_date_val_string = checkin_date.val();
      var new_checkout_date  = moment(checkin_date_val_string,'DD/MM/YYYY').add(10, 'd').format('DD/MM/YYYY');

      checkout_date.datepicker('setDate',  new_checkout_date);

    })

   // GUESTS
   $(function () {
       var spinner = $('.guests-picker');
       var spinnerplus = $('.plus')
       var spinnerminus = $('.minus');
       $(spinnerplus).on('click', function () {
           var btn = $(this);
           var input = btn.closest(spinner).find('input');
           if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
               input.val(parseInt(input.val(), 10) + 1, 10);
           } else {
               btn.next("disabled", true);
           }
       });
       $(spinnerminus).on('click', function () {
           var btn = $(this);
           var input = btn.closest(spinner).find('input');
           if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
               input.val(parseInt(input.val(), 10) - 1, 10);
           } else {
               btn.prev("disabled", true);
           }
       });
   })

   // CHANGE THE SENDING DATE FORMAT FOR BUILT IN BOOKING, BOOKING.COM & CUSTOM BOOKING TYPE BASED ON BOOKING TYPE
   datepicker.on('changeDate', function(e){

                              $(this).next('input[type=hidden]').val( moment(e.date).format('MM/DD/YYYY') )

                            });

    // CHANGE THE DEFAULT DATE FORMAT FOR BUILT IN BOOKING, BOOKING.COM & CUSTOM BOOKING TYPE BASED ON BOOKING TYPE
    jQuery("#search-form").on('submit', function(e) {

        // GET DEFAULT DATES FROM DATEPICKER
        var startDate = checkin_date.datepicker('getDate');
        var endDate = checkout_date.datepicker('getDate');

                                if (checkin_date.val()) {
         checkin_date.next('input[type=hidden]').val( moment(startDate).format('MM-DD-YYYY') );
        }
        if (checkout_date.val()) {
         checkout_date.next('input[type=hidden]').val( moment(endDate).format('MM-DD-YYYY') );
        }
        
      });

});