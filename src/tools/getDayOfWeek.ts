export const getDayOfWeek = (date: string) => {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayOfWeekNumber = new Date(date).getDay();
	return daysOfWeek[dayOfWeekNumber];
};
