document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
	fetch(`https://ciprand.p3p.repl.co/api?len=20&count=1`)
		.then(res => res.json())
		.then(data => passGen(data.Strings[0]))
		.catch(err => console.log(err));
}

const specialChars = {
	1: '!',
	2: '@',
	3: '#',
	4: '$',
	5: '%',
	6: '^',
	7: '7',
};

function passGen(data) {
	document.querySelector('h1').innerText = `${
		specialChars[Math.ceil(Math.random() * 7)]
	}${data}${specialChars[Math.ceil(Math.random() * 7)]}`;
}
