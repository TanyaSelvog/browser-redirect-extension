
browser.webRequest.onBeforeRequest.addListener(
	function(details){
		const url = new URL (details.url);
		if (url.hostname.endsWith("facebook.com")){
			return {redirectUrl: browser.extension.getURL("index.html")};
		}
	}, {
		urls: ["<all_urls>"],
		types: ["main_frame"]
	}, ["blocking"]);
