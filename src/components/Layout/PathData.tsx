import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import CategoryIcon from '@mui/icons-material/Category';
import CottageIcon from '@mui/icons-material/Cottage';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import GroupIcon from '@mui/icons-material/Group';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import RuleIcon from '@mui/icons-material/Rule';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SetMealIcon from '@mui/icons-material/SetMeal';
import StoreIcon from '@mui/icons-material/Store';
import ViewListIcon from '@mui/icons-material/ViewList';

export const routes = [
  {
    mainTitle: '레이아웃 테스트',
    routes: [
      {
        icon: <GroupIcon />,
        path: '/test',
        subItems: [
          {
            icon: <StoreIcon />,
            path: '/test/test1',
            text: 'test1',
          },
          {
            icon: <FormatListNumberedIcon />,
            path: '/buyers/grades',
            text: 'test2',
          },
        ],
        text: '고객관리',
      },
      {
        icon: <ViewListIcon />,
        path: '/goods',
        subItems: [
          {
            icon: <CategoryIcon />,
            path: '/goods/categories',
            text: '구분관리',
          },
          {
            icon: <SetMealIcon />,
            path: '/goods/items',
            text: '어종관리',
          },
        ],
        text: '품목관리',
      },
    ],
  },
  {
    mainTitle: '판매관리',
    routes: [
      {
        icon: <ListAltIcon />,
        path: '/products',
        subItems: [
          {
            icon: <RuleIcon />,
            path: '/products/sellers',
            text: '판매처관리',
          },
          {
            icon: <RamenDiningIcon />,
            path: '/products/items',
            text: '판매상품관리',
          },
          {
            icon: <AttachMoneyIcon />,
            path: '/products/price',
            text: '단가관리',
          },
          {
            icon: <ScheduleIcon />,
            path: '/products/reservation',
            text: '예약관리',
          },
        ],
        text: '상품관리',
      },
      {
        icon: <AddIcCallIcon />,
        path: '/orders',
        subItems: [
          {
            icon: <AccessAlarmIcon />,
            path: '/orders/status',
            text: '주문현황',
          },
          {
            icon: <NewReleasesIcon />,
            path: '/orders/release',
            text: '출고지시',
          },
          {
            icon: <BusAlertIcon />,
            path: '/orders/delay',
            text: '미출고내역',
          },
        ],
        text: '주문관리',
      },
    ],
  },
  {
    mainTitle: '재고관리',
    routes: [
      {
        icon: <AutoAwesomeMotionIcon />,
        path: '/inventories',
        subItems: [
          {
            icon: <SetMealIcon />,
            path: '/inventories/live',
            text: '재고현황(활어)',
          },
          {
            icon: <AcUnitIcon />,
            path: '/inventories/freeze',
            text: '재고현황(냉동)',
          },
          {
            icon: <LoginIcon />,
            path: '/inventories/receiving-goods',
            text: '입고',
          },
        ],
        text: '재고관리',
      },
      {
        icon: <CottageIcon />,
        path: '/warehouse',
        text: '창고관리',
      },
    ],
  },
];

export const otherSiteLinks = [
  {
    path: 'https://www.naver.com',
    text: '네이버',
  },
  {
    path: 'https://www.google.com',
    text: '구글',
  },
];
