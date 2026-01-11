// ============================================
// FILE: src/utils/shootoutEdges.js
// ============================================
/**
 * @Purpose: Defines all connections between nodes
 * Structure: Exports getShootoutEdges() function returning an array of edge objects:
   * from: Source node ID
   * to: Destination node ID
   * label: 'Goal' or 'Miss'
   * type: 'goal' or 'miss'
 * Total Edges: 82 edges representing all possible transitions
 * Flow:
   * Each shooter node has 2 outgoing edges (goal/miss)
   * Edges connect sequentially through rounds
   * Terminal nodes have no outgoing edges
   * Sudden death edges only come from 3-3 tie states (line 73-81)
 */
export const getShootoutEdges = () => [
  // Start to Round 1
  { from: 'start', to: 'r1-0-0', label: 'Miss', type: 'miss' },
  { from: 'start', to: 'r1-1-0', label: 'Goal', type: 'goal' },
  
  // Round 1A to Round 1B
  { from: 'r1-0-0', to: 'r1-0-0-b', label: 'Miss', type: 'miss' },
  { from: 'r1-0-0', to: 'r1-0-1', label: 'Goal', type: 'goal' },
  { from: 'r1-1-0', to: 'r1-1-0-b', label: 'Miss', type: 'miss' },
  { from: 'r1-1-0', to: 'r1-1-1', label: 'Goal', type: 'goal' },
  
  // Round 1B to Round 2A
  { from: 'r1-0-0-b', to: 'r2-0-0', label: 'Miss', type: 'miss' },
  { from: 'r1-0-0-b', to: 'r2-1-0', label: 'Goal', type: 'goal' },
  { from: 'r1-0-1', to: 'r2-0-1', label: 'Miss', type: 'miss' },
  { from: 'r1-0-1', to: 'r2-1-1', label: 'Goal', type: 'goal' },
  { from: 'r1-1-0-b', to: 'r2-1-0', label: 'Miss', type: 'miss' },
  { from: 'r1-1-0-b', to: 'r2-2-0', label: 'Goal', type: 'goal' },
  { from: 'r1-1-1', to: 'r2-1-1', label: 'Miss', type: 'miss' },
  { from: 'r1-1-1', to: 'r2-2-1', label: 'Goal', type: 'goal' },
  
  // Round 2A to Round 2B
  { from: 'r2-0-0', to: 'r2-0-0-b', label: 'Miss', type: 'miss' },
  { from: 'r2-0-0', to: 'r2-0-1-b', label: 'Goal', type: 'goal' },
  { from: 'r2-0-1', to: 'r2-0-1-b', label: 'Miss', type: 'miss' },
  { from: 'r2-0-1', to: 'r2-0-2', label: 'Goal', type: 'goal' },
  { from: 'r2-1-0', to: 'r2-1-0-b', label: 'Miss', type: 'miss' },
  { from: 'r2-1-0', to: 'r2-1-1-b', label: 'Goal', type: 'goal' },
  { from: 'r2-1-1', to: 'r2-1-1-b', label: 'Miss', type: 'miss' },
  { from: 'r2-1-1', to: 'r2-1-2', label: 'Goal', type: 'goal' },
  { from: 'r2-2-0', to: 'r2-2-0-b', label: 'Miss', type: 'miss' },
  { from: 'r2-2-0', to: 'r2-2-1-b', label: 'Goal', type: 'goal' },
  { from: 'r2-2-1', to: 'r2-2-1-b', label: 'Miss', type: 'miss' },
  { from: 'r2-2-1', to: 'r2-2-2', label: 'Goal', type: 'goal' },
  
  // Round 2B to Round 3A
  { from: 'r2-0-0-b', to: 'r3-0-0', label: 'Miss', type: 'miss' },
  { from: 'r2-0-0-b', to: 'r3-1-0', label: 'Goal', type: 'goal' },
  { from: 'r2-0-1-b', to: 'r3-0-1', label: 'Miss', type: 'miss' },
  { from: 'r2-0-1-b', to: 'r3-1-1', label: 'Goal', type: 'goal' },
  { from: 'r2-1-0-b', to: 'r3-1-0', label: 'Miss', type: 'miss' },
  { from: 'r2-1-0-b', to: 'r3-2-0', label: 'Goal', type: 'goal' },
  { from: 'r2-1-1-b', to: 'r3-1-1', label: 'Miss', type: 'miss' },
  { from: 'r2-1-1-b', to: 'r3-2-1', label: 'Goal', type: 'goal' },
  { from: 'r2-1-2', to: 'r3-1-2', label: 'Miss', type: 'miss' },
  { from: 'r2-1-2', to: 'r3-2-2', label: 'Goal', type: 'goal' },
  { from: 'r2-2-1-b', to: 'r3-2-1', label: 'Miss', type: 'miss' },
  { from: 'r2-2-1-b', to: 'r3-3-1', label: 'Goal', type: 'goal' },
  { from: 'r2-2-2', to: 'r3-2-2', label: 'Miss', type: 'miss' },
  { from: 'r2-2-2', to: 'r3-3-2', label: 'Goal', type: 'goal' },
  
  // Round 3A to Round 3B
  { from: 'r3-0-0', to: 'r3-0-0-b', label: 'Miss', type: 'miss' },
  { from: 'r3-0-0', to: 'r3-0-1-b', label: 'Goal', type: 'goal' },
  { from: 'r3-0-1', to: 'r3-0-1-b', label: 'Miss', type: 'miss' },
  { from: 'r3-0-1', to: 'r3-0-2-b', label: 'Goal', type: 'goal' },
  { from: 'r3-1-0', to: 'r3-1-0-b', label: 'Miss', type: 'miss' },
  { from: 'r3-1-0', to: 'r3-1-1-b', label: 'Goal', type: 'goal' },
  { from: 'r3-1-1', to: 'r3-1-1-b', label: 'Miss', type: 'miss' },
  { from: 'r3-1-1', to: 'r3-1-2-b', label: 'Goal', type: 'goal' },
  { from: 'r3-1-2', to: 'r3-1-2-b', label: 'Miss', type: 'miss' },
  { from: 'r3-1-2', to: 'r3-1-3', label: 'Goal', type: 'goal' },
  { from: 'r3-2-1', to: 'r3-2-1-b', label: 'Miss', type: 'miss' },
  { from: 'r3-2-1', to: 'r3-2-2-b', label: 'Goal', type: 'goal' },
  { from: 'r3-2-2', to: 'r3-2-2-b', label: 'Miss', type: 'miss' },
  { from: 'r3-2-2', to: 'r3-2-3', label: 'Goal', type: 'goal' },
  { from: 'r3-3-2', to: 'r3-3-2-b', label: 'Miss', type: 'miss' },
  { from: 'r3-3-2', to: 'r3-3-3', label: 'Goal', type: 'goal' },
  
  // Round 3B to Sudden Death (from tie states only)
  { from: 'r3-0-0-b', to: 'sd-tie', label: 'Miss', type: 'miss' },
  { from: 'r3-0-0-b', to: 'sd-a-win', label: 'Goal', type: 'goal' },
  { from: 'r3-1-1-b', to: 'sd-tie', label: 'Miss', type: 'miss' },
  { from: 'r3-1-1-b', to: 'sd-a-win', label: 'Goal', type: 'goal' },
  { from: 'r3-2-2-b', to: 'sd-tie', label: 'Miss', type: 'miss' },
  { from: 'r3-2-2-b', to: 'sd-a-win', label: 'Goal', type: 'goal' },
  { from: 'r3-3-3', to: 'sd-tie', label: 'Miss', type: 'miss' },
  { from: 'r3-3-3', to: 'sd-a-win', label: 'Goal', type: 'goal' },
];