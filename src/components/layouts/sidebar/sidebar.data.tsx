import {
	Package2,
	HomeIcon,
	ShoppingCart,
	Package,
	Users2,
	LineChart,
	Settings,
} from 'lucide-react';

type SidebarDataType = {
	link: string;
	icon: React.ReactNode;
	label: string;
};

export const sidebarData: SidebarDataType[] = [
	{
		link: '/',
		icon: <HomeIcon className='h-5 w-5' />,
		label: 'Dashboard',
	},
	{
		link: '/store-config',
		icon: <LineChart className='h-5 w-5' />,
		label: 'Store Config',
	},
	{
		link: '/stores',
		icon: <ShoppingCart className='h-5 w-5' />,
		label: 'Stores',
	},
	{
		link: '/super-admins',
		icon: <Users2 className='h-5 w-5' />,
		label: 'Super Admins',
	},
	{
		link: '#',
		icon: <Package2 className='h-5 w-5' />,
		label: 'Acme Inc',
	},
];
