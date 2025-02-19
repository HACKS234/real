import React from 'react';
import { GameCard } from "./game-card";

interface Game {
  id: number;
  title: string;
  thumbnailUrl: string;
  embedUrl: string;
  description: string;
  category: string;
}

interface GameGridProps {
  games: Game[];
  isLoading: boolean;
  onFullscreen: (gameId: number) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({ games, isLoading, onFullscreen }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading ? (
        <p>Loading games...</p>
      ) : games.length > 0 ? (
        games.map(game => (
          <GameCard key={game.id} game={game} onFullscreen={onFullscreen} />
        ))
      ) : (
        <p>No games found.</p>
      )}
    </div>
  );
};
