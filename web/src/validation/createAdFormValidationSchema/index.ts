import * as yup from 'yup';

const discordRegex = new RegExp('^.{3,32}#[0-9]{4}$');
const weekDaysRegex = new RegExp('[0-6]{1}');
const hourRegex = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$');

export const schema = yup.object({
	gameId: yup.string().required('Selecione o jogo'),
	name: yup.string().required('Digite seu nick no jogo'),
	yearsPlaying: yup
		.number()
		.integer('Somente números inteiros são permitidos')
		.required('Digite há quantos anos está jogando'),
	discord: yup
		.string()
		.matches(discordRegex, 'Perfil inválido')
		.required('Digite seu discord'),
	weekDays: yup
		.array()
		.of(yup.string().matches(weekDaysRegex))
		.required('Selecione ao menos um dia da semana'),
	hourStart: yup
		.string()
		.matches(hourRegex, 'Digite como em: 18:00')
		.required('Digite a hora de início da jogatina'),
	hourEnd: yup
		.string()
		.matches(hourRegex, 'Digite como em: 18:00')
		.required('Digite a hora de fim da jogatina'),
	useVoiceChannel: yup.bool(),
});
