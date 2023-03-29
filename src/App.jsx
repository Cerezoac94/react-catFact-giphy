import Fetch from "./components/Fetch";
import Reset from "./context/Reset";

function App() {
	return (
		<main>
			<Reset>
				<Fetch />
			</Reset>
		</main>
	);
}

export default App;
