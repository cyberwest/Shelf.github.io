
function changeBackground50() {
console.log(changeBackground50);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/9eOqLVl.jpg)';
}

function changeBackground60() {
console.log(changeBackground60);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/LzFIqR6.jpg)';

}

function changeBackground70() {
console.log(changeBackground70);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/CC9LQYv.jpg)';
}

function changeBackground80() {
console.log(changeBackground80);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/0AViCCN.jpg)';
}

function changeBackground90() {
console.log(changeBackground90);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/pZj9QkJ.jpg)';
}

function changeBackground00() {
console.log(changeBackground00);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/dyspkmD.jpg)';
}

function changeBackground10() {
console.log(changeBackground10);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/wanHcrS.jpg)';
}

// $(document).ready(function() {
// $("#swichVid50").click(function() {
//   var change = $(this).find('.video50').data('video');
//
//   $("#iconVideos").attr('src', video50);
//   console.log(change);
//   });
// });

// $(document).ready(function(){
//     $("a").click(function(e) {
//         e.preventDefault();
//
//         $("#iconVideos").attr("src", $(this).attr("href"));
//     })
// });

// function videoFive() {
//   $("#iconVideos source").attr("src", "https://www.youtube.com/watch?v=EQPcwqPL34I&feature=youtu.be");
// }


$(function showText(){
    $('#swichVid50').click(function(){
      $('#textBox').html('It is working');
      $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/rltpH6ck2Kc?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235" height="180" frameborder="0" ></iframe>');
    });
  });


  $(function moreText(){
      $('#swichVid60').click(function(){
        $('#textBox').html('It is working again60');
        // $('#swichVid60').css({'width': '140px', 'height': '110px' });
        // $('#videoBox').html('<img src="http://i.imgur.com/YwDxaeq.png" />');
      });
    });

  $(function moreText(){
      $('#swichVid70').click(function(){
        $('#textBox').html('It is working again70');
        // $('#videoBox').html('<img src="http://i.imgur.com/YwDxaeq.png" />');

      });
    });

  $(function moreText(){
    $('#swichVid80').click(function(){
      $('#textBox').html('It is working again80');
      // $('#videoBox').html('<img src="http://i.imgur.com/YwDxaeq.png" />');
    });
  });

  $(function moreText(){
    $('#swichVid90').click(function(){
      $('#textBox').html('It is working again90');
      // $('#videoBox').html('<img src="http://i.imgur.com/YwDxaeq.png" />');
    });
  });

  $(function moreText(){
    $('#swichVid00').click(function(){
      $('#textBox').html('It is working again00');
      // $('#videoBox').html('<img src="http://i.imgur.com/YwDxaeq.png" />');
    });
  });

  $(function moreText(){
    $('#swichVid10').click(function(){
      $('#textBox').html('It is working again10');
      // $('#videoBox').html('<img src="http://i.imgur.com/YwDxaeq.png" />');
    });
  });
