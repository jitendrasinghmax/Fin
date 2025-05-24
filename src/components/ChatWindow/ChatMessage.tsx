import { useRecoilValue } from "recoil";
import { selectedUserAtom, usersAtom } from "../../recoil/recoil";

const ChatMessage = ({msg,sender}:{msg:string,sender:"user"|"copilot"}) => {
    const selected=useRecoilValue(selectedUserAtom);
    const user=useRecoilValue(usersAtom)[selected-1];
    const avatar=()=>{
        if(sender==="user"){
            return user.avatar;
        }
        else{
            return "https://cdn-icons-png.flaticon.com/512/1077/1077012.png";
        }
    }
    return (<>
        <div className="h-fit w-full flex gap-x-3 ">
            <div className="h-7 w-7 mt-auto rounded-full overflow-hidden"><img src={avatar()} alt="" /></div>
            <div style={{backgroundColor:sender!=="user"?"#e3e3e3":"#c1d4e8"}} 
                className="w-[80%] p-3 rounded-lg">{msg}</div>
        </div>
    </>)
};

export default ChatMessage;
