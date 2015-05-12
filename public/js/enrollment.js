var chart = c3.generate({
	bindto: '#c-bar',
	data: {
		url: 'http://localhost:3000/enrollment',
		mimeType: 'json',
		type: 'bar'
	}
});