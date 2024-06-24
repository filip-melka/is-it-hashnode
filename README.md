# Is it a Hashnode Post?

A simple Chrome extension that identifies whether a page is displaying a Hashnode blog post.

If the user is viewing a Hashnode post, clicking on the extension icon will show a popup with the author's username and the post's slug.

https://github.com/filip-melka/is-it-hashnode/assets/173664063/51dafe6c-7e03-4759-9042-bd3a7e194703

## To run the extension:

1. Download this repo
2. Go to `chrome://extensions/`
3. Click on the 'Load unpacked' button and select the downloaded folder
4. Click on the extension button next to your search bar, find the 'Is it Hashnode?' extension and click on the pin button
5. You should see the extension in your toolbar

## Determining Whether a Page Includes a Hashnode Post

Since Hashnode authors can connect their blogs to their own domains, identifying a Hashnode post can be challenging.

To determine if a page is a Hashnode post, the extension checks for a specific link tag commonly found in Hashnode posts:

```html
<link rel="author" href="https://hashnode.com/@username" />
```

If a link tag with `rel="author"` and an `href` containing 'hashnode' is found, the extension labels the page as a Hashnode post and its icon changes to green (otherwise changes to red). Also, the username can be extracted from the URL.

This is accomplished by the `getHashnodeAuthor()` function, which returns the author's username if the page contains a Hashnode post, or `null` otherwise.

```js
function getHashnodeAuthor() {
	const links = document.getElementsByTagName('link')
	for (let link of links) {
		if (link.rel === 'author' && link.href.includes('hashnode')) {
			return link.href.split('@')[1]
		}
	}
	return null
}
```
