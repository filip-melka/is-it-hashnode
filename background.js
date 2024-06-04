chrome.runtime.onMessage.addListener((req) => {
	if (req.action === 'changeIcon') {
		chrome.action.setIcon({ path: req.iconPath })
	}
})
