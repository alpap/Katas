var CreateName = element => {
	return (
		document.title.replace(/[^a-z]/gi, '') +
		element.tagName.toLowerCase()[0].toUpperCase() +
		element.tagName.toLowerCase().substring(1) +
		element.innerText
	).replace(/[^a-z]/gi, '');
};

var AddToClip = text => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			console.log(text);
		})
		.catch(err => {
			console.log('Something went wrong', err);
		});
};

const listener = document.querySelector('BODY');
listener.addEventListener('click', e => {
	AddToClip(CreateName(e.target));
});
