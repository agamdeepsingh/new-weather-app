const CityName = document.getElementById('CityName');
const SubmitBtn = document.getElementById('SubmitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = CityName.value;
    if(cityVal === "") {
        city_name.innerText = `Please write the name of the city before searching.`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8f4a82004b1a21b4007bfcb3f04893d4`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

        datahide.classList.remove('data_hide');

        }catch{
        city_name.innerText = `Please enter the city name properly.`;
        datahide.classList.add('data_hide');

        }
    }
}

SubmitBtn.addEventListener('click', getInfo);

