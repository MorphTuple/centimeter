import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Measurer } from "./Measurer";

interface RulerData {
}

export function App() {
  const [ppi, setPpi] = useState(92);
  const [rulers, setRulers] = useState<RulerData[]>([{}]);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div class="container">
      <div style={{marginBottom: '.5em'}}>
        <h1>The Ruler.</h1>
        <div class="row">
          <div class="col-5">
        <div class="form-group">
        <label for="ppi">Your Screen PPI:</label>
        <input class="form-control" id="ppi" type="number" value={ppi} onInput={
        (e) => {
          // ensure the value is a number between 10 and 1000
          if (parseInt(e.currentTarget.value) > 1 && parseInt(e.currentTarget.value) < 1000) {
            setPpi(parseInt(e.currentTarget.value));
          }
        }
      }/>
      </div>
      </div>
      </div>
    </div>
  
      <div class="row d-flex flex-row align-items-end mt-5">
      {rulers.map((ruler, index) => {
        return <Measurer key={index} number={ppi} />;
      })}
      </div>

    </div>
  );
}

render(<App />, document.getElementById("app"));
