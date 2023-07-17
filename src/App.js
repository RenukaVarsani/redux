import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";
import "./app.css";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement Counter</h1>
          <h4>using react and redux</h4>
          <div className="quantity">
            <a title="Decrement" className="quantity__minus"  onClick={() => dispatch(decNumber())}>
              <span>-</span>{" "}
            </a>
            <input type="text" value={myState} />
            <a
              title="Increment"
              className="quantity__plus"
              onClick={() => dispatch(incNumber())}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
