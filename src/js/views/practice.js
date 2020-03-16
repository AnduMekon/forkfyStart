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

const query = document.querySelector('.search__field').value;

getResults('ethiopia');
  
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
var Jhon = new Person ('jone', 1958, 'casher');
console.log(Jhon);
console.log(Jhon.name);

/*elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});*/