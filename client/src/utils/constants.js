const Google_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YouTube_API_Key="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ 
        Google_API_KEY;


export const YouTube_Search_Suggestion_API_Key="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";