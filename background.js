chrome.runtime.onMessage.addListener((req) => {
	if (req.action === 'changeIcon') {
		chrome.action.setIcon({ path: req.iconPath })

		if (req.iconPath.includes('disabled')) {
			chrome.tabs.query(
				{ active: true, windowType: 'normal', currentWindow: true },
				function (d) {
					chrome.action.setPopup({
						tabId: d[0].id,
						popup: '',
					})
				}
			)
		}
	}
})
