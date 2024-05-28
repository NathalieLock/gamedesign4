import Video from "next-video";
import awesomeVideo from "https://axk3pvjzeu6rv0tu.public.blob.vercel-storage.com/Otherworld%20Guardian-TkFsi7gzmOv43YCTUqzZUYgLMcLGWB.mp4";

export default function VideoDemo() {
  return <Video src={awesomeVideo} />;
}
