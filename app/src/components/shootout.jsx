// ============================================
// FILE: src/components/Shootout.jsx
// ============================================
/**
 * @Purpose: Calculates x,y coordinates for all nodes
 * State Management:
   * hoveredNode Tracks which node user is hovering over (string ID or null)
   * showPhase Controls which rounds are visible ('all', '1', '2', '3', or 'sd')
   * zoom (line 14): Zoom level for the tree visualization (default 0.8)
   * showLegend (line 15): Boolean to show/hide the color legend
 * Data Processing:
 * Position Details:
   * nodes Memoized call to getShootoutNodeData() -
     which returns all possible game states as an object keyed by node ID
   * filteredNodes (line 19-23): Computed based on showPhase filter:
       * 'all' → shows all nodes
       * 'sd' → shows only sudden death nodes (phase 4) plus the 3-3 node
       * '1'/'2'/'3' → shows nodes up to that phase number

 * Layout: Full-screen flex column with dark gradient background containing:
    1. <ShootoutHeader /> - top navigation bar
    2. <ShootoutLegend /> - conditionally rendered color key
    3. <ShootoutTree /> - main SVG visualization
    4. <ShootoutInfoPanel /> - conditionally rendered info panel when hovering

 * Assumptions:
   * Uses fixed positions, not dynamic layout algorithm
  * Assumes specific node width (120px referenced in edge calculations)
  * Tree grows wider at each level as number of possible states increases
 */
import React, { useState, useMemo } from 'react';
import ShootoutHeader from './ShootoutHeader';
import ShootoutLegend from './ShootoutLegend';
import ShootoutTree from './ShootoutTree';
import ShootoutInfoPanel from './ShootoutInfoPanel';
import { getShootoutNodeData } from '../utils/shootoutData';

/**
 * hovernode tracks which node the user is hovering over
 * showPhase controls which rounds are visible 1, 2, 3, sd
 * 
 */
const Shootout = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [showPhase, setShowPhase] = useState('all');
  const [zoom, setZoom] = useState(0.8);
  const [showLegend, setShowLegend] = useState(true);
  // returns all game staes
  const nodes = useMemo(() => getShootoutNodeData(), []);

  const filteredNodes = useMemo(() => {
    if (showPhase === 'all') return Object.values(nodes);
    if (showPhase === 'sd') return Object.values(nodes).filter(n => n.phase === 4 || n.id === 'r3-3-3');
    return Object.values(nodes).filter(n => n.phase <= parseInt(showPhase));
  }, [showPhase, nodes]);
  /**
   * ShootoutHeader = top nav bar
   * Legend = color key
   * tree = main SVG
   * InfoPanel = conditionally rendered info panel while hovering
   */
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex flex-col">
      <ShootoutHeader 
        showLegend={showLegend}
        setShowLegend={setShowLegend}
        showPhase={showPhase}
        setShowPhase={setShowPhase}
        zoom={zoom}
        setZoom={setZoom}
      />
      
      {showLegend && <ShootoutLegend />}
      
      <ShootoutTree 
        nodes={nodes}
        filteredNodes={filteredNodes}
        hoveredNode={hoveredNode}
        setHoveredNode={setHoveredNode}
        zoom={zoom}
      />
      
      {hoveredNode && (
        <ShootoutInfoPanel 
          node={nodes[hoveredNode]}
        />
      )}
    </div>
  );
};

export default Shootout;
