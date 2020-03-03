// Global app controlle
var myHeaders = new Headers();
myHeaders.append("user-key", "1d803d49a12fc2e1d8c6b5fbb2f37073");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=16869315", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  