import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

const VideoModal = ({ videoId, onClose }: VideoModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-50"
      >
        <X size={32} />
      </button>

      <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden border-2 border-red-500/30">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoModal;
