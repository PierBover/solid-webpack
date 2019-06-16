import {createState} from 'solid-js';

export default function App () {
	const [state, setState] = createState({randomNumber: 0});

	setInterval(() => {
		setState({
			randomNumber: Math.random()
		});
	}, 1000);

	return (
		<div>{(state.randomNumber)}</div>
	);
}