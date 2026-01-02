import Message from "./message"

const App = () => {
  return (
    <div>
      <Message />
      
    </div>
  )
}

export default App;


// app.tsx is where we define our main application component and app is called in main.tsx to be rendered to the DOM
// app is called by main which is in turn is called by index.html where the app is injected into the root div