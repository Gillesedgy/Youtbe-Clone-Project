import VideoCard from "./VideoCard";
import "./Recommended.css";
export default function Recommended({ result }) {
  // This will display the thumbnails and cideo descriptiion for user to click on

  return (
    <div className="recommended">
      <h3>Rec Videos will appear here</h3>
      {console.log(result)}
    </div>
  );
}
