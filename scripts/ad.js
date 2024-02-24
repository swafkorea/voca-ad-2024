function openQr(type, userId) {
	Swal.fire({
		imageUrl: `images/qr-${type}.jpg`,
		imageWidth: 360,
		imageHeight: 360,
		imageAlt: 'Custom image',
		backdrop: false,
		html: `<div class="qr-id">${userId}</div>`,
		customClass: {
			popup: 'qr-popup',
			image: 'qr-img',
			htmlContainer: 'qr-content',
		},
    showCloseButton: true,
    showConfirmButton: false,
    focusConfirm: false,
    inputAutoFocus: false,
	});
}
