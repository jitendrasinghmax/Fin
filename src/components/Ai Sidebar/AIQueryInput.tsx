import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { copilotMessagesAtom, selectedUserAtom } from "../../recoil/recoil";

const AIQueryInput = () => {
    const [suggestaions, setSuggestions] = useState<string>("How do I get refund?");
    const selected=useRecoilValue(selectedUserAtom);
    const [message,setMessages]=useRecoilState(copilotMessagesAtom);
    const suggestaionHandler=()=>{
        setMessages((prev) => {
            return {
                ...prev,
                [selected]: [
                    ...(prev[selected] || []),
                    {
                        message:suggestaions ,
                        type: "question",
                        renderd:false
                    }
                ]
            };
        });
        setSuggestions("");
    }
//get suggestions based on users question
    const getSuggesation=()=>{
        const isQuestion=():boolean=>{
            if(message[selected].length===0)return true;
            else if(message[selected][message[selected].length-1].type==="question")return true;
            else return false;
        }
        if(isQuestion()===true){
            setSuggestions("How do I get refund?");
        }
        else setSuggestions("");
    }
    useEffect(()=>{
        getSuggesation();
    },[selected])
    return <>
        <div className="h-fit w-full px-4 flex flex-col justify-end  bg-gray-100">
              {suggestaions!==""&&<div onClick={suggestaionHandler} 
                    className="bg-white w-fit px-2 m-2 rounded-lg border shadow-lg flex gap-x-2 cursor-pointer">
                <h1 className=" text-md font-bold">Suggested:</h1>
                <h1 className="text-gray-700">{suggestaions}</h1>
            </div>}
            <div className="h-fit w-full flex justify-center items-center border shadow-lg rounded-xl p-2 px-5 bg-white">
                <textarea 
                        placeholder="Ask me anything..."
                         name="" id="" 
                         className="h-7 w-full rounded resize-none focus:outline-none "></textarea>
                <div>send</div>

            </div>
        </div>
    </>;
};

export default AIQueryInput;
