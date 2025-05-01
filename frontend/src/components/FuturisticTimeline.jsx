import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Activity } from "lucide-react";

const FuturisticTimeline = ({ events = [] }) => {
  return (
    <div className="relative px-6">
      <div className="border-l-[2px] border-cyan-500/50 ml-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative pl-8 pb-8 group"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className="absolute top-1 left-[-0.6rem] w-4 h-4 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform shadow-lg" />

            <div className="glass p-4 rounded-xl backdrop-blur-md shadow-md hover:shadow-cyan-400/30 transition-shadow duration-300">
              <div className="flex items-center text-cyan-300 font-semibold mb-1 gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{event.date}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>

              <p className="text-sm text-gray-300">{event.description}</p>

              {event.location && (
                <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location}</span>
                </div>
              )}

              {event.status && (
                <div className="mt-2 text-emerald-400 flex items-center text-xs gap-1">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>{event.status}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FuturisticTimeline;
