import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Ensure correct import path and casing for the Footer component
//import Footer from './footer.tsx'
//import App from './App.tsx'
//import ListGroup from './assets/ListGroup.tsx'
//import Goup from './assets/goup.tsx'
import App from './App.tsx'
import UserCard from './assets/components/userCard.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <App />


    <UserCard name="John Doe" role="admin" verified={true} />
  </StrictMode>,
)
