import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { MovieDetails } from '../pages/MovieDetails'
import { NewNotes } from '../pages/NewNotes'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<MovieDetails />} />
      <Route path="/new" element={<NewNotes />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
