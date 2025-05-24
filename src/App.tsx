import { RecoilRoot } from 'recoil'
import { Layout } from './layout/layout'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (

    <div className="">
      <BrowserRouter>
        <RecoilRoot>
          <Layout />
        </RecoilRoot>
      </BrowserRouter>
    </div>

  )
}

export default App
