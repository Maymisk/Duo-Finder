export function convertMinutesIntegerToHourString(minutes: number) {
	const hoursAmount = Math.floor(minutes / 60);
	const minutesAmount = minutes % 60;

	const hoursString = hoursAmount.toString().padStart(2, '0');
	const minutesString = minutesAmount.toString().padEnd(2, '0');

	return hoursString + ':' + minutesString;
}
