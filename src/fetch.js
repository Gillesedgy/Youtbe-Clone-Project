// const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${userinput}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`;

export function searchFetch(search) {
   return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
      // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=poki&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
      // the q= will have the user input attached so it can be dynamically updated
    )
      .then((res) => res.json())   
  };

