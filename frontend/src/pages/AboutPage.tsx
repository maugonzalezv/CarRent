import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Acerca de</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Plataforma de Alquiler de Vehículos
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Facilitando el alquiler de vehículos con tecnología de vanguardia.
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">MG</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Desarrollado por Mauricio González
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Fullstack Developer
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Tecnologías utilizadas</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                    <svg className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium">React</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                    <svg className="h-10 w-10 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.44 3.04L12 1 4.56 3.04 3 10l1.56 6.96L12 23l6.44-6.04L20 10l-0.56-6.96zM12 20.48L7.92 16H12v-3H7.92l4.08-4.48L16.08 12H12v3h4.08L12 20.48z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium">TypeScript</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                    <svg className="h-10 w-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium">Tailwind CSS</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
                    <svg className="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.498.165-.771.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.97.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.092.073-.147.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.01-.789-1.32-2.291-1.32-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
                    </svg>
                    <span className="mt-2 text-sm font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 px-4 py-4 sm:px-6">
              <div className="text-sm text-center">
                <p className="font-medium text-blue-900">
                  © 2023 CarRent - Plataforma de Alquiler de Vehículos. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 