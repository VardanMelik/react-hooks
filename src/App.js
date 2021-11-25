import React from 'react';
import ImperativeHandle from './components/ImperativeHandle/ImperativeHandle';
import LayoutEffectHook from './components/LayoutEffect/LayoutEffectHook';
import MemoHook from './components/MemoHook/MemoHook';
import UseContextHook from './components/UseContextHook/UseContextHook';
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
     {/*<LayoutEffectHook />*/}
     {/*<ImperativeHandle/>*/}
     {/*<UseContextHook/>*/}
     <MemoHook />
    </div>
  );
}

export default App;
