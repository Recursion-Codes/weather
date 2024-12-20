
        var contentbox = document.getElementById("weathercontainer");
        var backgroundcolor = document.getElementById("backgroundcolor");
        function getlocation(){
            navigator.geolocation.getCurrentPosition(showPosition);
            document.getElementById("welcomepage").style.opacity = "1";
        }
        
        function showPosition(position) {
            var timezonevar = Intl.DateTimeFormat().resolvedOptions().timeZone;
            let date = new Date(new Date().toLocaleString("en-US", {timeZone: timezonevar}));
            time = date.toString().slice(16,18);
            var latitude = parseFloat(position.coords.latitude);
            var longitude = parseFloat(position.coords.longitude);
            if(time >= 6 && time < 12){
                document.body.style.background="linear-gradient(to right, #11787f, #fff7a4)";
            }
            else if(time >= 12 && time < 18){
                document.body.style.background="linear-gradient(to right, #fff7a4, rgb(62, 56, 95))";
            }
            else if(time >= 18 && time < 24){
                document.body.style.background="linear-gradient(to right, rgb(62, 56, 95) , black)";
            }
            else if( time >= 0 || time < 6){
                document.body.style.background="linear-gradient(to right, black, #11787f)";
            }
            contentbox.style.opacity="1";
            backgroundcolor.style.opacity="0";
            fetch("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude +
            "&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&daily=weathercode,"+
            "&timezone=" + timezonevar)
            .then((response) => response.json())
            .then((weather) => {
            console.log(weather.daily);
                for( let i = 0; i < 7; i++){
                    var weeklydate = new Date(weather.daily.time[i]);
                    weeklydate.setDate(weeklydate.getDate() + 1);
                    var dayofweek= weeklydate.toString().slice(0,3);
                    var contentString = "<div class=\"day\"><div class=\"weathericon\" id=\"icon" + i + "\"></div>" +
                    "<div class=\"date\">"+ dayofweek + "</div>" +
                    "<div class=\"maximum\">"+weather.daily.temperature_2m_max[i] + "</div>" +
                    "<div class=\"minimum\">"+weather.daily.temperature_2m_min[i] + "</div></div>";
                    contentbox.innerHTML += contentString;
                        if(weather.daily.weathercode[i]==1){
                            document.getElementById("icon"+i).innerHTML = "☀️";
                        }else if(weather.daily.weathercode[i]<=3){
                            document.getElementById("icon"+i).innerHTML = "🌤️";
                        }else if(weather.daily.weathercode[i]<=16){
                            document.getElementById("icon"+i).innerHTML = "⛅";
                        }else if(weather.daily.weathercode[i]==17){
                            document.getElementById("icon"+i).innerHTML = "🌩️";
                        }else if(weather.daily.weathercode[i]==18){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]==19){
                            document.getElementById("icon"+i).innerHTML = "🌪️";
                        }else if(weather.daily.weathercode[i]<=21){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]<27){
                            document.getElementById("icon"+i).innerHTML = "🌨️";
                        }else if(weather.daily.weathercode[i]==27){
                            document.getElementById("icon"+i).innerHTML = "🌨️";
                        }else if(weather.daily.weathercode[i]==28){
                            document.getElementById("icon"+i).innerHTML = "🌨️";
                        }else if(weather.daily.weathercode[i]==29){
                            document.getElementById("icon"+i).innerHTML = "🌩️";
                        }else if(weather.daily.weathercode[i]<=35){
                            document.getElementById("icon"+i).innerHTML = "💨";
                        }else if(weather.daily.weathercode[i]<=39){
                            document.getElementById("icon"+i).innerHTML = "🌨️💨";
                        }else if(weather.daily.weathercode[i]<=49){
                            document.getElementById("icon"+i).innerHTML = "🌫️";
                        }else if(weather.daily.weathercode[i]<=59){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]<=69){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]<=69){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]<=79){
                            document.getElementById("icon"+i).innerHTML = "🌨️";
                        }else if(weather.daily.weathercode[i]<=82){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]<=90){
                            document.getElementById("icon"+i).innerHTML = "🌨️";
                        }else if(weather.daily.weathercode[i]<=92){
                            document.getElementById("icon"+i).innerHTML = "🌧️";
                        }else if(weather.daily.weathercode[i]<=94){
                            document.getElementById("icon"+i).innerHTML = "🌨️";
                        }else if(weather.daily.weathercode[i]<=99){
                            document.getElementById("icon"+i).innerHTML = "⛈️";
                        }
                    }
                }
            );
        }
            
            
            
            
            
            
