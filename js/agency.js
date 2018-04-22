(function($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Close responsive menu when scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse the navigation bar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse the navigation bar if page is not at the top
  navbarCollapse();
  // Collapses the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  //Animates Skillbars
$(window).on('scroll', function(){
  var skillsContainer = $('#skillbars');
  var windowTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var skillbarTop = skillsContainer.offset().top;
  
  if (windowTop + windowHeight > skillbarTop) {
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
      }, 5000);
    });
  }
});

})(jQuery);

// Add scroll to scroll button
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 670, 'linear');
    });
  });
  
 $(document).scroll(function() {
  const y = $(this).scrollTop();
  const box = document.getElementsByClassName('box')[0];
  if (y > 900) {
    $(box).fadeIn(1300);
  } else {
    $(box).fadeOut();
  }
});

  // Add scroll to violin buttons
  const buttons = document.getElementsByClassName('buttons');
  for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    $('html,body').animate({
        scrollTop: $('#section-two').offset().top}, 1500, 'linear');
  });
  };

  // Add event listeners to buttons
  const buttonNorwegian = document.getElementById('buttonNorwegian');
  buttonNorwegian.addEventListener('mouseover', function() {
    buttonNorwegian.style.fillOpacity = 0.7;
  });
  buttonNorwegian.addEventListener('mouseout', function() {
    buttonNorwegian.style.fillOpacity = 0;
  });
  buttonNorwegian.addEventListener('click', function() {
    const sections = document.getElementsByTagName('h1');
    for (let i = 0; i < sections.length; i++) {
      sections[i].textContent = 'Dette er en tekst på norsk.';
    }
  });

  const buttonEnglish = document.getElementById('buttonEnglish');
  buttonEnglish.addEventListener('mouseover', function() {
    buttonEnglish.style.fillOpacity = 0.7;
  });
  buttonEnglish.addEventListener('mouseout', function() {
    buttonEnglish.style.fillOpacity = 0;
  });
  buttonEnglish.addEventListener('click', function() {
    const sections = document.getElementsByTagName('h1');
    for (let i = 0; i < sections.length; i++) {
      sections[i].textContent = 'This is a text in English.';
    }
  });

  const buttonGerman = document.getElementById('buttonGerman');
  buttonGerman.addEventListener('mouseover', function() {
    buttonGerman.style.fillOpacity = 0.7;
  });
  buttonGerman.addEventListener('mouseout', function() {
    buttonGerman.style.fillOpacity = 0;
  });
  buttonGerman.addEventListener('click', function() {
    const sections = document.getElementsByTagName('h1');
    for (let i = 0; i < sections.length; i++) {
      sections[i].textContent = 'Dies ist ein Text auf Deutsch.';
    }
  });

  const buttonSlovak = document.getElementById('buttonSlovak');
  buttonSlovak.addEventListener('mouseover', function() {
    buttonSlovak.style.fillOpacity = 0.7;
  });
  buttonSlovak.addEventListener('mouseout', function() {
    buttonSlovak.style.fillOpacity = 0;
  });
  buttonSlovak.addEventListener('click', function() {
    const sections = document.getElementsByTagName('h1');
    for (let i = 0; i < sections.length; i++) {
      sections[i].textContent = 'Toto je text v slovenčine.';
    }
  });


