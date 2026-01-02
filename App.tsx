import Message from "./message"
import { Button } from "react-bootstrap"
const App = () => {
  return (
    <div>
      <Message />
      <Button variant="dark">Dark</Button>

    </div>
  )
}

export default App;


// app.tsx is where we define our main application component and app is called in main.tsx to be rendered to the DOM
// app is called by main which is in turn is called by index.html where the app is injected into the root div