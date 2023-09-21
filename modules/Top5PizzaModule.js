const Top5PizzaModule = (function () {
	const frognerTop5 = [
		{
			nr: 2,
			medium: 340,
			large: 249,
		},
		{
			nr: 3,
			medium: 200,
			large: 320,
		},
		{
			nr: 5,
			medium: 230,
			large: 450,
		},
		{
			nr: 8,
			medium: 160,
			large: 352,
		},
		{
			nr: 10,
			medium: 110,
			large: 100,
		},
	];
	const nydalenTop5 = [
		{
			nr: 1,
			medium: 364,
			large: 240,
		},
		{
			nr: 2,
			medium: 229,
			large: 440,
		},
		{
			nr: 7,
			medium: 340,
			large: 319,
		},
		{
			nr: 9,
			medium: 120,
			large: 250,
		},
		{
			nr: 10,
			medium: 240,
			large: 443,
		},
	];

	const toyenTop5 = [
		{
			nr: 1,
			medium: 240,
			large: 319,
		},
		{
			nr: 3,
			medium: 240,
			large: 250,
		},
		{
			nr: 5,
			medium: 220,
			large: 330,
		},
		{
			nr: 6,
			medium: 230,
			large: 120,
		},
		{
			nr: 8,
			medium: 340,
			large: 444,
		},
	];

	const grunerlokkaTop5 = [
		{
			nr: 2,
			medium: 230,
			large: 230,
		},
		{
			nr: 4,
			medium: 412,
			large: 230,
		},
		{
			nr: 7,
			medium: 240,
			large: 230,
		},
		{
			nr: 8,
			medium: 320,
			large: 233,
		},
		{
			nr: 11,
			medium: 2300,
			large: 2500,
		},
	];

	const getFrogner = () => frognerTop5;
	const getNydalen = () => nydalenTop5;
	const getToyen = () => toyenTop5;
	const getGrunerlokka = () => grunerlokkaTop5;

	return {
		getFrogner,
		getNydalen,
		getToyen,
		getGrunerlokka,
	};
})();

export default Top5PizzaModule;
