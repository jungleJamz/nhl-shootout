// ============================================
// FILE: src/utils/shootoutData.js
// ============================================
/**
 * @Purpose: Central data store for all possible game states
 * Structure: Exports getShootoutNodeData() function that returns an object where:
  * Keys are node IDs (e.g., 'start', 'r1-0-0', 'r3-2-1-b')
  * Values are node objects with properties:
    * id: Unique identifier
    * score: [teamA, teamB] score array
    * odds: [teamA, teamB] betting odds
    * phase: 0-4 (0=start, 1-3=rounds, 4=sudden death)
    * round: Round number or 'SD'
    * shooter: 'A' or 'B' or null
    * terminal: 'A' or 'B' if game over (optional)
    * text: Custom text for sudden death nodes (optional)

 * Naming Convention:
  * Format: r{round}-{scoreA}-{scoreB}[-b]
  * [-b] indicates Team B is shooting.
  * EX:
    *  'r1-0-0' (round 1, 0-0, Team A shoots), 'r2-1-2' (round 2, 1-2, Team B shoots)

* Total Nodes (Complete Data Structure): 72 total game states:
  * Round 0: 1 initial start node
  * Round 1: 6 nodes (2 for A, 4 for B)
  * Round 2: 15 nodes (6 for A, 9 for B)
  * Round 3: 28 nodes (12 for A, 16 for B)


  * 3 sudden death outcomes
  * Multiple terminal states (marked with terminal property)
 */
export const getShootoutNodeData = () => ({
  start: { id: 'start', score: [0, 0], odds: [2.00, 2.00], phase: 0, round: 0, shooter: null },
  
  // Round 1 - Team A shoots
  'r1-0-0': { id: 'r1-0-0', score: [0, 0], odds: [2.56, 1.64], phase: 1, round: 1, shooter: 'A' },
  'r1-1-0': { id: 'r1-1-0', score: [1, 0], odds: [1.39, 3.57], phase: 1, round: 1, shooter: 'A' },
  
  // Round 1 - Team B responds
  'r1-0-0-b': { id: 'r1-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 1, round: 1, shooter: 'B' },
  'r1-0-1': { id: 'r1-0-1', score: [0, 1], odds: [5.88, 1.20], phase: 1, round: 1, shooter: 'B' },
  'r1-1-0-b': { id: 'r1-1-0-b', score: [1, 0], odds: [1.20, 5.88], phase: 1, round: 1, shooter: 'B' },
  'r1-1-1': { id: 'r1-1-1', score: [1, 1], odds: [2.00, 2.00], phase: 1, round: 1, shooter: 'B' },
  
  // Round 2 - Team A shoots
  'r2-0-0': { id: 'r2-0-0', score: [0, 0], odds: [2.63, 1.61], phase: 2, round: 2, shooter: 'A' },
  'r2-0-1': { id: 'r2-0-1', score: [0, 1], odds: [14.29, 1.08], phase: 2, round: 2, shooter: 'A' },
  'r2-1-0': { id: 'r2-1-0', score: [1, 0], odds: [1.32, 4.17], phase: 2, round: 2, shooter: 'A' },
  'r2-1-1': { id: 'r2-1-1', score: [1, 1], odds: [2.63, 1.61], phase: 2, round: 2, shooter: 'A' },
  'r2-2-0': { id: 'r2-2-0', score: [2, 0], odds: [1.04, 25.00], phase: 2, round: 2, shooter: 'A' },
  'r2-2-1': { id: 'r2-2-1', score: [2, 1], odds: [1.32, 4.17], phase: 2, round: 2, shooter: 'A' },
  
  // Round 2 - Team B responds
  'r2-0-0-b': { id: 'r2-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
  'r2-0-1-b': { id: 'r2-0-1-b', score: [0, 1], odds: [9.09, 1.12], phase: 2, round: 2, shooter: 'B' },
  'r2-0-2': { id: 'r2-0-2', score: [0, 2], odds: [null, 1.00], phase: 2, round: 2, shooter: 'B', terminal: 'B' },
  'r2-1-0-b': { id: 'r2-1-0-b', score: [1, 0], odds: [1.12, 9.09], phase: 2, round: 2, shooter: 'B' },
  'r2-1-1-b': { id: 'r2-1-1-b', score: [1, 1], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
  'r2-1-2': { id: 'r2-1-2', score: [1, 2], odds: [9.09, 1.12], phase: 2, round: 2, shooter: 'B' },
  'r2-2-0-b': { id: 'r2-2-0-b', score: [2, 0], odds: [1.00, null], phase: 2, round: 2, shooter: 'B', terminal: 'A' },
  'r2-2-1-b': { id: 'r2-2-1-b', score: [2, 1], odds: [1.12, 9.09], phase: 2, round: 2, shooter: 'B' },
  'r2-2-2': { id: 'r2-2-2', score: [2, 2], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
  
  // Round 3 - Team A shoots
  'r3-0-0': { id: 'r3-0-0', score: [0, 0], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
  'r3-0-1': { id: 'r3-0-1', score: [0, 1], odds: [6.25, 1.19], phase: 3, round: 3, shooter: 'A' },
  'r3-0-2': { id: 'r3-0-2', score: [0, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'A', terminal: 'B' },
  'r3-1-0': { id: 'r3-1-0', score: [1, 0], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
  'r3-1-1': { id: 'r3-1-1', score: [1, 1], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
  'r3-1-2': { id: 'r3-1-2', score: [1, 2], odds: [6.25, 1.19], phase: 3, round: 3, shooter: 'A' },
  'r3-2-0': { id: 'r3-2-0', score: [2, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
  'r3-2-1': { id: 'r3-2-1', score: [2, 1], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
  'r3-2-2': { id: 'r3-2-2', score: [2, 2], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
  'r3-3-0': { id: 'r3-3-0', score: [3, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
  'r3-3-1': { id: 'r3-3-1', score: [3, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
  'r3-3-2': { id: 'r3-3-2', score: [3, 2], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
  
  // Round 3 - Team B responds
  'r3-0-0-b': { id: 'r3-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
  'r3-0-1-b': { id: 'r3-0-1-b', score: [0, 1], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
  'r3-0-2-b': { id: 'r3-0-2-b', score: [0, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
  'r3-0-3': { id: 'r3-0-3', score: [0, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
  'r3-1-0-b': { id: 'r3-1-0-b', score: [1, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
  'r3-1-1-b': { id: 'r3-1-1-b', score: [1, 1], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
  'r3-1-2-b': { id: 'r3-1-2-b', score: [1, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
  'r3-1-3': { id: 'r3-1-3', score: [1, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
  'r3-2-0-b': { id: 'r3-2-0-b', score: [2, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
  'r3-2-1-b': { id: 'r3-2-1-b', score: [2, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
  'r3-2-2-b': { id: 'r3-2-2-b', score: [2, 2], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
  'r3-2-3': { id: 'r3-2-3', score: [2, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
  'r3-3-0-b': { id: 'r3-3-0-b', score: [3, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
  'r3-3-1-b': { id: 'r3-3-1-b', score: [3, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
  'r3-3-2-b': { id: 'r3-3-2-b', score: [3, 2], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
  'r3-3-3': { id: 'r3-3-3', score: [3, 3], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
  
  // Sudden Death
  'sd-tie': { id: 'sd-tie', score: null, odds: [2.00, 2.00], phase: 4, round: 'SD', shooter: null, text: 'Tie - Continues' },
  'sd-a-win': { id: 'sd-a-win', score: null, odds: [1.00, null], phase: 4, round: 'SD', terminal: 'A', text: 'Team A Wins' },
  'sd-b-win': { id: 'sd-b-win', score: null, odds: [null, 1.00], phase: 4, round: 'SD', terminal: 'B', text: 'Team B Wins' },
});