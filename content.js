
console.log(chrome.extension.getURL('test.json'));

$(document).ready(function() {

    // setTimeout(function(){
    //     document.body.innerHTML = document.body.innerHTML.replace(/hello/g, 'hi');
    // }, 500);

    $.getJSON(chrome.extension.getURL('dictionary.json'), function(data) {
       $.each (data, function (key, val) {
        var replaced = $("body").html().replace(new RegExp(key.toString(), "g"), val.toString());
        $("body").html(replaced);
       });
    });
});

