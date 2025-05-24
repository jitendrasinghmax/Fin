import { useRecoilValue } from "recoil";
import { copilotMessagesAtom, selectedUserAtom } from "../../recoil/recoil";
import { UserQuestionMessage } from "./userQuestionMessage";
import { FinResponseWithAnimation } from "./FinResponseAnimation";
import { FinResponseWithoutAnimation } from "./FinResponseWithoutAnimation";

const AIMessageWindow = () => {
    const selected = useRecoilValue(selectedUserAtom);
    const messages = useRecoilValue(copilotMessagesAtom)[selected];
    if (messages.length === 0) {
        return <>
            
            <div className="h-full w-full overflow-auto">
                <div className="h-full w-full flex flex-col justify-center items-center">
                    <h1 className="text-gray-700 font-bold text-xl">Hi, I'm Fin AI Copilot</h1>
                    <h1 className="text-gray-400 font-semibold text-sm">Ask Me Anything About This Conversation</h1>
                </div>
            </div>
        </>;
    }
    return (<>
        <div className="h-full w-full flex flex-col py-2 overflow-auto">
            {
                messages.map((item)=>{
                    if(item.type==="question"){
                        return <UserQuestionMessage message={item.message}/>
                    }
                    else{
                        if(item.renderd===true)return <FinResponseWithoutAnimation  msg={item.message}/>
                        else return <FinResponseWithAnimation msg={item.message}/>
                    }
                })
            }
        </div>
    </>)
};

export default AIMessageWindow;
