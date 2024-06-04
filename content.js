function getHashnodeAuthor() {
	const links = document.getElementsByTagName('link')
	for (let link of links) {
		if (link.rel === 'author' && link.href.includes('hashnode')) {
			return link.href.split('@')[1]
		}
	}

	return null
}

const author = getHashnodeAuthor()

if (author) {
	alert('This is a Hashnode blog post. The author is ' + author)
} else {
	alert('This is not a Hashnode blog post')
}
