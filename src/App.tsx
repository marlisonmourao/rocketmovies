import { AuthProvider } from './context/auth'
import { Routes } from './router'

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
