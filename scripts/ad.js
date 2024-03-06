const userIds = {
	wechat: 'kakawan1234',
	telegram: 'kakawan1234',
};

function openQr(type, userId) {
	userId = userId || userIds[type];

	if (type == 'telegram') {
		const url = `https://t.me/${userId}`;
		window.open(url, '_blank');
		return;
	}

	Swal.fire({
		imageUrl: `images/qr-codes/${type}/${userId}.jpg`,
		imageWidth: 360,
		imageHeight: 360,
		imageAlt: 'Custom image',
		backdrop: false,
		html: `<div class="qr-id">@${userId}</div>`,
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
