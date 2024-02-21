function openQr(type) {
	Swal.fire({
		imageUrl: `images/qr-${type}.jpg`,
		imageWidth: 360,
		imageHeight: 360,
		imageAlt: 'Custom image',
	});
}
