import './App.css';
import { BrowserRouter, MemoryRouter, HashRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/update" element={<ProfileForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
