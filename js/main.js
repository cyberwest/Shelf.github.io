
function changeBackground50() {
// console.log(changeBackground50);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/9eOqLVl.jpg)';
}

function changeBackground60() {
// console.log(changeBackground60);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/LzFIqR6.jpg)';

}

function changeBackground70() {
// console.log(changeBackground70);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/CC9LQYv.jpg)';
}

function changeBackground80() {
// console.log(changeBackground80);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/0AViCCN.jpg)';
}

function changeBackground90() {
// console.log(changeBackground90);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/pZj9QkJ.jpg)';
}

function changeBackground00() {
// console.log(changeBackground00);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/dyspkmD.jpg)';
}

function changeBackground10() {
// console.log(changeBackground10);
  document.body.style.backgroundImage = 'url(http://i.imgur.com/wanHcrS.jpg)';
}


$(function showText(){
    $('#swichVid50').click(function(){
      $('#textBox').html('<p> Hound Dog has been recorded more than 250 times! Elvis Presley version ranked No.19 on in the Greatest Songs of All Time. It’s is also one of the best-selling singles of all time. Presleys version, which sold about 10 million copies globally, was his best-selling song and an emblem of the rock n roll revolution.</p>');
      $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/EQPcwqPL34I?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1&loop=1" width="235px" height="180px" frameborder="0" ></iframe>');
      $('#otherSongs').html('<b>Other popular songs at the time</b> <p>Little Richard - "Tutti Frutti"</p><br /><p> Chuck Berry - "Johnny B. Goode"</p><br /><p> Jerry Lee Lewis - "Great Balls of Fire"</p>')
    });
  });


  $(function moreText(){
      $('#swichVid60').click(function(){
        $('#textBox').html('<p>Here Comes the Sun was released by the Beatles in 1969 on album Abbey Road. The song was written at the country house of Eric Clapton, The lyrics reflect the composers relief at both the arrival of spring and the temporary respite he was experiencing from the bands business affairs.</p>');
        $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/fPiw-pHUJ5w?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235px" height="180px" frameborder="0" ></iframe>');
        $('#otherSongs').html('<p></p>')
      });
    });

  $(function moreText(){
      $('#swichVid70').click(function(){
        $('#textBox').html('<p>Stayin Alive was released on the 4 February 1978, it remained at the top of the uk charts for a whopping 13 weeks. In the process, it became one of the bands most recognisable tunes, in part because of its place at the beginning of Saturday Night Fever. </p>');
        $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/AwWk2UUdC-o?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235px" height="180px" frameborder="0"> </iframe>');
        $('#otherSongs').html('<p></p>')
      });
    });

  $(function moreText(){
    $('#swichVid80').click(function(){
      $('#textBox').html('<p>Simply the best was originally recorded by Bonnie Tyler in 1988. The song was later covered by Tina Turner, and released as a highly successful single the year after. </p>');
      $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/6CsO1-WVaIM?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235px" height="180px" frameborder="0" ></iframe>');
      $('#otherSongs').html('<p></p>')
    });
  });

  $(function moreText(){
    $('#swichVid90').click(function(){
      $('#textBox').html('<p> Juicy was released by american hip hop artist The Notorious B.I.G.in 1994, considered by the rolling stone as the one of the greatest hip hop songs it sold over 607,000 copies.</p>');
      $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/o4JB5l0bVIA?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235px" height="180px" frameborder="0" ></iframe>');
      $('#otherSongs').html('<p></p>')
      });
    });

  $(function moreText(){
    $('#swichVid00').click(function(){
      $('#textBox').html('<p>Toxic was released by american singer Britney Spears in 2004, attaining worldwide success and reaching the top-five in 15 countries.</p>');
      $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/nnqOq4nbsaU?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235px" height="180px" frameborder="0" ></iframe><');
      $('#otherSongs').html('<p></p>')
    });
  });

  $(function moreText(){
    $('#swichVid10').click(function(){
      $('#textBox').html('<p>Gangnam Style was released by korean musician Psy and has been youtubes most watched video since 2012 , being viewed over 2.8 billion times.</p>');
      $('#videoContainer').html('<iframe src="https://www.youtube.com/embed/WFao-AuupMw?rel=0&amp;controls=0&amp;showinfo=0?ecver=2&amp;autoplay=1" width="235px" height="180px" frameborder="0" ></iframe>');
      $('#otherSongs').html('<p></p>')
      });
  });
