// ============================================
// FILE: src/utils/shootoutPositioning.js
// ============================================
/**
 * @Purpose: Calculates x,y coordinates for all nodes
 * Layout:
   * Horizontal spacing: 140px between nodes 
   * Vertical spacing: ~150px between rounds
   * Tree expands horizontally as rounds progress
 * Position Details:
   * Start: Centered at (3500, 50)
   * Round 1: 2 nodes → 4 nodes (expanding from center)
   * Round 2: 6 nodes → 9 nodes
   * Round 3: 12 nodes → 16 nodes (widest layer)
   * Sudden Death: 3 nodes centered

 * Assumptions:
   * Uses fixed positions, not dynamic layout algorithm
  * Assumes specific node width (120px referenced in edge calculations)
  * Tree grows wider at each level as number of possible states increases
 */
export const getShootoutNodePositions = () => {
  const positions = {};
  const xSpacing = 140;
  
  // Start
  positions['start'] = { x: 3500, y: 50 };
  
  // Round 1 - 2 nodes
  positions['r1-0-0'] = { x: 3430, y: 200 };
  positions['r1-1-0'] = { x: 3570, y: 200 };
  
  // Round 1B - 4 nodes
  positions['r1-0-0-b'] = { x: 3290, y: 350 };
  positions['r1-0-1'] = { x: 3430, y: 350 };
  positions['r1-1-0-b'] = { x: 3570, y: 350 };
  positions['r1-1-1'] = { x: 3710, y: 350 };
  
  // Round 2A - 6 nodes
  let r2aStart = 3150;
  positions['r2-0-0'] = { x: r2aStart, y: 500 };
  positions['r2-0-1'] = { x: r2aStart + xSpacing, y: 500 };
  positions['r2-1-0'] = { x: r2aStart + xSpacing * 2, y: 500 };
  positions['r2-1-1'] = { x: r2aStart + xSpacing * 3, y: 500 };
  positions['r2-2-0'] = { x: r2aStart + xSpacing * 4, y: 500 };
  positions['r2-2-1'] = { x: r2aStart + xSpacing * 5, y: 500 };
  
  // Round 2B - 9 nodes
  let r2bStart = 3010;
  positions['r2-0-0-b'] = { x: r2bStart, y: 650 };
  positions['r2-0-1-b'] = { x: r2bStart + xSpacing, y: 650 };
  positions['r2-0-2'] = { x: r2bStart + xSpacing * 2, y: 650 };
  positions['r2-1-0-b'] = { x: r2bStart + xSpacing * 3, y: 650 };
  positions['r2-1-1-b'] = { x: r2bStart + xSpacing * 4, y: 650 };
  positions['r2-1-2'] = { x: r2bStart + xSpacing * 5, y: 650 };
  positions['r2-2-0-b'] = { x: r2bStart + xSpacing * 6, y: 650 };
  positions['r2-2-1-b'] = { x: r2bStart + xSpacing * 7, y: 650 };
  positions['r2-2-2'] = { x: r2bStart + xSpacing * 8, y: 650 };
  
  // Round 3A - 12 nodes
  let r3aStart = 2800;
  const r3aNodes = ['r3-0-0', 'r3-0-1', 'r3-0-2', 'r3-1-0', 'r3-1-1', 'r3-1-2', 
                    'r3-2-0', 'r3-2-1', 'r3-2-2', 'r3-3-0', 'r3-3-1', 'r3-3-2'];
  r3aNodes.forEach((id, i) => {
    positions[id] = { x: r3aStart + (xSpacing * i), y: 800 };
  });
  
  // Round 3B - 16 nodes
  let r3bStart = 2520;
  const r3bNodes = ['r3-0-0-b', 'r3-0-1-b', 'r3-0-2-b', 'r3-0-3', 
                    'r3-1-0-b', 'r3-1-1-b', 'r3-1-2-b', 'r3-1-3',
                    'r3-2-0-b', 'r3-2-1-b', 'r3-2-2-b', 'r3-2-3',
                    'r3-3-0-b', 'r3-3-1-b', 'r3-3-2-b', 'r3-3-3'];
  r3bNodes.forEach((id, i) => {
    positions[id] = { x: r3bStart + (xSpacing * i), y: 950 };
  });
  
  // Sudden Death - 3 nodes
  positions['sd-tie'] = { x: 3360, y: 1100 };
  positions['sd-a-win'] = { x: 3500, y: 1100 };
  positions['sd-b-win'] = { x: 3640, y: 1100 };
  
  return positions;
};