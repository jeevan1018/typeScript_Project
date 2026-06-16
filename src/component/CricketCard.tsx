import type { item } from '../types';

export function CricketCard(
    { name, team, isCaptain = false }: item
) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{team}</h2>
      <h3>{isCaptain ? "Captain" : "Player"}</h3>
    </div>
  );
}