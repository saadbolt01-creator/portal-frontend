import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, ArrowRight, CheckCircle, Play, Star } from 'lucide-react';

const Landing: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const heroImages = [
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754556084/combined-enhanced_image-1024x591_pkpnc5.png',
    'https://res.cloudinary.com/drnak5yb2/image/upload/v1754555852/MPFM-with-SKID-1536x1187_sjrvdp.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-800/90 to-navy-700/85 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-700/85 z-10" />
              <img
                src={image}
                alt="Saher Flow Solutions"
                className="w-full h-full object-cover object-center"
                onError={handleImageError}
              />
            </div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-15">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center text-white">
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 text-yellow-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-md border border-yellow-400/30 shadow-lg">
                  <Star size={18} className="animate-pulse" />
                  Trusted by Industry Leaders Worldwide
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Revolutionary
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mt-4 drop-shadow-lg">
                    Flow Measurement
                  </span>
                  <span className="block mt-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Portal
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
                  Professional monitoring platform for advanced multiphase flow measurement systems. 
                  <span className="block mt-2 text-yellow-200">
                    Access real-time data, analytics, and comprehensive system management tools.
                  </span>
                </p>
              </div>

              {/* Enhanced Key Features Pills */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  { text: 'Real-time Analytics', color: 'from-blue-500/20 to-blue-400/20 border-blue-400/30' },
                  { text: 'Advanced Security', color: 'from-green-500/20 to-green-400/20 border-green-400/30' },
                  { text: 'Cloud Connectivity', color: 'from-purple-500/20 to-purple-400/20 border-purple-400/30' },
                  { text: 'Expert Support', color: 'from-orange-500/20 to-orange-400/20 border-orange-400/30' }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 bg-gradient-to-r ${feature.color} backdrop-blur-md px-6 py-4 rounded-full text-sm font-semibold border shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <CheckCircle size={18} className="text-yellow-400" />
                    <span className="text-white">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <Link
                  to="/signup"
                  className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 px-10 py-5 rounded-2xl font-bold text-xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
                >
                  Start Monitoring
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/login"
                  className="group inline-flex items-center justify-center gap-4 border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md shadow-xl hover:scale-105 transform hover:-translate-y-1"
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Access Portal
                </Link>
              </div>

              {/* Enhanced Stats with Better Design */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                  { value: '99.8%', label: 'Uptime', color: 'from-green-400 to-green-300' },
                  { value: '±2-5%', label: 'Accuracy', color: 'from-blue-400 to-blue-300' },
                  { value: '24/7', label: 'Support', color: 'from-purple-400 to-purple-300' },
                  { value: '50+', label: 'Deployments', color: 'from-orange-400 to-orange-300' }
                ].map((stat, idx) => (
                  <div key={idx} className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-4 rounded-full transition-all duration-500 ${
                currentSlide === index 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 w-12 shadow-lg shadow-yellow-500/50' 
                  : 'bg-white/40 hover:bg-white/60 w-4'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;