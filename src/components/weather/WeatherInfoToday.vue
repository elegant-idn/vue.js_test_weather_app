<template>
	<div class="card-container info">
		<div class="card-header info d-flex justify-content-between">
			<div>{{ getCurrentDay }}</div>
		</div>
		<div class="card-content info">
			<div class="row align-items-center">
				<div class="col-6 col-sm-3">
					<div class="text-center">
						<span class="main-temp">
							{{ Math.round(weather.main.temp) }}
							<span class="gray">°C</span><br/>
							{{ Math.round((9 / 5) * weather.main.temp + 32) }}
							<span class="gray">°F</span>
						</span>
					</div>
				</div>
				<div class="col-6 col-sm-3 text-center">
					<img class="img-fluid"
						:src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon.slice(0, -1) + 'd@2x.png'"
						alt="weather-icon" />
				</div>
				<div class="col-6 col-sm-3">
					<div><span class="text-bold">Real feel: {{ Math.round(weather.main.feels_like) }}°</span></div>
					<div><span class="text-bold">Pressure: {{ weather.main.pressure }} hPa</span></div>
					<div><span class="text-bold">Humidity: {{ weather.main.humidity }} %</span></div>
					<div><span class="text-bold">Cloudiness: {{ weather.clouds.all }} %</span></div>
					<div><span class="text-bold">Condition: {{ weather.weather[0].description }}</span></div>
				</div>
				<div class="col-6 col-sm-3">
					<div><span class="text-bold">Sunrise: {{ formatHour(weather.sys.sunrise * 1000) }}</span></div>
					<div><span class="text-bold">Sunset: {{ formatHour(weather.sys.sunset * 1000) }}</span></div>
					<div><span class="text-bold">Min Temp: {{ weather.main.temp_min }}°</span></div>
					<div><span class="text-bold">Max Temp: {{ weather.main.temp_max }}°</span></div>
					<div><span class="text-bold">Visibility: {{ weather.visibility / 1000 }} km</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "WeatherInfoToday",
	props: {
		weather: Object,
	},
	data() {
		return {};
	},

	methods: {
		formatHour(hour) {
			let date = new Date(hour);
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let ampm = hours >= 12 ? 'PM' : 'AM';

			hours = hours % 12;
			hours = hours ? hours : 12; // Handle midnight (0 hours)

			return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
		},
	},

	computed: {

		getCurrentDay() {
			return new Date().toLocaleString("en-us", { weekday: "long" });
		},
	},
};
</script>

<style scoped>
.main-temp {
	font-size: 30px;
}

.card-header.info div {
	font-size: 20px;
}

.card-content .text-bold {
	font-size: 15px;
}

@media (min-width: 768px) {
	.main-temp {
		font-size: 70px;
	}

	.card-header.info div {
		font-size: 36px;
	}

	.card-content .text-bold {
		font-size: 24px;
	}
}

@media (max-width: 576px) {
	.col-6 {
		flex-wrap: wrap;
	}
}
</style>
