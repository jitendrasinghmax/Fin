import { useRecoilState, useRecoilValue } from "recoil"
import { copilotMessagesAtom, selectedUserAtom } from "../../recoil/recoil"
import { useEffect } from "react";
import { suggestion } from "../../database/copiletSuggesation";

export const UserQuestionMessage = ({ message }: { message: string }) => {
    const selected = useRecoilValue(selectedUserAtom);

     const [msg,setMessages]=useRecoilState(copilotMessagesAtom);
            const suggestaionHandler=()=>{
            setMessages((prev) => {
                return {
                    ...prev,
                    [selected]: [
                        ...(prev[selected] || []),
                        {
                            message:suggestion ,
                            type: "answer",
                            renderd:false
                        }
                    ]
                };
            });
        }
        useEffect(()=>{
                if(msg[selected][msg[selected].length-1].type==="answer")return;
                else suggestaionHandler();
        },[])
    return (<>
        <div className="h-fit w-full flex gap-x-1 px-2">
            <div className="h-7 w-7 mb-auto rounded-full overflow-hidden border-2 shadow-lg bg-gray-500 text-gray-100 flex justify-center items-center">F</div>
            <div
                className="w-[80%] px-1 rounded-lg "><h1 className="font-bold">You</h1><h1>{message}</h1></div>
        </div>
    </>)
}