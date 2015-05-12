var gender = c3.generate({
	bindto: '#g-pie',
	data: {
		url: 'http://localhost:3000/gender',
		mimeType: 'json',
		type: 'pie'
	}
});