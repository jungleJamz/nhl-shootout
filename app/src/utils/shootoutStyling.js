// ============================================
// FILE: src/utils/shootoutStyling.js
// ============================================
/**
 * @Purpose: Determines node colors based on game state
 * Logic: Returns {bg, border, text} object based on node properties:
   1. Terminal states (line 5-6):
     * Team A wins: Green (#10b981 bg, #059669 border)
     * Team B wins: Red (#ef4444 bg, #dc2626 border)
   2. Sudden Death (line 7): Yellow (#fef3c7 bg, #f59e0b border) 
   3. Odds-based coloring (line 8-11):
     * Team A advantage (odds[0] < odds[1] - 0.5): Light green
     * Team B advantage (odds[1] < odds[0] - 0.5): Light red
   4. Default (line 12): Gray for even odds
 */
export const getShootoutNodeStyle = (node) => {
  if (node.terminal === 'A') return { bg: '#10b981', border: '#059669', text: '#ffffff' };
  if (node.terminal === 'B') return { bg: '#ef4444', border: '#dc2626', text: '#ffffff' };
  if (node.round === 'SD') return { bg: '#fef3c7', border: '#f59e0b', text: '#000000' };
  if (node.odds[0] && node.odds[1] && node.odds[0] < node.odds[1] - 0.5) 
    return { bg: '#d1fae5', border: '#10b981', text: '#000000' };
  if (node.odds[0] && node.odds[1] && node.odds[1] < node.odds[0] - 0.5) 
    return { bg: '#fee2e2', border: '#ef4444', text: '#000000' };
  return { bg: '#f3f4f6', border: '#9ca3af', text: '#000000' };
};