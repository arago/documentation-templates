jQuery(document).ready(function ($) {

  what = window.location.href.split(':');
  button = document.getElementById('improve-button');
  hidden = document.getElementById('improve');
  branch = '/' + window.location.href.split(window.location.host)[1].split('/')[2] + '/';
  file = window.location.href.split(window.location.host)[1].split('/').slice(3).join('/');
  url = file.substring(file.length - 5, 0) + '.adoc';

  if (what[0] != 'file')
   {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == '200') {
            //console.log('Status 200 received, arago Member');
            button.href = 'https://github.com/arago/hiro-documentation/edit' + branch + url;
            hidden.className += ' in';
          } else {
            //console.log('Status not 200, not arago Member');
            return false;
          }
        }
      };
  } else {
    console.log('Files rendered locally. Doing nothing.');
    return false;
  }

  xhr.open('GET', 'https://docs.hiro.arago.co/hiro/develop/welcome/index.html', true);
  xhr.send(null);

});
