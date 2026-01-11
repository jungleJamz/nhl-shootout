// ============================================
// FILE: src/components/ShootoutEdge.jsx
// ============================================
/**
 * @Purpose: Renders a single edge (connection line) between two nodes
 * Props:
  * fromPos - starting position {x, y}
  * toPos - ending position {x, y}
  * type - 'goal' or 'miss'
  * label - text label ("Goal" or "Miss")

 * Line Calculation:
  * Starts at bottom-center of source node (x+60, y+70)
  * Ends at top-center of target node (x+60, y)
  * Midpoint calculated for label placement

* Styling:
  * Green (#10b981) for goals, red (#ef4444) for misses
  * 40% opacity line with colored arrowhead marker
  * Label at midpoint with 70% opacity
 */
import React from 'react';

const ShootoutEdge = ({ fromPos, toPos, type, label }) => {
  if (!fromPos || !toPos) return null;

  const isGoal = type === 'goal';
  const color = isGoal ? '#10b981' : '#ef4444';
  
  // Calculate start and end points (center bottom of from node, center top of to node)
  const x1 = fromPos.x + 60; // Center of 120px wide node
  const y1 = fromPos.y + 70; // Bottom of 70px tall node
  const x2 = toPos.x + 60;   // Center of target node
  const y2 = toPos.y;         // Top of target node
  
  // Calculate midpoint for label
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="2"
        markerEnd={isGoal ? 'url(#arrowhead-goal)' : 'url(#arrowhead-miss)'}
        opacity="0.4"
      />
      <text
        x={midX}
        y={midY}
        fill={color}
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        opacity="0.7"
      >
        {label}
      </text>
    </g>
  );
};

export default ShootoutEdge;