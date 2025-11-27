import { Award, Briefcase, Clock } from 'lucide-react';
import myPhoto from '../images/my pic.jpg'; // <-- replace with your actual photo path

const About = () => {
  const stats = [
    { icon: Clock, label: '7+ Years Experience', value: 'Professional Editing' },
    { icon: Briefcase, label: '70+ Projects Completed', value: 'Worldwide Clients' },
    { icon: Award, label: 'Award-Winning Editor', value: 'Industry Recognition' },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Picture */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent blur-3xl group-hover:blur-2xl transition-all" />
            <div className="relative rounded-lg overflow-hidden border border-red-900/30 backdrop-blur-sm bg-zinc-900/50">
              <div className="aspect-square flex items-center justify-center p-4">
                <img
                  src={myPhoto}
                  alt="Josh"
                  className="w-full h-full object-cover rounded-lg border-2 border-red-500/50 shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Crafting Emotion
              <span className="block text-red-500 mt-2">Through Editing</span>
            </h2>

            <div className="h-1 w-20 bg-red-500 mb-8" />

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Josh is a versatile video editor bringing stories to life across genres. From cinematic documentaries and movie trailers to weddings, marketing ads, and social media videos, he turns raw footage into captivating, high-quality visuals. With precision, creativity, and a cinematic touch, he delivers videos that engage, inspire, and leave a lasting impression.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Specializing in long-form documentaries, short-form videos, films, and YouTube content with a focus on storytelling, pacing, and emotional impact. Every frame is crafted to evoke emotion and keep audiences captivated.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-zinc-900/50 border border-red-900/30 p-6 rounded-lg hover:border-red-500/50 transition-all group backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <stat.icon className="text-red-500" size={24} />
                  </div>
                  <div>
                    <p className="text-red-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</p>
                    <p className="text-gray-400 text-sm">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
