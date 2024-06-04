chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	chrome.tabs.sendMessage(tabs[0].id, { action: 'getAuthor' }, (res) => {
		document.getElementById('author').innerText = res.author
		document.getElementById('slug').innerText = res.slug
	})
})
