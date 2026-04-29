import { VideoText } from "../components/ui/video-text"

export default function VideoTextDemo() {
  return (
    <section className="w-full flex items-center justify-center pt-25 bg-[#E8E3DC]">

      <div className="relative w-full max-w-2xl h-[200px] flex items-center justify-center">

        <VideoText src="../public/videofondo.mp4">
         CARTA
        </VideoText>
      </div>

    </section>
    
  )
}