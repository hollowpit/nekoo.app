
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="font-codec text-5xl md:text-6xl font-bold mb-2">
              <span className="text-purple-500">Nekoo</span>
            </h1>
            <h2 className="font-codec text-4xl md:text-5xl font-bold mb-6">
              Full-featured manga reader
            </h2>
            <p className="text-xl mb-8">
              Discover and read manga, manhwa, comics, and more – easier than ever on your device.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Get started
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Download
              </button>
            </div>
          </div>
          
          <div className="relative w-64 h-[500px]">
            <Image 
              src="/phone-mockup.png" 
              alt="Nekoo App Screenshot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Tracking</h3>
            <p className="text-gray-300 mb-4">Automatically keep track of your manga with MyAnimeList, AniList, Kitsu, and more.</p>
            <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
              Setup tracking
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Customization</h3>
            <p className="text-gray-300 mb-4">Make it yours with multiple reading modes, custom color filters, and many other settings.</p>
            <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="w-12 h-12 bg-yellow-500/20 flex items-center justify-center rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Extensions</h3>
            <p className="text-gray-300 mb-4">Bring your own content from a variety of sources.</p>
            <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
              Explore extensions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nekoo App</p>
        </footer>
      </div>
    </main>
  );
}
