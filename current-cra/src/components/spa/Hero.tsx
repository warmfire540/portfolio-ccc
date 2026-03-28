import {
  ArrowRight,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

/**
 * Hero component renders the main hero section of the SPA landing page.
 *
 * Features:
 * - Modern animated gradient background with floating gradient orbs and particles.
 * - Prominent heading and subtitle with gradient text effects.
 * - Call-to-action buttons for exploring services and starting a project.
 * - Stats/features cards displaying experience, projects delivered, and client satisfaction.
 * - Animated scroll indicator at the bottom.
 *
 * Uses Tailwind CSS for styling and animation.
 *
 * @component
 * @returns {JSX.Element} The rendered hero section.
 */
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-teal-900 to-primary-800 dark:from-gray-900 dark:via-primary-900 dark:to-gray-800"></div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-primary-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => {
          const particleId = `particle-${i}-${Math.random()
            .toString(36)
            .substring(2, 9)}`;
          return (
            <div
              key={particleId}
              className={`absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 pb-16 md:pb-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white mb-8 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span className="text-sm font-medium">
                Curiously Better Software
              </span>
            </div>

            {/* Main heading with gradient text */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">
                Building the
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Future of Software
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
              Transforming complex business challenges into elegant, scalable
              solutions through curiosity-driven development and architectural
              excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="#services"
                className="group relative px-8 py-4 bg-white text-primary-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 flex items-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-white/30 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <Zap className="mr-2 w-5 h-5 text-yellow-300" />
                Start Your Project
              </a>
            </div>
          </div>

          {/* Stats/Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                number: '10+',
                label: 'Years Experience',
                icon: <Rocket className="w-8 h-8 text-blue-300" />,
              },
              {
                number: '20+',
                label: 'Projects Delivered',
                icon: <TrendingUp className="w-8 h-8 text-teal-300" />,
              },
              {
                number: '100%',
                label: 'Client Satisfaction',
                icon: <Target className="w-8 h-8 text-pink-300" />,
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile/tablet where stats cards overlap */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
