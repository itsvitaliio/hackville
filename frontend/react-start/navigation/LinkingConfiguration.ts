import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'login',
      Home: 'home',
      Timeline: 'timeline',
      Alan: 'alan',
      NotFound: '*'
    },
  },
}

// const linking: LinkingOptions<RootStackParamList> = {
//   prefixes: [Linking.makeUrl('/')],
//   config: {
//     screens: {
//       Root: {
//         screens: {
//           TabOne: {
//             screens: {
//               TabOneScreen: 'one',
//             },
//           },
//           TabTwo: {
//             screens: {
//               TabTwoScreen: 'two',
//             },
//           },
//         },
//       },
//       Login: 'login',
//       Home: 'home',
//       Timeline: 'timeline',
//       Alan: 'alan',
//       NotFound: '*'
//     },
//   },
// }

export default linking