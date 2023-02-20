const API_KEY = "4041ce90-8949-4f5e-9fc3-e299583944f5";

export const getMatches = async () => {
    const url = `https://api.cricapi.com/v1/series?apikey=${API_KEY}`;

    const data = await fetch(url);
    return await data.json()
    // return fetch(url).then(
    //     (response) => { response.json();
    //     console.log(response);
    //     }
    // ).then((res) => {
    //     console.log(res);
    // })
    //     .catch((err) => console.log("Error : ", err));
}