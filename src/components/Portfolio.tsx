import { Play } from 'lucide-react';

interface PortfolioProps {
  onVideoSelect: (videoId: string) => void;
}

const Portfolio = ({ onVideoSelect }: PortfolioProps) => {
  const videos = [
    {
      id: 'YiieaILe9dE',
      title: 'the Dark, Disturbing, Disgusting TV Game Shows Iceberg',
      category: 'Documentary',
    },
      {
      id: 'M9EWAeNqyhc',
      title: 'Dark & Disturbing 600lb Life Iceberg (Trailer)',
      category: 'Documentary',
    },
    {
      id: 'fJWlbbT9Z9Q',
      title: 'the Dark & Disturbing Evil Mothers Iceberg',
      category: 'Documentary',
    },
   
    {
      id: '4-YyfAKkZXE',
      title: 'THIS NIGHT - Written by Joshua Bamidele - Latest Nigerian Movie',
      category: 'Film',
    },
    {
      id: 'yCRXE5ZityM',
      title: 'Just One Day (2025) | Latest Gospel Movie That Will Touch Your Heart',
      category: 'Film',
    },
    {
      id: 'Z6waR7kXn1c',
      title: 'THE LIONESS - Latest Gospel Movie - FejosBaba TV',
      category: 'Film',
    },
     {
      id: 'UrJHK3Bs8i8',
      title: 'FOLASHOLA ',
      category: 'Wedding',
    },
    {
      id: '2Ijsnigx5as',
      title: 'Traditional Wedding Folashola',
      category: 'Wedding',
    },
      {
      id: 'UrJHK3Bs8i8',
      title: 'FOLASHOLA ',
      category: 'Wedding',
    },
    {
      id: 'Dy47apj1k_8',
      title: 'Chitchat with GeePee ll We are Singles ll Episode 1 ll Who are YOU??',
      category: 'PodCast',
    },{
      id: 'E6FerniU4ZQ',
      title: 'Chitchat with GeePee ll Episode 2 ll We are Singles ll What do you want?',
      category: 'PodCast',
    },{
      id: 'DVr15NwNo_o',
      title: 'Chitchat with GeePee ll episode 004 ll the question of WHY???',
      category: 'PodCast',
    },
    {
      id: 'x0y_ZXPdDW0',
      title: 'LIONESS Movie Trailer',
      category: 'Trailer',
    },
    {
      id: '_E-sDr9wEZ4',
      title: 'Soul Trade Trailer',
      category: 'Trailer',
    },{
      id: 'xiy0IErRWLk',
      title: 'Just One DayTrailer',
      category: 'Trailer',
    },
     {
      id: 'v1UVzY90ItQ',
      title: 'MUDDLED ll Latest Gospel Movie',
      category: 'Movies',
    },
      {
      id: '1sA9x8SRXa4',
      title: 'Spoken Word Video- Measuring Angel',
      category: 'Spoken Words',
    },
    
   {
      id: 'dGplaxxsvkM',
      title: 'SLAVE SYNDROME || Sharon Fellowship || Liwem Films, Nigeria',
      category: 'Movie',
    },
   
  ];

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-950/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of cinematic storytelling and editorial excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-zinc-900 rounded-lg overflow-hidden cursor-pointer border-2 border-red-900/30 hover:border-red-500/70 transition-all duration-300"
              onClick={() => onVideoSelect(video.id)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-red-500 group-hover:scale-110 group-hover:bg-red-500/30 transition-all">
                  <Play className="text-red-500 fill-red-500 ml-1" size={24} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-500 text-xs uppercase tracking-wider mb-2">
                  {video.category}
                </span>
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
              </div>

              <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
