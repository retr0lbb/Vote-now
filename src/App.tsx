import { Home } from "./pages/Home"
import { NewHeader } from "./components/shared/NewHeader"
import { DarkModeProvider } from "./providers/darkModeProvider"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Poll } from "./components/Poll"
import { IntroPage } from "./pages/IntroPage"
import { NoResponse } from "./pages/fallback/NoResponse"
import { CreatePoll } from "./pages/createPoll"





function App() {

  return (
    <DarkModeProvider>
    <div className="w-screen h-screen flex flex-col justify-center">
        <NewHeader />
        <div className="w-full h-full">
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/:page" element={<Home />} />
            <Route path="/details/:id" element={<Poll.PollPageDetails />} />
            <Route path="/post" element={<CreatePoll />} />
            <Route path="*" element={<NoResponse />} />
          </Routes>
          </BrowserRouter>
        </div>
    </div>
    </DarkModeProvider>
  )
}

export default App
