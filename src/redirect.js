browser.webRequest.onBeforeRequest.addListener(function(details){
	if (details.url === "https://www.facebook.com/") {
		return {redirectUrl: browser.extension.getURL("index.html")};
	}
	}, {
		urls: ["<all_urls>"],
		types: ["main_frame"]
	}, ["blocking"]);
