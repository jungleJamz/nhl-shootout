// ============================================
// FILE: src/components/ShootoutControls.jsx
// ============================================
/**
 * @Purpose: Phase filter dropdown and zoom controls
 * Props: showPhase, setShowPhase, zoom, setZoom
 * zoom buttons: Uses Lucid ions <ZoomOut><ZoomIn>
  * zoomOut: decrease by 0.1 max .3
  * zoomint: increase .1 max 1.5
 */
import React from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';

const ShootoutControls = ({ showPhase, setShowPhase, zoom, setZoom }) => {
  return (
    <>
      <select
        value={showPhase}
        onChange={(e) => setShowPhase(e.target.value)}
        className="px-3 py-2 border border-slate-600 bg-slate-700 text-white rounded-lg text-sm"
      >
        <option value="all">All Phases</option>
        <option value="1">Round 1</option>
        <option value="2">Round 1-2</option>
        <option value="3">Round 1-3</option>
        <option value="sd">Sudden Death Only</option>
      </select>
      
      <div className="flex gap-1 border border-slate-600 bg-slate-700 rounded-lg p-1">
        <button
          onClick={() => setZoom(Math.max(0.3, zoom - 0.1))}
          className="p-1 hover:bg-slate-600 rounded text-white"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoom(Math.min(1.5, zoom + 0.1))}
          className="p-1 hover:bg-slate-600 rounded text-white"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default ShootoutControls;
