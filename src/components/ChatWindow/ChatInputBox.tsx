import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { copilotGenText, selectedUserAtom } from "../../recoil/recoil";

const ChatInputBox = () => {
    const [input, setInput] = useState<string>("");
    const genText=useRecoilValue<string>(copilotGenText)
    const ref = useRef<HTMLTextAreaElement>(null);
    const selected=useRecoilValue(selectedUserAtom)
    // Adjust textarea height dynamically, allowing both expand and contract
    const adjustHeight = () => {
        const textarea = ref.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        }
    };

    useEffect(() => {
        adjustHeight();
    }, [input]);
    useEffect(()=>{
        setInput("")
    },[selected])
    useEffect(()=>{
        setInput(genText);
        console.log(genText);
    },[genText])
    return (
        <>  
            {input!==""&&<div className="h-10 w-2/3 shadow-xl rounded-lg border-2 bg-white absolute top-[-25px] left-1/2 -translate-x-1/2 bottom-20 flex justify-center items-center">
                    <div className="h-fit w-full flex justify-evenly">
                        <div className="bg-black h-5 w-5 rounded-sm text-white text-center text-sm my-auto">AI</div>
                        <div className="border-l-2 border-gray-300"></div>
                        <div className="font-bold text-xl">B</div>
                        <div className="font-bold text-xl">i</div>
                        <div className="font-bold text-xl">{"</>"}</div>
                        <div className="border-l-2 border-gray-300"></div>
                        <div className="font-semibold text-md">H1</div>
                        <div className="font-semibold text-md">H2</div>

                    </div>
            </div>}            
            <div className="h-fit  w-full border-2 shadow-md rounded-xl p-2">
                <textarea
                    ref={ref}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full min-h-[40px] max-h-60 p-2 rounded resize-none focus:outline-none"
                    placeholder="Type your message..."
                    rows={1}
                    style={{ overflowY: "auto" }}
                />
                <div className="flex justify-between">
                    <div></div>
                    <div>
                        <div className="flex gap-x-1">
                            <div className="font-bold">Send</div>
                            <div className="border-l-2 border-gray-300 ml-1"></div>
                            <select className="" name="" id=""></select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatInputBox;
