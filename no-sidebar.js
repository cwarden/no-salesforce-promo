console.log('no-sidebar loaded');
chrome.webRequest.onBeforeRequest.addListener(function(details) {
	console.log(details.url);
	if (details.url.match(/login-messages\/promos.html/)) {
		return { cancel: true };
	}
}, { urls: ['https://*.salesforce.com/*'] }, ['blocking']);
