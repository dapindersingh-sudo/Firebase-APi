var btn=document.getElementById("btn")

btn.addEventListener("click",e=>{
    var city=document.getElementById("city").value;
    const URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`;

    fetch(URL,{
    method:'GET',
    headers:{
        "x-rapidapi-key": "55816bf15emshbef5892f101cc0cp1f2484jsnd49b93aef792",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  })
  .then((Response)=>{
    return Response.json()
  })
  .then((data)=>{
      console.log(data)
      var pTag=document.getElementById("para");
      pTag.innerText=Math.round(data.main.temp-273)

  })
  })

  var signOut=document.getElementById("out")

  signOut.addEventListener("click",e=>{
    firebase.auth().signOut().then(function() {
        window.location.href="/index.html"
      }).catch(function(error) {
          alert("Can't Logout")
      });
       
  })