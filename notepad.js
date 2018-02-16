var active_tabid;

chrome.browserAction.onClicked.addListener(function(activeTab) {
   var newURL = "https://d1uhi7vkuhakrv.cloudfront.net/"
   chrome.tabs.create({ url: newURL });
});
