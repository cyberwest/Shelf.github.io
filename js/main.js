
function changeBackground50() {
console.log(changeBackground50);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/707Cibz.jpg)';
}

function changeBackground60() {
console.log(changeBackground60);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/wdPii3I.jpg)';

}

function changeBackground70() {
console.log(changeBackground70);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/YWMNGLa.jpg)';
}

function changeBackground80() {
console.log(changeBackground80);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/nVXMO66.jpg)';
}

function changeBackground90() {
console.log(changeBackground90);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/v1ITUGZ.jpg)';
}

function changeBackground00() {
console.log(changeBackground00);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/Xu9CKpl.jpg)';
}

function changeBackground10() {
console.log(changeBackground10);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/5llP8BE.jpg)';
}

// $(document).ready(function() {
// $(".button60").click(function() {
//   var change = $(this).find('.swichVid').data('video');
//
//   $("#displayVideo").attr('src', change);
//
//   });
// });


$(function showText(){
    $('#swichVid50').click(function(){
      $('#textBox').html('It is working');
    });
  });


  $(function moreText(){
      $('#swichVid60').click(function(){
        $('#textBox').html('It is working again60');
      });
    });

  $(function moreText(){
      $('#swichVid70').click(function(){
        $('#textBox').html('It is working again70');
        $('#filterBox').html('<img width="440px" height="380px" scr="http://i.imgur.com/YwDxaeq.png" />');

      });
    });

  $(function moreText(){
    $('#swichVid80').click(function(){
      $('#textBox').html('It is working again80');
    });
  });

  $(function moreText(){
    $('#swichVid90').click(function(){
      $('#textBox').html('It is working again90');
    });
  });

  $(function moreText(){
    $('#swichVid00').click(function(){
      $('#textBox').html('It is working again00');
    });
  });

  $(function moreText(){
    $('#swichVid10').click(function(){
      $('#textBox').html('It is working again10');
    });
  });
