# About

A webpage that utilizes the spotify api to control a user's spotify instance. [Live site]()
![Preview](/assets/preview.png)

## State Management

State management done using the library Recoil.js [RecoilJS](https://recoiljs.org/)

### How to use Recoil

Create a folder atoms and create a file <state_name>Atom.js <br>
![AtomFolder](/assets/atom-folder.png) 
```js
import { atom } from 'recoil';

export const stateName = atom({
  key: "uniqueKey", // a state key has to unique for each state
  default: "defaultValue"
})
```
```js
//? using the state 

import { useRecoilState, useRecoilValue } from "recoil";
import { stateName } from './atoms/stateAtom.js';

function App() {
  // returns only the value of the state
  const stateValueOnly = useRecoilValue(stateName);

  // returns both value and setState function
	const [playlist, setPlaylist] = useRecoilState(stateName);
}
```
```js
//? index.js or main.js whatever the main file is called
import { RecoilRoot } from 'recoil';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// I think its done like this in a react app...
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
```


