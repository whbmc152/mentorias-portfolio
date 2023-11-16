import './css/global.css';
import Avatar from './components/avatar'
import Greeting from './components/greeting'
import MouseCursor from "./components/mouseCursor"
import Navbar from './components/navbar'

function App() {
  return (
    <main id='container' className="dark flex min-h-full h-full min-w-full w-full flex-col items-center">
      <Navbar/>
      <MouseCursor />
      <Greeting/>
      <Avatar/>
    </main>
  );
}

export default App;
