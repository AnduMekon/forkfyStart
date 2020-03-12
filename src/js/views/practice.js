// Global app controller
import axios from 'axios';
async function getResults(query, count, sort) {

    
  
    
    const res = await axios(`https://developers.zomato.com/api/v2.1/search?q=${query}&count=${count}&sort=${sort}`,{
        headers: {
            "user-key": "1d803d49a12fc2e1d8c6b5fbb2f37073"
        }
    });
    console.log(res.data.restaurants.map((res)=> res.restaurant.name));


}
getResults('Ethiopia', 20 , 'cost');