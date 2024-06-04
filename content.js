window.addEventListener('focus', function () {
	checkPage()
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === 'getAuthor') {
		sendResponse({
			author: getHashnodeAuthor(),
			slug: window.location.href.substring(
				window.location.href.lastIndexOf('/') + 1
			),
		})
	}
})

function getHashnodeAuthor() {
	const links = document.getElementsByTagName('link')
	for (let link of links) {
		if (link.rel === 'author' && link.href.includes('hashnode')) {
			return link.href.split('@')[1]
		}
	}

	return null
}

function checkPage() {
	const author = getHashnodeAuthor()

	if (author) {
		chrome.runtime.sendMessage({
			action: 'changeIcon',
			iconPath: 'images/icon-16.png',
		})
	} else {
		chrome.runtime.sendMessage({
			action: 'changeIcon',
			iconPath: 'images/icon-16-disabled.png',
		})
	}
}

checkPage()
