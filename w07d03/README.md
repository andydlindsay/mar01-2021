# W07D03 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Pure Functions
* function that returns the same value given the same arguments
* has no side effects

```js
let y = 5;

const addTwo = (x) => {
  const result = x + y;
  console.log(result);
  return result;
}
```

### Side Effects
* writing to standard out (console.log())
* modify the DOM
* reading/writing to the file system
* establish a socket connection or other listener
* data fetching
* setting timers/intervals

### Two Rules for Hooks
* a hook has to be called from inside a component or inside a hook
* they cannot be called conditionally



