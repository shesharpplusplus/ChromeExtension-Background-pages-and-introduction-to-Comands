
var currentTabId = 0;
var currentTabURL = "null";

chrome.commands.onCommand.addListener(function(command) {

	alert ("1. Inside Listener");
	chrome.tabs.query({active:true, currentWindow: true}, function(arrayOfTabs) {

		alert("2. Filtering Results");
		currentTabURL = arrayOfTabs[0].url;
		currentTabId = arrayOfTabs[0].id; 
			
	});
	
	if (command == "toggle") 
	{
		alert ("3. Resolved Command");
		alert ("TAB ID = " + currentTabId + "\n URL =  " + currentTabURL);
	}	 
});

