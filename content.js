document.body.innerHTML = document.body.innerHTML.replace(/hello/g, 'hi');

console.log(chrome.extension.getURL('test.json'));


$.getJSON(chrome.extension.getURL('dictionary.json'), function(data) {
   console.log(data);
});