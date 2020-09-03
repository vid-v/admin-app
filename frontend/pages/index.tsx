import { NextPage } from 'next';
import { Row, Col } from 'react-flexbox-grid';
import { Block } from 'baseui/block';
import Container from '../components/UiElements/Container/Container';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ApexChart from '../components/UiElements/ApexChart/ApexChart';
import { useState } from 'react';

const Home: NextPage<{}> = () => {


	const isAuthrized = !!(typeof window !== 'undefined' &&localStorage && localStorage.getItem('token'));
	const router = useRouter();
	// @TODO check authenticated?

	if (typeof window !== 'undefined' && !isAuthrized) {
		router.push('/login')
	}


	const [state, setState] = useState<any>({
		series: [
			{
				name: 'Product',
				data: [28, 29, 33, 36, 32, 32, 33],
			},
		],
		options: {
			chart: {
				height: 420,
				type: 'line',
				dropShadow: {
					enabled: false,
				},
				toolbar: {
					show: false,
				},
			},
			colors: ['#006ff3', '#39a66d'],
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'smooth',
			},
			title: {
				text: 'Column Chart',
				align: 'left',
			},
			markers: {
				size: 1,
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			},
			yaxis: {
				min: 5,
				max: 40,
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
				floating: true,
				offsetY: -25,
				offsetX: -5,
			},
		},
	});

	return (
		<Container>
			<Head>
				<title> INST.</title>
			</Head>
			<Block paddingTop={['0', '0', '0', '40px']}>
				<Row>
					<Col lg={12}>
						<Block paddingTop={['10px', '15px', '30px', '0']}>
							<ApexChart
								options={state.options}
								series={state.series}
								type="line"
								height={420}
							/>
						</Block>
					</Col>
				</Row>
			</Block>
		</Container>
	);
};

export default Home
