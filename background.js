var settings = new Store("settings", {
    "urlmap": "http://www.kramages.org/2/map/1/"
});

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		switch (request.type)
		{
    		case "getStorage":
    		    sendResponse(settings.get(request.item));
    		    break;
    		case "setStorage":
    		    settings.set(request.item, request.value);
    		    break;
		}
	}
);