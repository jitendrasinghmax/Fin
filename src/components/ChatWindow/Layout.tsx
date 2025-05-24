import { useEffect, useRef } from "react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { AssitanceLayout } from "../Ai Sidebar/Layout"
import ChatHeader from "./ChatHeader"
import ChatInputBox from "./ChatInputBox"
import ChatWindow from "./ChatWindow"
import gsap from "gsap"
import { useRecoilState } from "recoil"
import { showTabAtom } from "../../recoil/recoil"

export const ChatLayout = () => {
        const ref=useRef<HTMLDivElement>(null);
        const [showTabState,setShowTabState]=useRecoilState(showTabAtom);

    const isMobile = useIsMobile();
    const showTab=()=>{
        if (ref.current) {
            gsap.to(ref.current, { top: '28.33%' });
        }
    }
    const hideTab=()=>{
        if (ref.current) {
            gsap.to(ref.current, { top: '100%' });
        }
    }
    useEffect(() => {
        if (isMobile === true&&showTabState===true && ref.current) {
            showTab();
        }
        if (isMobile === true && showTabState === false &&  ref.current) {
            hideTab();
        }
    }, [isMobile, showTabState]);
    return (<>
        <div className="h-full flex flex-col ">
            <div><ChatHeader /></div>
            <div className="h-full flex flex-col  px-7 py-5">
                <div className="h-full row-span-8 "><ChatWindow /></div>
                <div className="row-span-2  flex justify-end relative"><ChatInputBox /></div>
            </div>
        </div>
        {isMobile === true && <div ref={ref} className="absolute w-full h-2/3 border-4 rounded-t-2xl ">
        <div onClick={()=>setShowTabState(false)} className="text-2xl flex flex-col justify-center items-center font-bold cursor-pointer bg-white">^</div>
            <AssitanceLayout />
        </div>}
    </>
    )
}