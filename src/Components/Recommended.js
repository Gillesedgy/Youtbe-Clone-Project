import VideoCard from "./VideoCard"

export default function Recommended() {
  // This will display the thumbnails and cideo descriptiion for user to click on 
 <VideoCard />

 let api_key =`AIzaSyCI95EW1HK6F0M4EW7Aza9Tl7KM2OQZHRc`
   
let video_http = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${api_key}`
// `https://www.googleapis.com/youtube/v3/videos?key=${api_key}`;
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http 
//   + new URLSearchParams({
//   // key: api_key,
//   part: 'snippet',
//   chart: 'mostPopular',
//   maxResults: 50,
//   regionCode: 'IN'
// })
)
.then(res => res.json())
.then(data => {
  // console.log(data.items)
  // data.items.forEach(item => {
  //     // getChannelIcon(item);
  // })
})
.catch(err => console.log(err));







  return ( 
    <div className="video">
     

       
    </div>

  )
} 
