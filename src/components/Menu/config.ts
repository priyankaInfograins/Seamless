import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [

  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://seamlessswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Trending',
    icon: 'InfoIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Token',
        href: '/token',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://seamlessswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://seamlessswap.finance/pools',
  },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    href: 'https://poocoin.app/tokens/0x2fC9E0F34d86f65b495De7EE3BB5cBeAc7F92b04'
  },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Audit',
  //       href: 'https://poolpartyfinance.io/poolparty_audit.pdf',
  //     },
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://galaxyswap.gitbook.io/galaxyswap',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
  //   ],
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://poolpartyfinance.com//nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://poolpartyfinance.com//teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://poolpartyfinance.com//profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://poolpartyfinance.com//profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://poolpartyfinance.com//ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://poolpartyfinance.com/',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://poolpartyfinance.com/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
