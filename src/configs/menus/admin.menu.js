export default [
  { icon: 'mdi-file-lock-outline', key: '', text: '경기관리', regex: /^\/auth/,link:'/auth/signin',
    items: [
      { icon: 'mdi-file-outline', key: '', text: '스포츠', link: '/auth/signin' },
      { icon: 'mdi-file-outline', key: '', text: '실시간 게임', link: '/auth/signup' }
    ]
  },
  { icon: 'mdi-currency-usd', key: '', text: '충전 / 환전', regex: /^\/ui\/tables/ ,link: '/ui/tables/data-tables'
  },
    
  { icon: 'mdi-account-box', key: '', text: '회원관리', link: '/'
  
  },
  { icon: 'mdi-clipboard-text-outline', key: '', text: '게시판', regex: /^\/error/,
    items: [
      { icon: 'mdi-file-outline', key: 'menu.errorNotFound', text: 'Not Found / 404', link: '/error/not-found' },
      { icon: 'mdi-file-outline', key: 'menu.errorUnexpected', text: 'Unexpected / 500', link: '/error/unexpected' }
    ]
  },
  { icon: 'mdi-face-agent', key: '', text: '고객센터', regex: /^\/utility/,
    items: [
      { icon: 'mdi-file-outline', key: 'menu.utilityMaintenance', text: 'Maintenance', link: '/utility/maintenance' },
      { icon: 'mdi-file-outline', key: 'menu.utilitySoon', text: 'Coming Soon', link: '/utility/coming-soon' },
      { icon: 'mdi-file-outline', key: 'menu.utilityHelp', text: 'FAQs / Help', link: '/utility/help' }
    ]
  },
  { icon: 'mdi-handshake', key: '', text: '총판', regex: /^\/utility/
      
  },
  { icon: 'mdi-calculator', key: '', text: '정산', regex: /^\/utility/
     
  },
  { icon: 'mdi-cog', key: '', text: '환경설정', regex: /^\/utility/
     
  }
]
