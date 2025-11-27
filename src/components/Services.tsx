import { Film, Youtube, Clapperboard, Sparkles, Scissors, Volume2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Film,
      title: 'Long-Form Documentary Editing',
      description: 'Compelling narrative structures for feature-length documentaries with emotional depth and pacing.',
    },
    {
      icon: Youtube,
      title: 'YouTube Editing',
      description: 'Engaging short-form content optimized for audience retention and viral potential.',
    },
    {
      icon: Clapperboard,
      title: 'Cinematic Film Editing',
      description: 'High-end cinematic editing with professional-grade transitions and storytelling techniques.',
    },
    {
      icon: Sparkles,
      title: 'Visual Effects & Motion Graphics',
      description: 'Dynamic motion graphics, VFX, and title sequences that elevate your production value.',
    },
    {
      icon: Scissors,
      title: 'Story Reconstruction & Editing',
      description: 'Transform raw footage into coherent, emotionally resonant narratives that captivate viewers.',
    },
    {
      icon: Volume2,
      title: 'Audio Cleanup & Sound Design',
      description: 'Professional audio mixing, dialogue enhancement, and immersive sound design.',
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Services</span>
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/30 border-2 border-red-900/30 rounded-lg p-8 hover:border-red-500/70 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  <service.icon className="text-red-500" size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
