import YScrollScreen from "./screens/video_scroll_screen/YScrollScreen";
import VideoCard from "./screens/video_scroll_screen/components/VideoCard";
import "./screens/video_scroll_screen/components/VideoCard.css";

function Layout() {
  return (
    <YScrollScreen
      screens={
        <>
          <VideoCard color="green" />
          <VideoCard color="blue" />
        </>
      }
    />
  );
}

export default Layout;
