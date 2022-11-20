import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const NumberUser = ({ users = [] }) => {


	const male = users.filter((user) => user.sonInlaw === 'Masculino');
	const female = users.filter((user) => user.sonInlaw === 'Femenino');



	const data = {
		labels: ['Masculino', 'Femenino'],
		datasets: [
			{
				label: 'Usuarios',
				data: [male.length, female.length],
				backgroundColor: [
					'rgba(54, 162, 235, 0.8)',
					'rgba(255, 99, 132, 0.8)',

				],
			},
		],
	};

	return (
		<div style={{ maxWidth: '600px' }} className="App">
			<Doughnut data={data} />
		</div>
	);
}
