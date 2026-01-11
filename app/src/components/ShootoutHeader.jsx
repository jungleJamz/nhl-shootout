// ============================================
// FILE: src/components/ShootoutHeader.jsx
// ============================================
import React from 'react';
import { Info } from 'lucide-react';
import ShootoutControls from './ShootoutControls';
/**
 * @Purpose: Top navigation bar with title and controls
 * Props: Receives all control state and setters from parent
 * Structure:
  * Dark slate background with border (line 10)
  * Left side: Title "Penalty Shootout Decision Tree" + subtitle
  * Right side:
  * Info button (line 18-23): Toggles legend visibility using lucide's <Info> icon
  <ShootoutControls /> component for phase selection and zoom
 */
const ShootoutHeader = ({ showLegend, setShowLegend, showPhase, setShowPhase, zoom, setZoom }) => {
  return (
    <div className="bg-slate-800 shadow-lg border-b border-slate-700 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-white">Shootout Decision Tree</h1>
          <p className="text-sm text-slate-300 mt-1">Complete probability visualization</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLegend(!showLegend)}
            className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors text-white"
          >
            <Info className="w-5 h-5" />
          </button>
          
          <ShootoutControls 
            showPhase={showPhase}
            setShowPhase={setShowPhase}
            zoom={zoom}
            setZoom={setZoom}
          />
        </div>
      </div>
    </div>
  );
};

export default ShootoutHeader;