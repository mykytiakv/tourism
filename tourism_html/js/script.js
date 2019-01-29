$(document).ready(function(){
  $(".slider").slick({
    // autoplay:true,
    autoplaySpeed:3000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:3, // Number Of Carousel
    slidesToScroll:3, // Slide To Move
    pauseOnHover:false,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    dotsClass: 'slick-dots',
    prevArrow:"<button class=\"slick-new-prev\"><img src='tourism_html/icons/Arrow.png' class='m-auto'></button>",
    nextArrow:"<button class=\"slick-new-next\"><img src='tourism_html/icons/Arrow.png' class='m-auto'></button>",
    responsive:[
      {breakpoint:1322,settings:{
        slidesToShow:2,
        slidesToScroll:2,
      }},
      {breakpoint:902,settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }},
    ],
  })
});


$(document).ready(function(){
  $(".tour_slider_1").slick({
    // autoplay:true,
    autoplaySpeed:3000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:3, // Number Of Carousel
    slidesToScroll:3, // Slide To Move
    pauseOnHover:false,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    dotsClass: 'slick-dots',
    prevArrow:"<button class=\"slick-new-prev\"><img src='tourism_html/icons/Arrow.png' class='m-auto'></button>",
    nextArrow:"<button class=\"slick-new-next\"><img src='tourism_html/icons/Arrow.png' class='m-auto'></button>",
    responsive:[
      {breakpoint:1102,settings:{
        slidesToShow:2,
        slidesToScroll:2,
      }},
      {breakpoint:782,settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }},
    ],
  })
});

$(document).ready(function(){
    $(".SlickCarousel").slick({
      autoplay:true,
      autoplaySpeed:3000, //  Slide Delay
      speed:800, // Transition Speed
      slidesToShow:1, // Number Of Carousel
      slidesToScroll:1, // Slide To Move
      pauseOnHover:false,
      dots: true,
      infinite: true,
      cssEase: 'linear',
      dotsClass: 'slick-dots',
      prevArrow:"<button class=\"slick-new-prev\"><img src='tourism_html/icons/Arrow-2.png' class='m-auto'></button>",
      nextArrow:"<button class=\"slick-new-next\"><img src='tourism_html/icons/Arrow-2.png' class='m-auto'></button>",
    })
  });

  $(function() {
    // smooth scroll
    $(document).on("click","a[target=_self]", function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({scrollTop: target.offset().top}, 2000);
        }
    });

    $(document).on('click', '.languages a', e => {
      $('.languages a').each((i, el) => $(el).parent().removeClass('active'))
      $(e.target).parent().addClass('active')
    })

    // dropdown menu
    let globCheck = true  ;

    function toggleDropDown() {
      const dropDown = $('#navbarDropdown').find('.dropdownCont').eq(0)
      if (globCheck) {
        dropDown.addClass('active');
        setTimeout(() => {
          if (dropDown.hasClass('active')) dropDown.addClass('show')
        }, 150)
        globCheck = !globCheck;
        
      } else if (!globCheck) {
        dropDown.removeClass('show')
        setTimeout(() => {
          if (!dropDown.hasClass('show')) dropDown.removeClass('active')
        }, 300)
        globCheck = !globCheck;
      }
    } 
    
    $(document).on('click', '#navbarDropdown', () => toggleDropDown())

    // close dropdown when clock outside
    $(document).on('click', e => {
      const dropDown = $('#navbarDropdown').find('.phoneNumber').get(0);
      const dropDownContext = $('#navbarDropdown').find('.dropdownCont').get(0);

      if (dropDown !== e.target && dropDownContext !== e.target && $(dropDown).next().hasClass('show')) {
        globCheck = false;
        toggleDropDown();
      }
    })
});

