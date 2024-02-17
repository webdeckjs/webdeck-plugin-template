import React from 'react';

export const onPress = (...argss) => {
  console.log("on press pressed", args);
}

const App = (props) => {
  console.log("App props", props);
  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      <div>hello from webdeck-plugin-template</div>
    </div>
  )
};

export default App;
