import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
// TODO - update styling of each component
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="wrapper">
            <Header />
            <Navigation />
            <Sidebar />
            <Content />
            <Footer />
        </div>
    </div>
  );
}

export default App;
