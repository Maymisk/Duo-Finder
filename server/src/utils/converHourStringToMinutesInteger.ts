export function convertHourStringToMinutesInteger(hourString: string) {
	const [hours, minutes] = hourString.split(':').map(Number);

	const totalMinutes = hours * 60 + minutes;

	return totalMinutes;
}
