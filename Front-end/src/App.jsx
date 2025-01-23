import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormsComponent from './Form'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<FormsComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
