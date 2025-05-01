import React from "react";
import { BrainCircuit, LayoutDashboard, Settings, BarChart2, Command, Power } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "NeuroGrid", icon: BrainCircuit, path: "/neurogrid" },
  { label: "Analytics", icon: BarChart2, path: "/analytics" },
  { label: "Commands", icon: Command, path: "/commands" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="bg-black/80 text-white h-screen w-20 xl:w-64 flex flex-col p-4 shadow-lg backdrop-blur-lg border-r border-cyan-900">
      <div className="flex items-center justify-center xl:justify-start mb-10">
        <motion.h1
          className="text-xl font-bold text-cyan-400 hidden xl:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          MasterX
        </motion.h1>
        <motion.div
          className="xl:hidden"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <BrainCircuit className="text-cyan-400" />
        </motion.div>
      </div>

      <nav className="flex-1 space-y-4">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-cyan-900/40 hover:text-cyan-300 ${
                isActive ? "bg-cyan-800/50 text-cyan-300" : "text-white/80"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span className="hidden xl:inline font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      <motion.button
        className="mt-auto flex items-center gap-3 px-4 py-2 rounded-xl text-red-400 hover:bg-red-800/40 hover:text-red-300 transition-all"
        whileHover={{ scale: 1.05 }}
      >
        <Power className="w-5 h-5" />
        <span className="hidden xl:inline">Shutdown</span>
      </motion.button>
    </aside>
  );
};

export default Sidebar;
