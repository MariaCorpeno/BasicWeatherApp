class Fetch {
    async getCurrent(input) {
        const myKey = "861e390f32af9c72bd6364d987648a7d";



        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=imperial`
        );


        const data = await response.json();

        console.log(data);

        return data;
    }
}