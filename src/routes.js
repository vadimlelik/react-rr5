import About from './Pages/About';
import Home from './Pages/Home';
import User from './Pages/User';
import UsersPage from './Pages/Users';


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
	{
		path: "/users/:uId?",
		component: UsersPage,
		breadcrumbName: 'UsersPage',
		// routes: [
		// 	{
		// 		path: '/users/:userId?',
		// 		component: UsersPage
		// 	}

		// ]
	},
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

