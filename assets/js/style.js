
var carouselSection1 = document.getElementById('carousel-section-1');
var listitem = carouselSection1.querySelectorAll('.row .col-3');
var item = carouselSection1.querySelector('.row .col-3');
var width = item.clientWidth;
var btnNext = document.getElementById('next');
var btnPrev = document.getElementById('prev');
var count = 0;
function carousel(dir){
  console.log(dir);
  var totalItem =  listitem.length;
  if(dir === "left"){
    ++count;
  }
  else{
    --count;
  }
  console.log(count);
  carouselSection1.style.transform = 'translateX(-' + count * width + 'px)';
  // btnPrev.style.display = count < 0 ? "block" : "none";
  // btnNext.style.display = count > 4-totalItem ? "block" : "none";
}
btnPrev.addEventListener("click", function (e) {
  carousel("right");
});
btnNext.addEventListener("click", function (e) {
  carousel("left");
});

$('#carousel-trending').slick({
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'linear'
});

$(document).ready(function () {
  $('#btn-hamburger').click(function () {
    $('#navbar').css('margin-left', 'unset');
  })
  $('#btn-close').click(function () {
    $('#navbar').css('margin-left', '-100%');
  })

  $('#btn-search-mb').click(function () {
    $('#navbar').css('margin-left', 'unset');
  })

  $('#navbar .btn-search .btn-toggle').click(function () {
    $('#navbar .btn-search .search-form').toggleClass(' show');
  })
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-102px";
    }
    prevScrollpos = currentScrollPos;
  }
  $("#top").hide();
  $(function toTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#top').fadeIn();
      } else {
        $('#top').fadeOut();
      }
    });

    $('#top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  function gotoTop() {
    if ($("#top").length) {
      $("#top").hide();

      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#top').fadeIn();
        }
        else {
          $('#top').fadeOut();
        }
      });

      $('#top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    }
  }
});
function openArtGroup(evt, cat) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cat).style.display = "block";
  evt.currentTarget.className += " active";
}

function openMenuArt(evt, menuName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

const show = document.querySelector('.js-count-wt'),
  number = Number(show.innerHTML);

console.log(show);

let counter = 0,
  delay = 1,
  x = 0,
  y = counter / 2;

counter_js();

function counter_js() {
  y++;
  delay = x - y;
  show.innerHTML = parseFloat(counter).toFixed(1);
  counter = counter + 0.1;
  if (counter < number) {
    setTimeout(function () {
      counter_js();
    }, delay)
  }
}




