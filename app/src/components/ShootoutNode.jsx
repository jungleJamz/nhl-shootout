// ============================================
// FILE: src/components/ShootoutNode.jsx
// ============================================
/**
 * @Purpose: Renders a single node in the tree
 * Props:
  * node - node data object
  * position - {x, y} coordinates
  * isHovered - boolean
  * onMouseEnter/onMouseLeave - hover handlers

 * Style Logic:
  * Gets colors from getShootoutNodeStyle(node) 
  * Changes opacity when hovered

* Rendering: SVG <g> group containing:
  * Rounded rectangle (120x70px) with dynamic fill/stroke colors
  * Two rendering modes:
    1. Text mode (line 27-37): For sudden death nodes with a text property
    2. Score mode (line 39-70): Shows three text lines:
      * Score like "2-1" or "Start"
      * "Team A/B" or "Begin"
      * Betting odds like "2.56 | 1.64"
 */
import React from 'react';
import { getShootoutNodeStyle } from '../utils/shootoutStyling';

const ShootoutNode = ({ node, position, isHovered, onMouseEnter, onMouseLeave }) => {
  const style = getShootoutNodeStyle(node);

  return (
    <g
      transform={`translate(${position.x}, ${position.y})`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      <rect
        width="120"
        height="70"
        rx="6"
        fill={style.bg}
        stroke={style.border}
        strokeWidth="2"
        className={isHovered ? 'opacity-100' : 'opacity-90'}
      />
      
      {node.text ? (
        <text 
          x="60" 
          y="38" 
          textAnchor="middle" 
          fontSize="12" 
          fontWeight="bold"
          fill={style.text}
        >
          {node.text}
        </text>
      ) : (
        <>
          <text 
            x="60" 
            y="22" 
            textAnchor="middle" 
            fontSize="14" 
            fontWeight="bold"
            fill={style.text}
          >
            {node.score ? `${node.score[0]}-${node.score[1]}` : 'Start'}
          </text>
          <text 
            x="60" 
            y="40" 
            textAnchor="middle" 
            fontSize="10"
            fill={style.text}
            opacity="0.8"
          >
            {node.shooter ? `Team ${node.shooter}` : 'Begin'}
          </text>
          <text 
            x="60" 
            y="56" 
            textAnchor="middle" 
            fontSize="10" 
            fontWeight="500"
            fill={style.text}
          >
            {node.odds[0] ? node.odds[0].toFixed(2) : '—'} | {node.odds[1] ? node.odds[1].toFixed(2) : '—'}
          </text>
        </>
      )}
    </g>
  );
};

export default ShootoutNode;