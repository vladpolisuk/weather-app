export const getFormattedTime = (time: string) => {
	const [hours, minutes] = time.split(':');
	const formattedHours = +hours < 10 ? `0${+hours}` : hours;
	const formattedMinutes = +minutes < 10 ? `0${+minutes}` : minutes;
	const formattedTime = `${formattedHours}:${formattedMinutes}`;
	return formattedTime;
};
