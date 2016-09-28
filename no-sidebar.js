console.log('no-sidebar loaded');
chrome.webRequest.onBeforeRequest.addListener(function(details) {
	console.log(details.url);
	if (details.url.match(/sidebar/)) {
		return { cancel: true };
	}
}, { urls: ['https://*.amazon.com/*'] }, ['blocking']);
