const options = {
	method: 'GET',
	headers: {
		'apikey': 'JSujzC19HeZqktDPJKZwX1cNzIHDZLxr',
	}
};

export const fetchList = () => fetch('https://api.apilayer.com/currency_data/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

