import React, { useMemo } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ChartJS.register(
// 	CategoryScale,
// 	LinearScale,
// 	PointElement,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	Filler
// );




const options = {
	fill: true,
	animations: false,
	scales: {
		y: {
			min: 0,
		},
	},
	// responsive: true,
	plugins: {
		legend: {
			display: true,
		},





	},

};

export const ProductStock = ({ products = [] }) => {
	console.log('Estos son los productos', products);

	const scores = products.map((product) => product.stock);
	const labels = products.map((product) => product.name);

	const data = {
		datasets: [
			{
				label: "Stock de Productos",
				tension: 0.3,
				data: scores,
				borderColor: "#fe6b8b",
				backgroundColor: "#fe6b8b",
			},
		],
		labels,
	};

	return (
		<div style={{ maxWidth: '1000px' }} className="App">
			<Bar data={data} options={options} />
		</div>
	);
}
