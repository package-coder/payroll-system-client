import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import StairsIcon from '@mui/icons-material/Stairs';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const navigations = [
    {
      id: 'Build',
      children: [
        {
          id: 'Users',
          icon: <PeopleIcon />,
          path: '/users'
        },
        { 
          id: 'Employees', 
          icon: <DnsRoundedIcon />,
          path: '/employees'
        },
        { 
          id: 'Jobs', 
          icon: <SettingsInputComponentIcon />,
          path: '/jobs'
        },
        { 
          id: 'Departments', 
          icon: <Diversity3Icon />,
          path: '/departments'
        },
        // { 
        //   id: 'Hosting', 
        //   icon: <PublicIcon /> 
        // },
        // {
        //   id: 'Functions', 
        //   icon: <SettingsEthernetIcon />
        // },
        // {
        //   id: 'Machine learning',
        //   icon: <SettingsInputComponentIcon />,
        // },
      ],
    },
    // {
    //   id: 'Quality',
    //   children: [
    //     { id: 'Analytics', icon: <SettingsIcon /> },
    //     { id: 'Performance', icon: <TimerIcon /> },
    //     { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    //   ],
    // },
  ];
  
export default navigations