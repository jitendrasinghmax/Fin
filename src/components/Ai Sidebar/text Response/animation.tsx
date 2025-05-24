import { useState } from "react"
import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { copilotMessagesAtom, selectedUserAtom } from "../../../recoil/recoil";

export const TextAnimation = ({msg}:{msg:string}) => {
    const [displayMsg,setDisplayMsg]=useState<String>("");
    const selected=useRecoilValue(selectedUserAtom);
    const setMessages=useSetRecoilState(copilotMessagesAtom);
    useEffect(() => {
        let words = msg.split(" ");
        let current = 0;
        setDisplayMsg("");
        if (!msg) return;
        const interval = setInterval(() => {
            setDisplayMsg(prev => prev + (prev ? " " : "") + words[current]);
            current++;
            if (current >= words.length) {
                 setMessages((prev)=>{
                        const newMessage=[...prev[selected]]
                        newMessage[newMessage.length-1]={...newMessage[newMessage.length-1],renderd:true}
                        return {...prev,
                            [selected]:newMessage
                        }
                    })
                clearInterval(interval)
            };
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (<>
        <div className="min-h-20 text-sm font-semibold rounded-xl p-3 bg-gradient-to-l from-purple-200  to-indigo-200">{displayMsg}</div>
    </>)
}