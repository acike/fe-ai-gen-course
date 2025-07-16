import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DatepickerDemo from './pages/DatepickerDemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/datepicker" element={<DatepickerDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
