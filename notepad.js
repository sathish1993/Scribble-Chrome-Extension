var active_tabid;

chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "data:text/html,%20<html%20contenteditable>";

    chrome.tabs.create({ url: newURL });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  	var currTab = tabs[0];
	  	if (currTab) {
	    	active_tabid = currTab.id;
	  	}
	});
});

// chrome.tabs.onUpdated.addListener(function(tab_id, removed) {
// 	if (tab_id == active_tabid) {
// 		// var str = document.body.innerText;
// 		// alert(str)
//     	chrome.tabs.executeScript(active_tabid, {
//     		code: 'document.body.innerText;'
//     	}, getData);
//     }
// });

// chrome.windows.onRemoved.addListener(function(windowid) {
//  	var str = document.body.innerText;
//     alert(str);
// });

// function getData(resultsArray) {
// 	alert(resultsArray[0])
// 	chrome.runtime.sendMessage({greeting: resultsArray[0]}, function(response) {
//   		alert()
// 	});
// }