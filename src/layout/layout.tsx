import { Route, Routes } from "react-router-dom"
import { AssitanceLayout } from "../components/Ai Sidebar/Layout"
import { ChatLayout } from "../components/ChatWindow/Layout"
import Sidebar from "../components/Sidebar/Sidebar"
import { useIsMobile } from "../hooks/useIsMobile"

export const Layout = () => {
    const isMobile = useIsMobile();
    console.log(isMobile)
    if (isMobile === true) {
        return <>
                <div className="h-screen relative overflow-hidden">
                    <Routes>
                        <Route path='/' element={<Sidebar/>}></Route>
                        <Route path='/chatbox' element={<ChatLayout/>}></Route>
                    </Routes>
                </div>
        </>
    }
    return (<>
        <div className="h-screen w-screen flex flex-col  items-center ">
            <div className="h-[90%] w-5/6">
                <div className="h-full mt-4 border-2 grid grid-cols-12 rounded-lg shadow-lg">
                    <div className="col-span-3 border-r-2"><Sidebar /></div>
                    <div className="col-span-5 border-r-2">
                        <ChatLayout />
                    </div>
                    <div className="col-span-4">
                        <AssitanceLayout />
                    </div>
                </div>
            </div>
        </div>
    </>)
}