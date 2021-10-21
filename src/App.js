import Router from "./routes/Routes";
import { GlobalStyle } from './global/GlobalStyle.js'
import GlobalState from "./global/contexts/GlobalState";



const App = () => {

  return <div>

    <GlobalStyle />
    <GlobalState>
    <Router />
    </GlobalState>
  </div>
}

export default App