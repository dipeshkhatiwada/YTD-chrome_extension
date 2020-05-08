chrome.browserAction.onClicked.addListener(function(activeTab){

const insert = (arr, index, ...newItems) => [
  ...arr.slice(0, index),
  ...newItems,
  ...arr.slice(index)
]
  var res = (activeTab.url).split("youtube");
  const finalURL = (insert(res, 1, "ssyoutube")).join('')
  console.log(finalURL);
  document.execCommand('copy');
  chrome.tabs.create({ url: finalURL}, function (tab) {
	  chrome.tabs.executeScript(null,  {code: "document.getElementById('input').focus();document.execCommand('paste'); document.getElementById('dlb').click();"});
  });
});