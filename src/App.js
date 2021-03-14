import './App.css';
import Layout from './containers/Layout/Layout';
import GameLoader from './containers/GameLoader/GameLoader';

function App() {
  return (
    <Layout className = "App">
      <GameLoader/>
    </Layout>
  );
}

export default App;
