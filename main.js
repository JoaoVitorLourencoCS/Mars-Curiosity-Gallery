const body = document.getElementById('test');
const calendar = document.getElementById('date');
const button = document.getElementById('btn');

const API_KEY = 'YOUR-API-KEY';

function requestPhotos() {

    const END_POINT = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${calendar.value}&api_key=${API_KEY}`
    
    const test = calendar.value.split();
    console.log(test)

    if (test != '') {
        axios.get(END_POINT)
            .then(response => {
                body.src = response.data.photos[0].img_src;
            })
            .catch(error => {
                alert('No images detected from this day.');
            });
    } else {
        alert('Please, choose a valid date.');
    }
}

button.addEventListener('click', requestPhotos);
