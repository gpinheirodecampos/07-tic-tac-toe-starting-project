import { useState } from "react";
import GameBoard from "./components/GameBoard";
import { Player } from "./components/Player";

function App() {
	const [activePlayer, setActivePlayer] = useState("X");

	function handleSelectSquare() {
		setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player initialName="Gabs" symbol="X" isActive={activePlayer === "X"} />
					<Player initialName="Digs" symbol="O" isActive={activePlayer === "O"} />
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					activePlayerSymbol={activePlayer}
				/>
			</div>
			LOG
		</main>
	);
}

export default App;
