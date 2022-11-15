// const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${userinput}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`;

export function searchFetch(input) {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`
  ).then((res) => res.json());
}
