document.addEventListener('DOMContentLoaded', () => {
	const dynamicImages = document.querySelectorAll('#dynamicLoading');

	function updateImageLoading() {
		const viewportHeight = window.innerHeight;
		dynamicImages.forEach(img => {
			const rect = img.getBoundingClientRect();
			if (rect.top < viewportHeight) {
				img.setAttribute('loading', 'eager');
			} else {
				img.setAttribute('loading', 'lazy');
			}
		});
	}

	updateImageLoading();

	window.addEventListener('resize', updateImageLoading);
});
