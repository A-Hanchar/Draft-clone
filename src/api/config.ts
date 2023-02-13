import { initializeApp, type FirebaseOptions } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyDlu9vSnbiC_0AIws3ugrLdJ6--bq0vwwM',
  authDomain: 'draft-clone.firebaseapp.com',
  databaseURL: 'https://draft-clone-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'draft-clone',
  storageBucket: 'draft-clone.appspot.com',
  messagingSenderId: '572501815906',
  appId: '1:572501815906:web:0f9cc9e29c882ee9b1573b',
  measurementId: 'G-F3Z60W9WNZ',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
