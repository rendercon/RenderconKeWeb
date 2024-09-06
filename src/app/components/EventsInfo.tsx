'use client';

import React from 'react';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaRegBuilding } from 'react-icons/fa';

const EventsInfo = () => {
  return (
    <div className="flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-start gap-8 max-w-4xl mx-auto px-4 rounded-lg shadow-xl">
        
        {/* Number of Days */}
        <div className="flex items-center gap-2">
          <FaRegCalendarAlt className="text-[#eee712] text-sm" />
          <p className="text-xs text-slate-300"> <span className="font-bold">2 Days</span></p>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2">
          <FaRegBuilding className="text-[#eee712] text-sm" />
          <p className="text-xs text-slate-300"> <span className="font-bold">TBA</span></p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#eee712] text-sm" />
          <p className="text-xs text-slate-300"> <span className="font-bold">Nairobi, Kenya</span></p>
        </div>

        {/* Pulse effect */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#eee712] animate-pulse"></div>
        </div>

        {/* Additional Message */}
        <div className="text-center">
        </div>
      </div>
    </div>
  );
}

export default EventsInfo;
