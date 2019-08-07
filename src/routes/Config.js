import Home from '../containers/Home'
import Page2 from '../containers/Page2'

export const indexRoutes = [
  {
    inNav: {
      label: 'Home',
      path: '/'
    },
    paths: [
      '/'
    ],
    component: Home
  },
  {
    inNav: {
      label: 'Page2',
      path: '/page-2'
    },
    paths: [
      '/page-2'
    ],
    component: Page2
  }
]
