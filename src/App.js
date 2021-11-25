import React from 'react';
import LayoutEffectHook from './components/LayoutEffect/LayoutEffectHook';
import UseEffectHook from './components/useEffect/useEffectHook';
import UseRefHooks from './components/useRef/UseRefHooks';
import ReducerTutorial from './components/UseStateHook/ReducerTutorial';
import UseStateHook from './components/UseStateHook/UseStateHook';
import UseStateInputHook from './components/UseStateHook/UseStateInputHook';

function App() {    
  return (
    <div className="App">
     {/*<UseStateHook />*/}
     {/*<UseStateInputHook/>*/}
     {/*<ReducerTutorial />*/}
     {/*<UseEffectHook />*/}
     {/*<UseRefHooks />*/}
     <LayoutEffectHook />
    </div>
  );
}

export default App;
