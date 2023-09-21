const RevenueDataModule = (function () {
	const frognerRevenueData = [
		{
			year: 2019,
			quarter: "Q3",
			revenue: 9000000,
		},
		{
			year: 2019,
			quarter: "Q4",
			revenue: 11500000,
		},
		{
			year: 2020,
			quarter: "Q1",
			revenue: 10000000,
		},
		{
			year: 2020,
			quarter: "Q2",
			revenue: 8900000,
		},
		{
			year: 2020,
			quarter: "Q3",
			revenue: 7300000,
		},
		{
			year: 2020,
			quarter: "Q4",
			revenue: 8200000,
		},
		{
			year: 2021,
			quarter: "Q1",
			revenue: 9500000,
		},
		{
			year: 2021,
			quarter: "Q2",
			revenue: 10000000,
		},
	];
	const nydalenRevenueData = [
		{
			year: 2019,
			quarter: "Q3",
			revenue: 8000000,
		},
		{
			year: 2019,
			quarter: "Q4",
			revenue: 9000000,
		},
		{
			year: 2020,
			quarter: "Q1",
			revenue: 8300000,
		},
		{
			year: 2020,
			quarter: "Q2",
			revenue: 8900000,
		},
		{
			year: 2020,
			quarter: "Q3",
			revenue: 7300000,
		},
		{
			year: 2020,
			quarter: "Q4",
			revenue: 8200000,
		},
		{
			year: 2021,
			quarter: "Q1",
			revenue: 9500000,
		},
		{
			year: 2021,
			quarter: "Q2",
			revenue: 10000000,
		},
	];

	const toyenRevenueData = [
		{
			year: 2019,
			quarter: "Q3",
			revenue: 6000000,
		},
		{
			year: 2019,
			quarter: "Q4",
			revenue: 1000000,
		},
		{
			year: 2020,
			quarter: "Q1",
			revenue: 7000000,
		},
		{
			year: 2020,
			quarter: "Q2",
			revenue: 9800000,
		},
		{
			year: 2020,
			quarter: "Q3",
			revenue: 6300000,
		},
		{
			year: 2020,
			quarter: "Q4",
			revenue: 8300000,
		},
		{
			year: 2021,
			quarter: "Q1",
			revenue: 5600000,
		},
		{
			year: 2021,
			quarter: "Q2",
			revenue: 7000000,
		},
	];

	const grunerlokkaRevenueData = [
		{
			year: 2019,
			quarter: "Q3",
			revenue: 9500000,
		},
		{
			year: 2019,
			quarter: "Q4",
			revenue: 8500000,
		},
		{
			year: 2020,
			quarter: "Q1",
			revenue: 5600000,
		},
		{
			year: 2020,
			quarter: "Q2",
			revenue: 8600000,
		},
		{
			year: 2020,
			quarter: "Q3",
			revenue: 5500000,
		},
		{
			year: 2020,
			quarter: "Q4",
			revenue: 6600000,
		},
		{
			year: 2021,
			quarter: "Q1",
			revenue: 5600000,
		},
		{
			year: 2021,
			quarter: "Q2",
			revenue: 6800000,
		},
	];

	const getFrogner = () => frognerRevenueData;
	const getNydalen = () => nydalenRevenueData;
	const getToyen = () => toyenRevenueData;
	const getGrunerlokka = () => grunerlokkaRevenueData;

	return {
		getFrogner,
		getNydalen,
		getToyen,
		getGrunerlokka,
	};
})();

export default RevenueDataModule;
