// ============================================
// FILE: src/components/ShootoutInfoPanel.jsx
// ============================================
/**
 * @Purpose:  Bottom info panel that appears on node hover
 * Props: node - the currently hovered node

 * Display Logic:
  * If node.terminal exists: Shows "Game Over - Team X Wins!"
  * else: shows "Round X - Team Y shoots"
  * Always displays current score and betting odds
 */
import React from 'react';

const ShootoutInfoPanel = ({ node }) => {
  return (
    <div className="bg-slate-800 border-t border-slate-700 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-1">
              {node?.terminal 
                ? `Game Over - Team ${node.terminal} Wins!`
                : `Round ${node?.round} ${node?.shooter ? `- Team ${node.shooter} shoots` : ''}`
              }
            </h3>
            <p className="text-sm text-slate-300">
              Score: {node?.score?.join('-') || 'Starting position'} | 
              Betting odds: Team A {node?.odds[0]?.toFixed(2) || '—'} / 
              Team B {node?.odds[1]?.toFixed(2) || '—'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShootoutInfoPanel;