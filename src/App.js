
import './App.css';
import TextField from './TextField/styled';
import ToggleButton from './ToggleButton/styled';
import ToggleButtonGroup from './ToggleButtonGroup/styled'

function App() {
  return (
    <div className="App">
      <ToggleButtonGroup
        variant="tab"
        size="sm"
        name="tab-sm"
        typeContent="title">
        <>
          <ToggleButton id="one" name="one">
            One
          </ToggleButton>
          <ToggleButton id="two" name="two">
            Two
          </ToggleButton>
          <ToggleButton id="three" name="three">
            Three
          </ToggleButton>
        </>
      </ToggleButtonGroup>
      <TextField label="Label"
                 size="sm"
                 placeholder="Small"
                 showClearBtn
                 helpText="Help text" />
    </div>
  );
}

export default App;
