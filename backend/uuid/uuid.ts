import { v4 as uuid4v } from 'uuid';

export default function v4() {
	const uuid = uuid4v();
	let result = ""
	const idArray = uuid.split('-');
	const idIndex = getRandomized(idArray.length);
	const charactersLength = idArray[idIndex].length;

	for ( let i = 0; i < 3 ; i++ ) {
		result += idArray[idIndex].charAt(getRandomized(charactersLength));
	}

	const concatIndex = getRandomized(idArray.length);
	let id = '';

	idArray.forEach((value, index) => {
		if (index === concatIndex) {
			id += `-${result}`
		}

		id += `-${value}`
	});

	if (id.charAt(0) === '-') {
		id = id.substring(1);
	}

	return id;
}

function getRandomized(input: number) {
	return Math.floor(Math.random() * input);
}
