
import { useRecoilValue } from "recoil";
import { messagesAtom, selectedUserAtom } from "../../recoil/recoil";
import ChatMessage from "./ChatMessage";
const ChatWindow = () => {
    const messages=useRecoilValue(messagesAtom)
    const selected=useRecoilValue(selectedUserAtom)
    return <>
        <div className="">
            {messages[selected].messages.map((item)=>{
                return <ChatMessage msg={item.messages} sender={item.sender}/>
            })}
        </div>
    </>;
};

export default ChatWindow;
