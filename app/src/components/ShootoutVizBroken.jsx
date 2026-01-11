// // ShootoutViz.jsx
// // Complete React component for Interactive Penalty Shootout Visualizer

// import React, { useState, useMemo } from 'react';
// import { Info, ZoomIn, ZoomOut } from 'lucide-react';

// const ShootoutViz = () => {
//   const [hoveredNode, setHoveredNode] = useState(null);
//   const [showPhase, setShowPhase] = useState('all');
//   const [zoom, setZoom] = useState(0.8);
//   const [showLegend, setShowLegend] = useState(true);

//   // Complete node data structure - ALL states
//   const nodes = useMemo(() => ({
//     start: { id: 'start', score: [0, 0], odds: [2.00, 2.00], phase: 0, round: 0, shooter: null },
    
//     // Round 1 - Team A shoots
//     'r1-0-0': { id: 'r1-0-0', score: [0, 0], odds: [2.56, 1.64], phase: 1, round: 1, shooter: 'A' },
//     'r1-1-0': { id: 'r1-1-0', score: [1, 0], odds: [1.39, 3.57], phase: 1, round: 1, shooter: 'A' },
    
//     // Round 1 - Team B responds
//     'r1-0-0-b': { id: 'r1-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 1, round: 1, shooter: 'B' },
//     'r1-0-1': { id: 'r1-0-1', score: [0, 1], odds: [5.88, 1.20], phase: 1, round: 1, shooter: 'B' },
//     'r1-1-0-b': { id: 'r1-1-0-b', score: [1, 0], odds: [1.20, 5.88], phase: 1, round: 1, shooter: 'B' },
//     'r1-1-1': { id: 'r1-1-1', score: [1, 1], odds: [2.00, 2.00], phase: 1, round: 1, shooter: 'B' },
    
//     // Round 2 - Team A shoots
//     'r2-0-0': { id: 'r2-0-0', score: [0, 0], odds: [2.63, 1.61], phase: 2, round: 2, shooter: 'A' },
//     'r2-0-1': { id: 'r2-0-1', score: [0, 1], odds: [14.29, 1.08], phase: 2, round: 2, shooter: 'A' },
//     'r2-1-0': { id: 'r2-1-0', score: [1, 0], odds: [1.32, 4.17], phase: 2, round: 2, shooter: 'A' },
//     'r2-1-1': { id: 'r2-1-1', score: [1, 1], odds: [2.63, 1.61], phase: 2, round: 2, shooter: 'A' },
//     'r2-2-0': { id: 'r2-2-0', score: [2, 0], odds: [1.04, 25.00], phase: 2, round: 2, shooter: 'A' },
//     'r2-2-1': { id: 'r2-2-1', score: [2, 1], odds: [1.32, 4.17], phase: 2, round: 2, shooter: 'A' },
    
//     // Round 2 - Team B responds
//     'r2-0-0-b': { id: 'r2-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
//     'r2-0-1-b': { id: 'r2-0-1-b', score: [0, 1], odds: [9.09, 1.12], phase: 2, round: 2, shooter: 'B' },
//     'r2-0-2': { id: 'r2-0-2', score: [0, 2], odds: [null, 1.00], phase: 2, round: 2, shooter: 'B', terminal: 'B' },
//     'r2-1-0-b': { id: 'r2-1-0-b', score: [1, 0], odds: [1.12, 9.09], phase: 2, round: 2, shooter: 'B' },
//     'r2-1-1-b': { id: 'r2-1-1-b', score: [1, 1], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
//     'r2-1-2': { id: 'r2-1-2', score: [1, 2], odds: [9.09, 1.12], phase: 2, round: 2, shooter: 'B' },
//     'r2-2-0-b': { id: 'r2-2-0-b', score: [2, 0], odds: [1.00, null], phase: 2, round: 2, shooter: 'B', terminal: 'A' },
//     'r2-2-1-b': { id: 'r2-2-1-b', score: [2, 1], odds: [1.12, 9.09], phase: 2, round: 2, shooter: 'B' },
//     'r2-2-2': { id: 'r2-2-2', score: [2, 2], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
    
//     // Round 3 - Team A shoots
//     'r3-0-0': { id: 'r3-0-0', score: [0, 0], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
//     'r3-0-1': { id: 'r3-0-1', score: [0, 1], odds: [6.25, 1.19], phase: 3, round: 3, shooter: 'A' },
//     'r3-0-2': { id: 'r3-0-2', score: [0, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'A', terminal: 'B' },
//     'r3-1-0': { id: 'r3-1-0', score: [1, 0], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
//     'r3-1-1': { id: 'r3-1-1', score: [1, 1], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
//     'r3-1-2': { id: 'r3-1-2', score: [1, 2], odds: [6.25, 1.19], phase: 3, round: 3, shooter: 'A' },
//     'r3-2-0': { id: 'r3-2-0', score: [2, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
//     'r3-2-1': { id: 'r3-2-1', score: [2, 1], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
//     'r3-2-2': { id: 'r3-2-2', score: [2, 2], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
//     'r3-3-0': { id: 'r3-3-0', score: [3, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
//     'r3-3-1': { id: 'r3-3-1', score: [3, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
//     'r3-3-2': { id: 'r3-3-2', score: [3, 2], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
    
//     // Round 3 - Team B responds
//     'r3-0-0-b': { id: 'r3-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
//     'r3-0-1-b': { id: 'r3-0-1-b', score: [0, 1], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-0-2-b': { id: 'r3-0-2-b', score: [0, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-0-3': { id: 'r3-0-3', score: [0, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-1-0-b': { id: 'r3-1-0-b', score: [1, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-1-1-b': { id: 'r3-1-1-b', score: [1, 1], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
//     'r3-1-2-b': { id: 'r3-1-2-b', score: [1, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-1-3': { id: 'r3-1-3', score: [1, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-2-0-b': { id: 'r3-2-0-b', score: [2, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-2-1-b': { id: 'r3-2-1-b', score: [2, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-2-2-b': { id: 'r3-2-2-b', score: [2, 2], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
//     'r3-2-3': { id: 'r3-2-3', score: [2, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-3-0-b': { id: 'r3-3-0-b', score: [3, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-3-1-b': { id: 'r3-3-1-b', score: [3, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-3-2-b': { id: 'r3-3-2-b', score: [3, 2], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-3-3': { id: 'r3-3-3', score: [3, 3], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
    
//     // Sudden Death
//     'sd-tie': { id: 'sd-tie', score: null, odds: [2.00, 2.00], phase: 4, round: 'SD', shooter: null, text: 'Tie - Continues' },
//     'sd-a-win': { id: 'sd-a-win', score: null, odds: [1.00, null], phase: 4, round: 'SD', terminal: 'A', text: 'Team A Wins' },
//     'sd-b-win': { id: 'sd-b-win', score: null, odds: [null, 1.00], phase: 4, round: 'SD', terminal: 'B', text: 'Team B Wins' },
//   }), []);

//   const getNodeStyle = (node) => {
//     if (node.terminal === 'A') return { bg: '#10b981', border: '#059669', text: '#ffffff' };
//     if (node.terminal === 'B') return { bg: '#ef4444', border: '#dc2626', text: '#ffffff' };
//     if (node.round === 'SD') return { bg: '#fef3c7', border: '#f59e0b', text: '#000000' };
//     if (node.odds[0] && node.odds[1] && node.odds[0] < node.odds[1] - 0.5) 
//       return { bg: '#d1fae5', border: '#10b981', text: '#000000' };
//     if (node.odds[0] && node.odds[1] && node.odds[1] < node.odds[0] - 0.5) 
//       return { bg: '#fee2e2', border: '#ef4444', text: '#000000' };
//     return { bg: '#f3f4f6', border: '#9ca3af', text: '#000000' };
//   };

//   const filteredNodes = useMemo(() => {
//     if (showPhase === 'all') return Object.values(nodes);
//     if (showPhase === 'sd') return Object.values(nodes).filter(n => n.phase === 4 || n.id === 'r3-3-3');
//     return Object.values(nodes).filter(n => n.phase <= parseInt(showPhase));
//   }, [showPhase, nodes]);

//   function getNodePositions() {
//     const positions = {};
//     const nodeWidth = 120;
//     const nodeHeight = 70;
//     const xSpacing = 140;
//     const ySpacing = 100;
    
//     // Start
//     positions['start'] = { x: 3500, y: 50 };
    
//     // Round 1 - 2 nodes
//     positions['r1-0-0'] = { x: 3430, y: 200 };
//     positions['r1-1-0'] = { x: 3570, y: 200 };
    
//     // Round 1B - 4 nodes
//     positions['r1-0-0-b'] = { x: 3290, y: 350 };
//     positions['r1-0-1'] = { x: 3430, y: 350 };
//     positions['r1-1-0-b'] = { x: 3570, y: 350 };
//     positions['r1-1-1'] = { x: 3710, y: 350 };
    
//     // Round 2A - 6 nodes
//     let r2aStart = 3150;
//     positions['r2-0-0'] = { x: r2aStart, y: 500 };
//     positions['r2-0-1'] = { x: r2aStart + xSpacing, y: 500 };
//     positions['r2-1-0'] = { x: r2aStart + xSpacing * 2, y: 500 };
//     positions['r2-1-1'] = { x: r2aStart + xSpacing * 3, y: 500 };
//     positions['r2-2-0'] = { x: r2aStart + xSpacing * 4, y: 500 };
//     positions['r2-2-1'] = { x: r2aStart + xSpacing * 5, y: 500 };
    
//     // Round 2B - 9 nodes
//     let r2bStart = 3010;
//     positions['r2-0-0-b'] = { x: r2bStart, y: 650 };
//     positions['r2-0-1-b'] = { x: r2bStart + xSpacing, y: 650 };
//     positions['r2-0-2'] = { x: r2bStart + xSpacing * 2, y: 650 };
//     positions['r2-1-0-b'] = { x: r2bStart + xSpacing * 3, y: 650 };
//     positions['r2-1-1-b'] = { x: r2bStart + xSpacing * 4, y: 650 };
//     positions['r2-1-2'] = { x: r2bStart + xSpacing * 5, y: 650 };
//     positions['r2-2-0-b'] = { x: r2bStart + xSpacing * 6, y: 650 };
//     positions['r2-2-1-b'] = { x: r2bStart + xSpacing * 7, y: 650 };
//     positions['r2-2-2'] = { x: r2bStart + xSpacing * 8, y: 650 };
    
//     // Round 3A - 12 nodes
//     let r3aStart = 2800;
//     const r3aNodes = ['r3-0-0', 'r3-0-1', 'r3-0-2', 'r3-1-0', 'r3-1-1', 'r3-1-2', 
//                       'r3-2-0', 'r3-2-1', 'r3-2-2', 'r3-3-0', 'r3-3-1', 'r3-3-2'];
//     r3aNodes.forEach((id, i) => {
//       positions[id] = { x: r3aStart + (xSpacing * i), y: 800 };
//     });
    
//     // Round 3B - 16 nodes
//     let r3bStart = 2520;
//     const r3bNodes = ['r3-0-0-b', 'r3-0-1-b', 'r3-0-2-b', 'r3-0-3', 
//                       'r3-1-0-b', 'r3-1-1-b', 'r3-1-2-b', 'r3-1-3',
//                       'r3-2-0-b', 'r3-2-1-b', 'r3-2-2-b', 'r3-2-3',
//                       'r3-3-0-b', 'r3-3-1-b', 'r3-3-2-b', 'r3-3-3'];
//     r3bNodes.forEach((id, i) => {
//       positions[id] = { x: r3bStart + (xSpacing * i), y: 950 };
//     });
    
//     // Sudden Death - 3 nodes
//     positions['sd-tie'] = { x: 3360, y: 1100 };
//     positions['sd-a-win'] = { x: 3500, y: 1100 };
//     positions['sd-b-win'] = { x: 3640, y: 1100 };
    
//     return positions;
//   }

//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-slate-800 shadow-lg border-b border-slate-700 p-4">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           <div>
//             <h1 className="text-2xl font-bold text-white">Penalty Shootout Decision Tree</h1>
//             <p className="text-sm text-slate-300 mt-1">Complete probability visualization</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setShowLegend(!showLegend)}
//               className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-white"
//             >
//               <Info className="w-5 h-5" />
//             </button>
//             <select
//               value={showPhase}
//               onChange={(e) => setShowPhase(e.target.value)}
//               className="px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg text-sm"
//             >
//               <option value="all">All Phases</option>
//               <option value="1">Round 1</option>
//               <option value="2">Round 1-2</option>
//               <option value="3">Round 1-3</option>
//               <option value="sd">Sudden Death Only</option>
//             </select>
//             <div className="flex gap-1 border border-slate-600 bg-slate-700 rounded-lg p-1">
//               <button
//                 onClick={() => setZoom(Math.max(0.3, zoom - 0.1))}
//                 className="p-1 hover:bg-slate-600 rounded text-white"
//               >
//                 <ZoomOut className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setZoom(Math.min(1.5, zoom + 0.1))}
//                 className="p-1 hover:bg-slate-600 rounded text-white"
//               >
//                 <ZoomIn className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       {showLegend && (
//         <div className="bg-slate-700 border-b border-slate-600 p-3">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-wrap gap-6 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-green-200 border-2 border-green-500 rounded"></div>
//                 <span className="text-white">Team A Advantage</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-red-200 border-2 border-red-500 rounded"></div>
//                 <span className="text-white">Team B Advantage</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-gray-100 border-2 border-gray-400 rounded"></div>
//                 <span className="text-white">Even Odds</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-green-500 border-2 border-green-700 rounded"></div>
//                 <span className="text-white">Team A Wins</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-red-500 border-2 border-red-700 rounded"></div>
//                 <span className="text-white">Team B Wins</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
//                 <span className="text-white">Sudden Death</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Visualization */}
//       <div className="flex-1 overflow-auto p-4">
//         <div 
//           className="min-w-max mx-auto"
//           style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
//         >
//           <svg width="7000" height="1300" className="mx-auto">
//             {/* Draw nodes */}
//             {filteredNodes.map(node => {
//               const positions = getNodePositions();
//               const pos = positions[node.id];
//               if (!pos) return null;

//               const style = getNodeStyle(node);

//               return (
//                 <g
//                   key={node.id}
//                   transform={`translate(${pos.x}, ${pos.y})`}
//                   onMouseEnter={() => setHoveredNode(node.id)}
//                   onMouseLeave={() => setHoveredNode(null)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <rect
//                     width="120"
//                     height="70"
//                     rx="6"
//                     fill={style.bg}
//                     stroke={style.border}
//                     strokeWidth="2"
//                     className={hoveredNode === node.id ? 'opacity-100' : 'opacity-90'}
//                   />
//                   {node.text ? (
//                     <text 
//                       x="60" 
//                       y="38" 
//                       textAnchor="middle" 
//                       fontSize="12" 
//                       fontWeight="bold"
//                       fill={style.text}
//                     >
//                       {node.text}
//                     </text>
//                   ) : (
//                     <>
//                       <text 
//                         x="60" 
//                         y="22" 
//                         textAnchor="middle" 
//                         fontSize="14" 
//                         fontWeight="bold"
//                         fill={style.text}
//                       >
//                         {node.score ? `${node.score[0]}-${node.score[1]}` : 'Start'}
//                       </text>
//                       <text 
//                         x="60" 
//                         y="40" 
//                         textAnchor="middle" 
//                         fontSize="10"
//                         fill={style.text}
//                         opacity="0.8"
//                       >
//                         {node.shooter ? `Team ${node.shooter}` : 'Begin'}
//                       </text>
//                       <text 
//                         x="60" 
//                         y="56" 
//                         textAnchor="middle" 
//                         fontSize="10" 
//                         fontWeight="500"
//                         fill={style.text}
//                       >
//                         {node.odds[0] ? node.odds[0].toFixed(2) : '—'} | {node.odds[1] ? node.odds[1].toFixed(2) : '—'}
//                       </text>
//                     </>
//                   )}
//                 </g>
//               );
//             })}
//           </svg>
//         </div>
//       </div>

//       {/* Info Panel */}
//       {hoveredNode && (
//         <div className="bg-slate-800 border-t border-slate-700 p-4 shadow-lg">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-white mb-1">
//                   {nodes[hoveredNode]?.terminal 
//                     ? `Game Over - Team ${nodes[hoveredNode].terminal} Wins!`
//                     : `Round ${nodes[hoveredNode]?.round} ${nodes[hoveredNode]?.shooter ? `- Team ${nodes[hoveredNode].shooter} shoots` : ''}`
//                   }
//                 </h3>
//                 <p className="text-sm text-slate-300">
//                   Score: {nodes[hoveredNode]?.score?.join('-') || 'Starting position'} | 
//                   Betting odds: Team A {nodes[hoveredNode]?.odds[0]?.toFixed(2) || '—'} / 
//                   Team B {nodes[hoveredNode]?.odds[1]?.toFixed(2) || '—'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShootoutViz;


// src/components/ShootoutViz.jsx
// Complete React component for Interactive Penalty Shootout Visualizer

// import React, { useState, useMemo } from 'react';
// import { Info, ZoomIn, ZoomOut } from 'lucide-react';

// const ShootoutViz = () => {
//   const [hoveredNode, setHoveredNode] = useState(null);
//   const [showPhase, setShowPhase] = useState('all');
//   const [zoom, setZoom] = useState(0.8);
//   const [showLegend, setShowLegend] = useState(true);

//   // Complete node data structure - ALL states
//   const nodes = useMemo(() => ({
//     start: { id: 'start', score: [0, 0], odds: [2.00, 2.00], phase: 0, round: 0, shooter: null },
    
//     // Round 1 - Team A shoots
//     'r1-0-0': { id: 'r1-0-0', score: [0, 0], odds: [2.56, 1.64], phase: 1, round: 1, shooter: 'A' },
//     'r1-1-0': { id: 'r1-1-0', score: [1, 0], odds: [1.39, 3.57], phase: 1, round: 1, shooter: 'A' },
    
//     // Round 1 - Team B responds
//     'r1-0-0-b': { id: 'r1-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 1, round: 1, shooter: 'B' },
//     'r1-0-1': { id: 'r1-0-1', score: [0, 1], odds: [5.88, 1.20], phase: 1, round: 1, shooter: 'B' },
//     'r1-1-0-b': { id: 'r1-1-0-b', score: [1, 0], odds: [1.20, 5.88], phase: 1, round: 1, shooter: 'B' },
//     'r1-1-1': { id: 'r1-1-1', score: [1, 1], odds: [2.00, 2.00], phase: 1, round: 1, shooter: 'B' },
    
//     // Round 2 - Team A shoots
//     'r2-0-0': { id: 'r2-0-0', score: [0, 0], odds: [2.63, 1.61], phase: 2, round: 2, shooter: 'A' },
//     'r2-0-1': { id: 'r2-0-1', score: [0, 1], odds: [14.29, 1.08], phase: 2, round: 2, shooter: 'A' },
//     'r2-1-0': { id: 'r2-1-0', score: [1, 0], odds: [1.32, 4.17], phase: 2, round: 2, shooter: 'A' },
//     'r2-1-1': { id: 'r2-1-1', score: [1, 1], odds: [2.63, 1.61], phase: 2, round: 2, shooter: 'A' },
//     'r2-2-0': { id: 'r2-2-0', score: [2, 0], odds: [1.04, 25.00], phase: 2, round: 2, shooter: 'A' },
//     'r2-2-1': { id: 'r2-2-1', score: [2, 1], odds: [1.32, 4.17], phase: 2, round: 2, shooter: 'A' },
    
//     // Round 2 - Team B responds
//     'r2-0-0-b': { id: 'r2-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
//     'r2-0-1-b': { id: 'r2-0-1-b', score: [0, 1], odds: [9.09, 1.12], phase: 2, round: 2, shooter: 'B' },
//     'r2-0-2': { id: 'r2-0-2', score: [0, 2], odds: [null, 1.00], phase: 2, round: 2, shooter: 'B', terminal: 'B' },
//     'r2-1-0-b': { id: 'r2-1-0-b', score: [1, 0], odds: [1.12, 9.09], phase: 2, round: 2, shooter: 'B' },
//     'r2-1-1-b': { id: 'r2-1-1-b', score: [1, 1], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
//     'r2-1-2': { id: 'r2-1-2', score: [1, 2], odds: [9.09, 1.12], phase: 2, round: 2, shooter: 'B' },
//     'r2-2-0-b': { id: 'r2-2-0-b', score: [2, 0], odds: [1.00, null], phase: 2, round: 2, shooter: 'B', terminal: 'A' },
//     'r2-2-1-b': { id: 'r2-2-1-b', score: [2, 1], odds: [1.12, 9.09], phase: 2, round: 2, shooter: 'B' },
//     'r2-2-2': { id: 'r2-2-2', score: [2, 2], odds: [2.00, 2.00], phase: 2, round: 2, shooter: 'B' },
    
//     // Round 3 - Team A shoots
//     'r3-0-0': { id: 'r3-0-0', score: [0, 0], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
//     'r3-0-1': { id: 'r3-0-1', score: [0, 1], odds: [6.25, 1.19], phase: 3, round: 3, shooter: 'A' },
//     'r3-0-2': { id: 'r3-0-2', score: [0, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'A', terminal: 'B' },
//     'r3-1-0': { id: 'r3-1-0', score: [1, 0], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
//     'r3-1-1': { id: 'r3-1-1', score: [1, 1], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
//     'r3-1-2': { id: 'r3-1-2', score: [1, 2], odds: [6.25, 1.19], phase: 3, round: 3, shooter: 'A' },
//     'r3-2-0': { id: 'r3-2-0', score: [2, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
//     'r3-2-1': { id: 'r3-2-1', score: [2, 1], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
//     'r3-2-2': { id: 'r3-2-2', score: [2, 2], odds: [2.94, 1.52], phase: 3, round: 3, shooter: 'A' },
//     'r3-3-0': { id: 'r3-3-0', score: [3, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
//     'r3-3-1': { id: 'r3-3-1', score: [3, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'A', terminal: 'A' },
//     'r3-3-2': { id: 'r3-3-2', score: [3, 2], odds: [1.19, 6.25], phase: 3, round: 3, shooter: 'A' },
    
//     // Round 3 - Team B responds
//     'r3-0-0-b': { id: 'r3-0-0-b', score: [0, 0], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
//     'r3-0-1-b': { id: 'r3-0-1-b', score: [0, 1], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-0-2-b': { id: 'r3-0-2-b', score: [0, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-0-3': { id: 'r3-0-3', score: [0, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-1-0-b': { id: 'r3-1-0-b', score: [1, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-1-1-b': { id: 'r3-1-1-b', score: [1, 1], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
//     'r3-1-2-b': { id: 'r3-1-2-b', score: [1, 2], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-1-3': { id: 'r3-1-3', score: [1, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-2-0-b': { id: 'r3-2-0-b', score: [2, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-2-1-b': { id: 'r3-2-1-b', score: [2, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-2-2-b': { id: 'r3-2-2-b', score: [2, 2], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
//     'r3-2-3': { id: 'r3-2-3', score: [2, 3], odds: [null, 1.00], phase: 3, round: 3, shooter: 'B', terminal: 'B' },
//     'r3-3-0-b': { id: 'r3-3-0-b', score: [3, 0], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-3-1-b': { id: 'r3-3-1-b', score: [3, 1], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-3-2-b': { id: 'r3-3-2-b', score: [3, 2], odds: [1.00, null], phase: 3, round: 3, shooter: 'B', terminal: 'A' },
//     'r3-3-3': { id: 'r3-3-3', score: [3, 3], odds: [2.00, 2.00], phase: 3, round: 3, shooter: 'B' },
    
//     // Sudden Death
//     'sd-tie': { id: 'sd-tie', score: null, odds: [2.00, 2.00], phase: 4, round: 'SD', shooter: null, text: 'Tie - Continues' },
//     'sd-a-win': { id: 'sd-a-win', score: null, odds: [1.00, null], phase: 4, round: 'SD', terminal: 'A', text: 'Team A Wins' },
//     'sd-b-win': { id: 'sd-b-win', score: null, odds: [null, 1.00], phase: 4, round: 'SD', terminal: 'B', text: 'Team B Wins' },
//   }), []);

//   const getNodeStyle = (node) => {
//     if (node.terminal === 'A') return { bg: '#10b981', border: '#059669', text: '#ffffff' };
//     if (node.terminal === 'B') return { bg: '#ef4444', border: '#dc2626', text: '#ffffff' };
//     if (node.round === 'SD') return { bg: '#fef3c7', border: '#f59e0b', text: '#000000' };
//     if (node.odds[0] && node.odds[1] && node.odds[0] < node.odds[1] - 0.5) 
//       return { bg: '#d1fae5', border: '#10b981', text: '#000000' };
//     if (node.odds[0] && node.odds[1] && node.odds[1] < node.odds[0] - 0.5) 
//       return { bg: '#fee2e2', border: '#ef4444', text: '#000000' };
//     return { bg: '#f3f4f6', border: '#9ca3af', text: '#000000' };
//   };

//   const filteredNodes = useMemo(() => {
//     if (showPhase === 'all') return Object.values(nodes);
//     if (showPhase === 'sd') return Object.values(nodes).filter(n => n.phase === 4 || n.id === 'r3-3-3');
//     return Object.values(nodes).filter(n => n.phase <= parseInt(showPhase));
//   }, [showPhase, nodes]);

//   function getNodePositions() {
//     const positions = {};
//     const nodeWidth = 120;
//     const nodeHeight = 70;
//     const xSpacing = 140;
//     const ySpacing = 100;
    
//     // Start
//     positions['start'] = { x: 3500, y: 50 };
    
//     // Round 1 - 2 nodes
//     positions['r1-0-0'] = { x: 3430, y: 200 };
//     positions['r1-1-0'] = { x: 3570, y: 200 };
    
//     // Round 1B - 4 nodes
//     positions['r1-0-0-b'] = { x: 3290, y: 350 };
//     positions['r1-0-1'] = { x: 3430, y: 350 };
//     positions['r1-1-0-b'] = { x: 3570, y: 350 };
//     positions['r1-1-1'] = { x: 3710, y: 350 };
    
//     // Round 2A - 6 nodes
//     let r2aStart = 3150;
//     positions['r2-0-0'] = { x: r2aStart, y: 500 };
//     positions['r2-0-1'] = { x: r2aStart + xSpacing, y: 500 };
//     positions['r2-1-0'] = { x: r2aStart + xSpacing * 2, y: 500 };
//     positions['r2-1-1'] = { x: r2aStart + xSpacing * 3, y: 500 };
//     positions['r2-2-0'] = { x: r2aStart + xSpacing * 4, y: 500 };
//     positions['r2-2-1'] = { x: r2aStart + xSpacing * 5, y: 500 };
    
//     // Round 2B - 9 nodes
//     let r2bStart = 3010;
//     positions['r2-0-0-b'] = { x: r2bStart, y: 650 };
//     positions['r2-0-1-b'] = { x: r2bStart + xSpacing, y: 650 };
//     positions['r2-0-2'] = { x: r2bStart + xSpacing * 2, y: 650 };
//     positions['r2-1-0-b'] = { x: r2bStart + xSpacing * 3, y: 650 };
//     positions['r2-1-1-b'] = { x: r2bStart + xSpacing * 4, y: 650 };
//     positions['r2-1-2'] = { x: r2bStart + xSpacing * 5, y: 650 };
//     positions['r2-2-0-b'] = { x: r2bStart + xSpacing * 6, y: 650 };
//     positions['r2-2-1-b'] = { x: r2bStart + xSpacing * 7, y: 650 };
//     positions['r2-2-2'] = { x: r2bStart + xSpacing * 8, y: 650 };
    
//     // Round 3A - 12 nodes
//     let r3aStart = 2800;
//     const r3aNodes = ['r3-0-0', 'r3-0-1', 'r3-0-2', 'r3-1-0', 'r3-1-1', 'r3-1-2', 
//                       'r3-2-0', 'r3-2-1', 'r3-2-2', 'r3-3-0', 'r3-3-1', 'r3-3-2'];
//     r3aNodes.forEach((id, i) => {
//       positions[id] = { x: r3aStart + (xSpacing * i), y: 800 };
//     });
    
//     // Round 3B - 16 nodes
//     let r3bStart = 2520;
//     const r3bNodes = ['r3-0-0-b', 'r3-0-1-b', 'r3-0-2-b', 'r3-0-3', 
//                       'r3-1-0-b', 'r3-1-1-b', 'r3-1-2-b', 'r3-1-3',
//                       'r3-2-0-b', 'r3-2-1-b', 'r3-2-2-b', 'r3-2-3',
//                       'r3-3-0-b', 'r3-3-1-b', 'r3-3-2-b', 'r3-3-3'];
//     r3bNodes.forEach((id, i) => {
//       positions[id] = { x: r3bStart + (xSpacing * i), y: 950 };
//     });
    
//     // Sudden Death - 3 nodes
//     positions['sd-tie'] = { x: 3360, y: 1100 };
//     positions['sd-a-win'] = { x: 3500, y: 1100 };
//     positions['sd-b-win'] = { x: 3640, y: 1100 };
    
//     return positions;
//   }

//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-slate-800 shadow-lg border-b border-slate-700 p-4">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           <div>
//             <h1 className="text-2xl font-bold text-white">Penalty Shootout Decision Tree</h1>
//             <p className="text-sm text-slate-300 mt-1">Complete probability visualization</p>
//           </div>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setShowLegend(!showLegend)}
//               className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-white"
//             >
//               <Info className="w-5 h-5" />
//             </button>
//             <select
//               value={showPhase}
//               onChange={(e) => setShowPhase(e.target.value)}
//               className="px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg text-sm"
//             >
//               <option value="all">All Phases</option>
//               <option value="1">Round 1</option>
//               <option value="2">Round 1-2</option>
//               <option value="3">Round 1-3</option>
//               <option value="sd">Sudden Death Only</option>
//             </select>
//             <div className="flex gap-1 border border-slate-600 bg-slate-700 rounded-lg p-1">
//               <button
//                 onClick={() => setZoom(Math.max(0.3, zoom - 0.1))}
//                 className="p-1 hover:bg-slate-600 rounded text-white"
//               >
//                 <ZoomOut className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => setZoom(Math.min(1.5, zoom + 0.1))}
//                 className="p-1 hover:bg-slate-600 rounded text-white"
//               >
//                 <ZoomIn className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       {showLegend && (
//         <div className="bg-slate-700 border-b border-slate-600 p-3">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-wrap gap-6 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-green-200 border-2 border-green-500 rounded"></div>
//                 <span className="text-white">Team A Advantage</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-red-200 border-2 border-red-500 rounded"></div>
//                 <span className="text-white">Team B Advantage</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-gray-100 border-2 border-gray-400 rounded"></div>
//                 <span className="text-white">Even Odds</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-green-500 border-2 border-green-700 rounded"></div>
//                 <span className="text-white">Team A Wins</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-red-500 border-2 border-red-700 rounded"></div>
//                 <span className="text-white">Team B Wins</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
//                 <span className="text-white">Sudden Death</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Visualization */}
//       <div className="flex-1 overflow-auto p-4">
//         <div 
//           className="min-w-max mx-auto"
//           style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
//         >
//           <svg width="7000" height="1300" className="mx-auto">
//             {/* Draw nodes */}
//             {filteredNodes.map(node => {
//               const positions = getNodePositions();
//               const pos = positions[node.id];
//               if (!pos) return null;

//               const style = getNodeStyle(node);

//               return (
//                 <g
//                   key={node.id}
//                   transform={`translate(${pos.x}, ${pos.y})`}
//                   onMouseEnter={() => setHoveredNode(node.id)}
//                   onMouseLeave={() => setHoveredNode(null)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <rect
//                     width="120"
//                     height="70"
//                     rx="6"
//                     fill={style.bg}
//                     stroke={style.border}
//                     strokeWidth="2"
//                     className={hoveredNode === node.id ? 'opacity-100' : 'opacity-90'}
//                   />
//                   {node.text ? (
//                     <text 
//                       x="60" 
//                       y="38" 
//                       textAnchor="middle" 
//                       fontSize="12" 
//                       fontWeight="bold"
//                       fill={style.text}
//                     >
//                       {node.text}
//                     </text>
//                   ) : (
//                     <>
//                       <text 
//                         x="60" 
//                         y="22" 
//                         textAnchor="middle" 
//                         fontSize="14" 
//                         fontWeight="bold"
//                         fill={style.text}
//                       >
//                         {node.score ? `${node.score[0]}-${node.score[1]}` : 'Start'}
//                       </text>
//                       <text 
//                         x="60" 
//                         y="40" 
//                         textAnchor="middle" 
//                         fontSize="10"
//                         fill={style.text}
//                         opacity="0.8"
//                       >
//                         {node.shooter ? `Team ${node.shooter}` : 'Begin'}
//                       </text>
//                       <text 
//                         x="60" 
//                         y="56" 
//                         textAnchor="middle" 
//                         fontSize="10" 
//                         fontWeight="500"
//                         fill={style.text}
//                       >
//                         {node.odds[0] ? node.odds[0].toFixed(2) : '—'} | {node.odds[1] ? node.odds[1].toFixed(2) : '—'}
//                       </text>
//                     </>
//                   )}
//                 </g>
//               );
//             })}
//           </svg>
//         </div>
//       </div>

//       {/* Info Panel */}
//       {hoveredNode && (
//         <div className="bg-slate-800 border-t border-slate-700 p-4 shadow-lg">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-white mb-1">
//                   {nodes[hoveredNode]?.terminal 
//                     ? `Game Over - Team ${nodes[hoveredNode].terminal} Wins!`
//                     : `Round ${nodes[hoveredNode]?.round} ${nodes[hoveredNode]?.shooter ? `- Team ${nodes[hoveredNode].shooter} shoots` : ''}`
//                   }
//                 </h3>
//                 <p className="text-sm text-slate-300">
//                   Score: {nodes[hoveredNode]?.score?.join('-') || 'Starting position'} | 
//                   Betting odds: Team A {nodes[hoveredNode]?.odds[0]?.toFixed(2) || '—'} / 
//                   Team B {nodes[hoveredNode]?.odds[1]?.toFixed(2) || '—'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShootoutViz;