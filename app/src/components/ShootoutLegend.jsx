// ============================================
// FILE: src/components/ShootoutLegend.jsx
// ============================================
/**
 * @Purpose: Color-coded legend explaining node colors
 * Data: Array of 6 legend items
  * Team A Advantage - light green
  * Team B Advantage - light red
  * Even Odds - gray
  * Team A Wins - dark green (terminal)
  * Team B Wins - dark red (terminal)
  * Sudden Death - yellow
* Rendering: Flexbox row of colored squares with labels
 */
import React from 'react';

const ShootoutLegend = () => {
  const legendItems = [
    { bg: 'bg-green-200', border: 'border-green-500', label: 'Team A Advantage' },
    { bg: 'bg-red-200', border: 'border-red-500', label: 'Team B Advantage' },
    { bg: 'bg-gray-100', border: 'border-gray-400', label: 'Even Odds' },
    { bg: 'bg-green-500', border: 'border-green-700', label: 'Team A Wins' },
    { bg: 'bg-red-500', border: 'border-red-700', label: 'Team B Wins' },
    { bg: 'bg-yellow-100', border: 'border-yellow-500', label: 'Sudden Death' },
  ];

  return (
    <div className="bg-slate-700 border-b border-slate-600 p-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-6 text-sm">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${item.bg} border-2 ${item.border} rounded`}></div>
              <span className="text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShootoutLegend;