// AUTOLOAD CODE BLOCK (MAY BE CHANGED OR REMOVED)
if (!/android|iphone|ipod|series60|symbian|windows ce|blackberry/i.test(navigator.userAgent)) {
	jQuery(function($) {
		$("img[src^='data:image']").slimbox(
			{/* Put custom options here */
			resizeDuration: 250,
			initialWidth: 300,
			initialHeight: 300,
			imageFadeDuration: 50,
			captionAnimationDuration: 1,
			overlayFadeDuration: 100,
      maxWidth: 1000,
			maxHeight: 800,
			}, null, function(el) {
			return ((el.href = this.src)) && ((el.title = this.alt));
		});
	});
}

// There is a known issue that this returns all images but does not classify them as members of an image group. Therefore the gallery shows the correct number of images but does not actually flip through them.
