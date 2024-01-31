import { useState } from "react";

export function Player({ initialName, symbol, isActive }) {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(initialName);

	let playerName = <span className="player-name">{name}</span>;

	let button = <button onClick={() => setIsEditing(true)}>Edit</button>;

	if (isEditing) {
		playerName = (
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				required
			/>
		);
		button = <button onClick={() => setIsEditing(false)}>Save</button>;
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			{button}
		</li>
	);
}
