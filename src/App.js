import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnimatedCursor from "react-animated-cursor";
import MenuBar from './Components/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={5}
        outerSize={1}
        color='053, 43, 201'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <MenuBar />
    </div>
  );
}

export default App;