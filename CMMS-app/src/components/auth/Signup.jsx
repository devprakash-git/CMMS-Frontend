import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Loader2, ArrowRight, Building, Hash } from 'lucide-react';
import { validateEmail, validatePassword, validateName, validateRequiredField } from '../../utils/validation';
import api from '../../Api';

export default function Signup({ setView }) {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', roll_no: '', hall_of_residence: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateName(formData.name)) return setError('Name must be at least 2 characters');
        if (!validateRequiredField(formData.roll_no)) return setError('Roll Number is required');
        if (!validateRequiredField(formData.hall_of_residence)) return setError('Hall of Residence is required');
        if (!validateEmail(formData.email)) return setError('Please enter a valid email address');
        if (!validatePassword(formData.password)) return setError('Password must be at least 8 characters, with 1 uppercase, 1 lowercase, and 1 number');
        if (formData.password !== formData.confirmPassword) return setError('Passwords do not match');

        setLoading(true);
        try {
            // Endpoint to hit the django backend signup
            const res = await api.post('/api/signup/', {
                name: formData.name,
                email: formData.email,
                roll_no: formData.roll_no,
                hall_of_residence: formData.hall_of_residence,
                password: formData.password
            });
            console.log('Signup Success:', res.data);
            alert('Signup Successful! You can now log in.');
            setView('login'); // Redirect to login view on success
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.detail || err.response?.data?.message || 'Error creating account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md"
        >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-400">Join us to start managing your assets</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
                {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        name="roll_no"
                        placeholder="Roll Number"
                        value={formData.roll_no}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                        name="hall_of_residence"
                        value={formData.hall_of_residence}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none text-gray-400"
                        required
                    >
                        <option value="" disabled className="bg-gray-900 text-gray-400">Select Hall of Residence</option>
                        <option value="Hall 1" className="bg-gray-900 text-white">Hall 1</option>
                        <option value="Hall 2" className="bg-gray-900 text-white">Hall 2</option>
                        <option value="Hall 3" className="bg-gray-900 text-white">Hall 3</option>
                        <option value="Hall 4" className="bg-gray-900 text-white">Hall 4</option>
                        <option value="Hall 5" className="bg-gray-900 text-white">Hall 5</option>
                        <option value="Hall 6" className="bg-gray-900 text-white">Hall 6</option>
                        <option value="Hall 7" className="bg-gray-900 text-white">Hall 7</option>
                        <option value="Hall 8" className="bg-gray-900 text-white">Hall 8</option>
                        <option value="Hall 9" className="bg-gray-900 text-white">Hall 9</option>
                        <option value="Hall 10" className="bg-gray-900 text-white">Hall 10</option>
                        <option value="Hall 11" className="bg-gray-900 text-white">Hall 11</option>
                        <option value="Hall 12" className="bg-gray-900 text-white">Hall 12</option>
                        <option value="Hall 13" className="bg-gray-900 text-white">Hall 13</option>
                        <option value="Hall 14" className="bg-gray-900 text-white">Hall 14</option>
                    </select>
                </div>

                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl py-3 font-medium transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 mt-2"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                        <>
                            Sign Up
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>

            <div className="mt-8 text-center text-gray-400 text-sm">
                Already have an account?{' '}
                <button
                    onClick={() => setView('login')}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                    Sign In
                </button>
            </div>
        </motion.div>
    );
}
