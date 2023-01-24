import About from './Pages/About';
import Home from './Pages/Home';


export const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
		breadcrumbName: 'Home'
	},
	{
		path: '/about',
		component: About,
		breadcrumbName: 'About',

	},


	// {
	// 	path: "/uesrs",
	// 	component: UsersPage,
	// 	breadcrumbName: 'UsersPage'
	// },
	// {
	// 	path: `/electronics`,
	// 	component: Electronics,
	// 	breadcrumbName: 'Electronics',
	// 	routes: [
	// 		{
	// 			path: `/electronics/mobile`,
	// 			component: Mobile,
	// 			breadcrumbName: 'Mobile Phone'
	// 		},
	// 		{
	// 			path: `/electronics/desktop`,
	// 			component: Desktop,
	// 			breadcrumbName: 'Desktop PC'
	// 		},
	// 		{
	// 			path: `electronics/laptop`,
	// 			component: Laptop,
	// 			breadcrumbName: 'Laptop'
	// 		}
	// 	]
	// }
]

