import menuUI from './menus/ui.menu'
import menuApps from './menus/apps.menu'
import menuPages from './menus/pages.menu'
import adminApps from './menus/admin.menu'

export default {
  // main navigation - side menu
  menu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Dashboard', link: '/dashboard/analytics' }
    ]
  }, {
    text: '실시간 관리',
    items: [
      { icon: 'mdi-database-arrow-left-outline', key: '', text: '충전 미처리', link: '/' },
      { icon: 'mdi-database-arrow-right-outline', key: '', text: '환전 미처리', link: '/' },
      { icon: 'mdi-clipboard-clock-outline', key: '', text: '고객센터 답변대기', link: '/' },
      { icon: 'mdi-clipboard-text', key: '', text: '고객센터 자동답변', link: '/' },
      { icon: 'mdi-account-plus-outline', key: '', text: '신규회원 승인대기', link: '/' },
      { icon: 'mdi-account-alert', key: '', text: '블랙회원 배팅알람', link: '/' },
      { icon: 'mdi-clipboard-plus-outline', key: '', text: '게시물 신규등록', link: '/' },
      { icon: 'mdi-calendar-check-outline', key: '', text: '출석체크 신청', link: '/' }
    ]
  },{
    text: 'Apps',
    items: adminApps

  },

  //////////////////////////////////////////////////// 미사용
  
  {
    text: 'Apps',
    items: menuApps
  }, {
    text: 'Landing Pages',
    items: [
      { icon: 'mdi-airplane-landing', key: 'menu.landingPage', text: 'Landing Page', link: '/landing' },
      { icon: 'mdi-cash-usd-outline', key: 'menu.pricingPage', text: 'Pricing Page', link: '/landing/pricing' }
    ]
  }, {
    text: 'UI - Theme Preview',
    items: menuUI
  }, {
    text: 'Pages',
    key: 'menu.pages',
    items: menuPages
  }, {
    text: 'Other',
    key: 'menu.others',
    items: [
      { icon: 'mdi-file-outline', key: 'menu.blank', text: 'Blank Page', link: '/blank' },
      { key: 'menu.levels', text: 'Menu Levels',
        items: [
          { text: 'Menu Levels 2.1' },
          { text: 'Menu Levels 2.2',
            items: [
              { text: 'Menu Levels 3.1' },
              { text: 'Menu Levels 3.2' }
            ]
          }
        ]
      },
      { key: 'menu.disabled', text: 'Menu Disabled', disabled: true }
    ]
  }],

  // footer links
  footer: [{
    text: 'Docs',
    key: 'menu.docs',
    href: 'https://vuetifyjs.com',
    target: '_blank'
  }]
}
