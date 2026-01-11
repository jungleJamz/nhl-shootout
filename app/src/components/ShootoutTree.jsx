// ============================================
// FILE: src/components/ShootoutTree.jsx (UPDATED)
// ============================================
/**
 * @Purpose: Main SVG rendering component for the decision tree
 * props: 
  * nodes - all node data
  * filteredNodes - nodes to display based on phase filter
  * hoveredNode - currently hovered node ID
  * setHoveredNode - hover state setter
  * zoom - zoom level
* Data Loading: 
  * Possitions: Gets x/y coordinates for all nodes
  * Edges: ets all connections between nodes 
 */
import React from 'react';
import ShootoutNode from './ShootoutNode';
import ShootoutEdge from './ShootoutEdge';
import { getShootoutNodePositions } from '../utils/shootoutPositioning';
import { getShootoutEdges } from '../utils/shootoutEdges';

/**
* Rendering: SVG container (7000x1300px) with zoom transform applied
* Defines arrow marker symbols in <defs> (line 22-45):
  * arrowhead-goal - green arrow for goals
  * arrowhead-miss - red arrow for misses

* Renders edges first (line 48-69):
  * Filters to only show edges where both endpoints are in `filteredNodes`
  * Uses <ShootoutEdge /> component
* Renders nodes on top (line 72-86):
  * Iterates through filteredNodes
  * Uses <ShootoutNode /> component
  * Passes hover handlers

 */
const ShootoutTree = ({ nodes, filteredNodes, hoveredNode, setHoveredNode, zoom }) => {
  const positions = getShootoutNodePositions();
  const edges = getShootoutEdges();

  return (
    <div className="flex-1 overflow-auto p-4">
      <div 
        className="min-w-max mx-auto"
        style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
      >
        <svg width="7000" height="1300" className="mx-auto">
          {/* Arrow markers */}
          <defs>
            <marker 
              id="arrowhead-goal" 
              markerWidth="10" 
              markerHeight="10" 
              refX="9" 
              refY="3" 
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
            </marker>
            <marker 
              id="arrowhead-miss" 
              markerWidth="10" 
              markerHeight="10" 
              refX="9" 
              refY="3" 
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
            </marker>
          </defs>

          {/* Draw edges first (behind nodes) */}
          {edges.map((edge, idx) => {
            const fromNode = nodes[edge.from];
            const toNode = nodes[edge.to];
            
            // Only draw edge if both nodes are in filtered view
            if (!fromNode || !toNode) return null;
            if (!filteredNodes.find(n => n.id === edge.from)) return null;
            if (!filteredNodes.find(n => n.id === edge.to)) return null;
            
            const fromPos = positions[edge.from];
            const toPos = positions[edge.to];
            
            return (
              <ShootoutEdge
                key={idx}
                fromPos={fromPos}
                toPos={toPos}
                type={edge.type}
                label={edge.label}
              />
            );
          })}

          {/* Draw nodes on top */}
          {filteredNodes.map(node => {
            const pos = positions[node.id];
            if (!pos) return null;

            return (
              <ShootoutNode
                key={node.id}
                node={node}
                position={pos}
                isHovered={hoveredNode === node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default ShootoutTree;