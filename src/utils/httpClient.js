 const API = process.env.REACT_APP_API;
 const API_TOKEN= process.env.REACT_APP_API_TOKEN;
//const API = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(API + path, {
       headers: {
         Authorization: "Bearer " + API_TOKEN,
         "Content-Type":"application/json;charset=utf-8",
       },
     })
      .then(result => result.json())
      
}