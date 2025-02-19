import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Game } from "@shared/schema";
import { PlayIcon, Maximize2 } from "lucide-react";
import React from 'react';

interface Game {
  id: number;
  title: string;
  thumbnailUrl: string;
  embedUrl: string;
  description: string;
  category: string;
}

interface GameCardProps {
  game: Game;
  onFullscreen: (gameId: number) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onFullscreen }) => {
  return (
    <Card className="cursor-pointer group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0 relative">
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link href={`/game/${game.id}`}>
            <PlayIcon className="h-12 w-12 text-white hover:text-primary transition-colors" />
          </Link>
          <button onClick={(e) => { e.preventDefault(); onFullscreen(game.id); }}>
            <Maximize2 className="h-12 w-12 text-white hover:text-primary transition-colors" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2">{game.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          {game.description}
        </p>
        <div className="flex gap-2">
          <Badge>{game.category}</Badge>
          <Badge variant="outline">{game.difficulty}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">
        {game.playCount.toLocaleString()} plays
      </CardFooter>
    </Card>
  );
};
