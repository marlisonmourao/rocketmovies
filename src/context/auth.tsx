import { ReactNode, createContext } from 'react'

interface AuthContextDataProps {
  signIn: (email: string, password: string) => void
}
interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthProvider({ children }: AuthContextProviderProps) {
  function signIn(email: string, password: string) {
    console.log(email, password)
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  )
}
