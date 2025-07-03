import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri';
import { MdWeb } from 'react-icons/md';
import { BsPersonPlus } from 'react-icons/bs';

export const navItems = [
  {
    title: 'Home',
    icon: <AiOutlinePieChart />,
    
  },
  {
    title: 'Market',
    icon: <BiTrendingUp />,
    link: '/market', // Internal link
  },
  {
    title: 'Notifications',
    icon: <RiNotification3Line />,
    link: '/notifications', // Internal link
  },
  {
    title: 'Profile',
    icon: <BsPersonPlus />,
    link: '/profile', // Internal link
  },
  {
    title: 'Web',
    icon: <MdWeb />,
    link: '/web', // Internal link
  },
  {
    title: 'Coins',
    icon: <RiCoinsLine />,
    link: '/coins', // Internal link
  },
  {
    title: 'Plus',
    icon: <AiOutlinePlusCircle />,
    link: '/plus', // Internal link
  },
  {
    title: 'Gift',
    icon: <AiOutlineGift />,
    link: '/gift', // Internal link
  },
];

const NavItem = ({ title, icon, link }) => (
  <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel={link.startsWith('http') ? 'noopener noreferrer' : ''} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    {icon}
    <span style={{ marginLeft: '8px' }}>{title}</span>
  </a>
);

// Usage example
const Navigation = () => (
  <nav>
    {navItems.map((item) => (
      <NavItem
        key={item.title}
        title={item.title}
        icon={item.icon}
        link={item.link}
      />
    ))}
  </nav>
);


