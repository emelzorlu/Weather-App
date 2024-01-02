const API_KEY = "4ae2fffe6abf6be6a6b6e7a1f4a87e1a"

//fonksiyon şehir ve birim bilgilerini parametre olarak alır
async function fetchWeatherData(city, units) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}` 
        )
        //console.log (response.json());
        //eğer istek başarılı değilse hata fırlat
        if (!response.ok) {
            throw new Error("istek başarılı değil")
        }
        // api'den gelen yanıtı JSON formatına dönüşür ve geri döner
        return response.json();
    } catch (error) {
        console.log(error);
    }
}
//fetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir hale getir
 export default fetchWeatherData;