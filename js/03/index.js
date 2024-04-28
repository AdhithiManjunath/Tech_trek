// alert('OK'); // check linking of script 
require('dotenv').config();

const button = document.getElementById('button');
const city_name = document.getElementById('city_name');
const cityN = document.getElementById('cityN')
const cityT = document.getElementById('cityT')
const cityTemp = document.getElementById('cityTemp')
const getLocation = document.getElementById('get-location')
const stop_time = document.getElementById("stop-time")
// const clock = document.getElementById("clock");



// http://api.weatherapi.com/v1/current.json?key=aa4e62bbbfa84a3a8be64800242804&q=London&aqi=yes
 const getData = async(cityName) =>{
      
      const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=aa4e62bbbfa84a3a8be64800242804&q=${cityName}&aqi=yes`);
      // console.log(await data.json());
      return await data.json();
}
button.addEventListener('click', async ()=>{
  const cityName = city_name.value;
  let ans = await getData(cityName);
  console.log(ans);
  cityN.innerText=`${ans.location.name} , ${ans.location.region} - ${ans.location.country}`;
  cityT.innerText = `${ans.current.last_updated}`
  cityTemp.innerText = `${ans.current.temp_c}`
});

const getData2 = async(lat, lon) =>{
      const d = await fetch(`http://api.weatherapi.com/v1/current.json?key=aa4e62bbbfa84a3a8be64800242804&q=${lat},${lon}&aqi=yes`);
      return await d.json();

}
async function getlocation(position){
  const ans = await getData2(position.coords.latitude, position.coords.longitude);
  // console.log(ans);
   cityN.innerText=`${ans.location.name} , ${ans.location.region} - ${ans.location.country}`;
  cityT.innerText = `${ans.current.last_updated}`
  cityTemp.innerText = `${ans.current.temp_c}`

}

getLocation.addEventListener('click',async()=>{
    navigator.geolocation.getCurrentPosition(getlocation
    , ()=>console.log("error"));
})



// usage of date
//use of setTimeout , setInterval
// setTimeout- runs after specified time and stops 
// setInterval - runs like a loop for interval mentioned 
//  -- it is stopped by using clearInterval function 

const showTime =()=>{
  const time = new Date();
  const wTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  // clock.innerText=wTime;
  document.getElementById("clock").innerText = wTime;
}

stop_time.addEventListener('click',()=>{
      clearInterval(interval);
})

// setTimeout(console.log("hi"), 1000); // time in milliseconds

let interval = setInterval(showTime,1000);


