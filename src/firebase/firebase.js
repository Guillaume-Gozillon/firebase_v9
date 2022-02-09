import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCo1bF8Hda9YlwQjKXDbjBVxFm5ptG_Bzk',
  authDomain: 'fir-v9-bccf4.firebaseapp.com',
  projectId: 'fir-v9-bccf4',
  storageBucket: 'fir-v9-bccf4.appspot.com',
  messagingSenderId: '1049586809495',
  appId: '1:1049586809495:web:479b7c1e23e376dd5887d2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)