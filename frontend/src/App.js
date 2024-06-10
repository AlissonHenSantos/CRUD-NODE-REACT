import logo from './logo.svg';
import './App.css';
import api from './services/api'

export default function App() {
  api.get()

  return (
    <div className="App">
      <p>Usuário: {user?.email}</p>
      <p>Biografia: {user?.password}</p>
    </div>
  );
}
