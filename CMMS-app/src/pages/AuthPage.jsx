import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';

export default function AuthPage() {
    // 'login', 'signup', or 'forgot-password'
    const [view, setView] = useState('login');

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0f1c] relative overflow-hidden font-sans">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]"
                />
            </div>

            {/* Main Container */}
            <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">

                {/* Brand/Logo Section (optional) */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-3"
                >
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        {/* Example Logo Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        CMMS Sys
                    </h1>
                </motion.div>

                {/* Glassmorphism Card containing the forms */}
                <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {view === 'login' && <Login key="login" setView={setView} />}
                        {view === 'signup' && <Signup key="signup" setView={setView} />}
                        {view === 'forgot-password' && <ForgotPassword key="forgot-password" setView={setView} />}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
