// const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${userinput}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`;

export function searchFetch(input) {
  
// console.log(process.env.REACT_APP_API_KEY2)
// console.log("yo")
  let video_http = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&regionCode=US&key=${process.env.REACT_APP_API_KEY2}`

  // `https://www.googleapis.com/youtube/v3/videos?key=${api_key}`;
  // let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
  
  // return fetch(video_http 

  // // //   + new URLSearchParams({
  // // //   // key: api_key,
  // // //   part: 'snippet',
  // // //   chart: 'mostPopular',
  // // //   maxResults: 50,
  // // //   regionCode: 'IN'
  // // // })
  //  )
  //  .then(res => res.json())
  //  .then((data)=> 
  // //  console.log(data, "^^^", data.items[0].snippet.title) 
  //  data.items.map((resu)=>{
  //   // resu.snippet.title
  //   console.log(resu, resu.snippet.title)
  //  })
  //  )
  //  .catch((err)=>{console.log(err)})
  
  



  // return fetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
  // ).then((res) =>  console.log(res.json()));

  //! 
  // let video_http = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&q=${input}&regionCode=US&key=${api_key}`
  // // `https://www.googleapis.com/youtube/v3/videos?key=${api_key}`;
  // let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
  
  //  fetch(video_http 
  // //   + new URLSearchParams({
  // //   key: api_key,
  // // part: 'snippet',
  // //   chart: 'mostPopular',
  // //    maxResults: 50,
  // //  regionCode: 'IN'
  // //  })
  // )
  // .then(res => res.json())
  // .then(data => {
  // console.log(data.items)


  // //   // data.items.forEach(item => {
  // //   //     // getChannelIcon(item);
  // //   // })
  // })
  // .catch(err => console.log(err));

 
}
// searchFetch()


