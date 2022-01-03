export const getRandomCityName = () => {
	const cityNames = [
		'Moscow',
		'London',
		'Tokyo',
		'Saint Petersburg',
		'Paris',
		'Belgorod',
		'Washington',
		'Clinton',
		'Los Angeles',
		'New York',
		'Dubai',
		'Singapore',
		'Istanbul',
		'Rome',
		'Prague',
		'Berlin',
		'Seoul',
		'Amsterdam',
		'Miami',
		'Dublin',
		'Beijing',
		'Stockholm',
	];

	const randomCityName = cityNames[Math.floor(Math.random() * cityNames.length)];
	return randomCityName;
};
