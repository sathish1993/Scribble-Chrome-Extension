var active_tabid;

chrome.browserAction.onClicked.addListener(function(activeTab) {
   var newURL = "https://d1uhi7vkuhakrv.cloudfront.net/"
   chrome.tabs.create({ url: newURL });
});

chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSe2NMGTTupxCeDxykdhL9yPWJMCpXYwK7xr7imt5JBWxHhNDw/viewform?usp=sf_link")
