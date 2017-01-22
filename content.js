//console log to make sure the json file is being accessed
console.log(chrome.extension.getURL('dictionary.json'));

function replaceText(word, new_word) {
  var word = new RegExp(word, 'g');
  document.body.innerHTML = document.body.innerHTML.replace(word, new_word);
}

$(document).ready(function() {

  setTimeout(function() {
    $.getJSON(chrome.extension.getURL('test.json'), function(data) {

      $.each( data, function( key, val ) {
          replaceText(key, val);
      });

    });
  }, 1000);

});

