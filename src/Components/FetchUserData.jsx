
const FetchUserData = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => {
        if(response.ok){
        return response.json();
        }
        throw new Error('Error Fetching Data');
    })
    .then(data => resolve(data))
    .catch(error => reject(error));
  })
}

FetchUserData().then(data => {
    console.log('Data:', data);
  }).catch(error => {
    console.error('Error:', error);
  });

export default FetchUserData
