import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StudentsPage, ParentsPage, RecruitersPage } from './components/AudiencePages'
import './styles/globals.css'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Root = path === '/students' ? StudentsPage : path === '/parents' ? ParentsPage : path === '/recruiters' ? RecruitersPage : App

createRoot(document.getElementById('root')!).render(<StrictMode><Root /></StrictMode>)
