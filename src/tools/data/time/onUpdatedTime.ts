import { getFormattedTime } from './getFormattedTime';

export const onUpdatedTime = (liveTime: string) => {
	const hours = +liveTime.split(':')[0];
	const minutes = +liveTime.split(':')[1];

	if (minutes < 59) return getFormattedTime(`${hours}:${minutes + 1}`);
	else if (hours < 23) return getFormattedTime(`${hours + 1}:00`);
	else return `00:00`;
};
