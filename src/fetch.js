// const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${userinput}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`;

export function searchFetch(input) {
  let api_key =`AIzaSyCI95EW1HK6F0M4EW7Aza9Tl7KM2OQZHRc`

  let video_http = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&regionCode=US&key=${api_key}`
  // `https://www.googleapis.com/youtube/v3/videos?key=${api_key}`;
  let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
  
  return fetch(video_http 
  //   + new URLSearchParams({
  //   // key: api_key,
  //   part: 'snippet',
  //   chart: 'mostPopular',
  //   maxResults: 50,
  //   regionCode: 'IN'
  // })
  )
  .then(res => res.json())
  
  



  // return fetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
  // ).then((res) =>  console.log(res.json()));
 
}


