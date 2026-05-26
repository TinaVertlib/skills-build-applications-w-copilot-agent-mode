import { NavLink, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h1 className="card-title">OctoFit Tracker</h1>
        <p className="card-text">
          Welcome to the presentation tier for the OctoFit Tracker multi-tier app.
        </p>
      </div>
    </div>
  )
}

function Leaderboard() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Leaderboard</h2>
        <p className="card-text">Track the top activity and team standings here.</p>
      </div>
    </div>
  )
}

function Workouts() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Workout Suggestions</h2>
        <p className="card-text">Explore personalized workout plans and coaching tips.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="container py-4">
      <nav className="nav nav-pills mb-4">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => `nav-link ms-2 ${isActive ? 'active' : ''}`}>
          Leaderboard
        </NavLink>
        <NavLink to="/workouts" className={({ isActive }) => `nav-link ms-2 ${isActive ? 'active' : ''}`}>
          Workouts
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  )
}

export default App
