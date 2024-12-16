const userIds = {
	wechat: 'xiaohe88997',
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

function copyText(id) {
  console.log('Copying:', id);
  const text = document.getElementById(id)?.innerText;
  if (!text) return;

  console.log('Copied:', text);

  window.navigator.clipboard.writeText(text);

  Swal.fire({
    icon: 'success',
    title: 'Copied!',
    showConfirmButton: false,
    timer: 1000,
  });
}