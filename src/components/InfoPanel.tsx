import React from 'react';
import { Info } from 'lucide-react';

interface PlanetInfo {
  name: string;
  description: string;
  diameter: string;
  dayLength: string;
  yearLength: string;
}

interface InfoPanelProps {
  planetInfo: PlanetInfo | null;
}

export function InfoPanel({ planetInfo }: InfoPanelProps) {
  if (!planetInfo) return null;

  return (
    <div className="absolute bottom-8 left-8 bg-black/80 text-white p-6 rounded-lg max-w-md backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Info className="w-5 h-5" />
        <h2 className="text-xl font-bold">{planetInfo.name}</h2>
      </div>
      <p className="mb-4 text-gray-300">{planetInfo.description}</p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="block text-gray-400">Diameter</span>
          <span>{planetInfo.diameter}</span>
        </div>
        <div>
          <span className="block text-gray-400">Day Length</span>
          <span>{planetInfo.dayLength}</span>
        </div>
        <div>
          <span className="block text-gray-400">Year Length</span>
          <span>{planetInfo.yearLength}</span>
        </div>
      </div>
    </div>
  );
}