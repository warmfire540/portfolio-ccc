import { useTheme } from 'utils/ThemeContext';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-indigo-900 bg-opacity-90 dark:bg-opacity-80 z-0"></div>
      {/* Animated background elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl animate-pulse"></div>
      <div
        className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-indigo-500 opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="absolute -bottom-24 left-1/3 w-64 h-64 rounded-full bg-indigo-800 opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Curiously Better Software Solutions
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-indigo-200">
              Transforming your complex business requirements into elegant
              technical solutions
            </h2>
            <p className="text-lg mb-8 text-gray-100">
              Curious Cat Consulting specializes in building high-quality,
              scalable software that delivers real business value through
              thoughtful architecture and engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="px-6 py-3 bg-white text-indigo-900 dark:bg-indigo-200 font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-indigo-300 transition-colors text-center"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-indigo-800 transition-colors text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md relative">
              <Logo
                fill={theme === 'dark' ? 'white' : 'darkblue'}
                style={{ width: `auto`, height: '100px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
