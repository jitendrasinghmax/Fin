import { useState } from "react"
import AIMessageWindow from "./AIMessageWindow"
import AIQueryInput from "./AIQueryInput"
import { Details } from "./details"

export const AssitanceLayout = () => {
    const [tab, setTab] = useState("AI Copilot")
    const handleTabChange = (tab: string) => {
        setTab(tab)
    }

    const activeTabeStyle = "border-b-2 border-blue-500 bg-gradient-to-r from-sky-700 to-rose-50 bg-clip-text text-transparent"
    const inactiveTabStyle = ""
    return (<>
        <div className="h-full w-full flex flex-col">
            <div className="h-12 w-full border-b flex items-center gap-x-3 px-4">
                <div onClick={() => handleTabChange("AI Copilot")}
                    className={`h-full flex items-center ${tab === "AI Copilot" ? activeTabeStyle : inactiveTabStyle}`}>AI Copilot</div>
                <div onClick={() => handleTabChange("Details")}
                    className={`h-full flex items-center ${tab === "Details" ? activeTabeStyle : inactiveTabStyle} `}>Details</div>
            </div>
            {tab==='AI Copilot'&&<div className="flex-1 flex flex-col bg-gray-100 ">
                <div className="flex-1 w-full">
                    <AIMessageWindow />
                </div>
                <div className="h-fit  w-full">
                    <AIQueryInput />
                </div>
            </div>}
            {
                tab==='Details'&& <Details/>
            }
        </div>
    </>)
}