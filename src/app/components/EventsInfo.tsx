'use client';

import React from 'react';
import { FaRegCalendarAlt, FaMapMarkerAlt, FaRegBuilding } from 'react-icons/fa';
import { IconWrapper } from '../../components/IconWrapper';

const EventsInfo = () => {
  return (
    <div className="flex items-center justify-center py-3 mx-auto">
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto rounded-lg shadow-xl text-xs md:text-sm lg:text-md xl:text-xl">
        
        {/* Number of Days */}
        <div className="flex items-center gap-2">
          <IconWrapper icon={FaRegCalendarAlt as any} className="text-[#eee712] text-sm" />
          <p className="text-xs text-slate-300"> <span className="font-bold">1 Day</span></p>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2">
          <IconWrapper icon={FaRegBuilding as any} className="text-[#eee712] text-sm" />
          <p className="text-xs text-slate-300"> <span className="font-bold">Pride Inn Azure, Westlands</span></p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <IconWrapper icon={FaMapMarkerAlt as any} className="text-[#eee712] text-sm" />
          <p className="text-xs text-slate-300"> <span className="font-bold">Nairobi, Kenya</span></p>
        </div>
      </div>
    </div>
  );
}

export default EventsInfo;
