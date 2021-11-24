import React from 'react';
import UseEffectHook from './components/useEffect/useEffectHook';
import ReducerTutorial from './components/UseStateHook/ReducerTutorial';
import UseStateHook from './components/UseStateHook/UseStateHook';
import UseStateInputHook from './components/UseStateHook/UseStateInputHook';

function App() {    
  return (
    <div className="App">
     {/*<UseStateHook />*/}
     {/*<UseStateInputHook/>*/}
     {/*<ReducerTutorial />*/}
     <UseEffectHook />
    </div>
  );
}

export default App;
