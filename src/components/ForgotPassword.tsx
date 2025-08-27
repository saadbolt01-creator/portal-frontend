import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex">
        {/* Left Side - Branded */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
          <div className="absolute inset-0 bg-black/30"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/drnak5yb2/image/upload/v1754555854/MPFM-SFS-3G-X-1536x1187_qhmxbs.png')`
            }}
          ></div>
          
          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Revolutionary 
                <span className="block text-yellow-400">Flow Measurement</span>
                Technology
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                We've sent you a secure link to reset your password. Check your email 
                and follow the instructions to regain access to your account.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Secure password recovery process</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Link expires in 24 hours for security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">24/7 support if you need assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Success Message */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12">
          <div className="mx-auto w-full max-w-md text-center">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-navy-900 mb-4">Check your email</h2>
            <p className="text-gray-600 mb-8">
              We've sent a password reset link to <strong>{email}</strong>
            </p>

            <div className="space-y-4 mb-8">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-navy-600 hover:bg-navy-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Send another email
              </button>
              
              <Link
                to="/login"
                className="block w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back to sign in
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Didn't receive the email? Check your spam folder or{' '}
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-navy-600 hover:text-navy-500 font-medium"
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branded */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
        <div className="absolute inset-0 bg-navy-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/drnak5yb2/image/upload/v1754555854/MPFM-SFS-3G-X-1536x1187_qhmxbs.png')`
          }}
        ></div>
        
        <div className="relative z-10 flex flex-col justify-start pt-20 p-12 text-white">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Reset Password for
              <span className="block text-yellow-400">Saher Flow Solutions</span>
              Portal
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Forgot your password? No worries. We'll send you a secure link to reset 
              your password and get you back to your professional monitoring dashboard 
              quickly and securely.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-300">Quick and secure reset process</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-300">Email verification for security</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-300">Instant access once reset</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-md">
          {/* Back to Login Link */}
          <Link 
            to="/login" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-navy-900 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to sign in
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-2">Forgot password?</h2>
            <p className="text-gray-600">
              No worries, we'll send you reset instructions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-all duration-200"
            >
              Reset password
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-navy-600 hover:text-navy-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;