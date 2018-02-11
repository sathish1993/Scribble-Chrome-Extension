var active_tabid;

chrome.browserAction.onClicked.addListener(function(activeTab) {
   var newURL = "http://aws-website-scribbe-43fvh.s3-website-us-east-1.amazonaws.com/"
   chrome.tabs.create({ url: newURL });
});