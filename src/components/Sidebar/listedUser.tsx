import { useRecoilState, useRecoilValue } from "recoil"
import { messagesAtom, selectedUserAtom } from "../../recoil/recoil"
import { useIsMobile } from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";

export const ListedUser = ({ id_, name, avatar }: { id_: number, name: string, avatar: string }) => {
    const messages = useRecoilValue(messagesAtom);
    const userMessages = messages[id_].messages[messages[id_].messages.length - 1].messages;
    const [selected, setSelected] = useRecoilState(selectedUserAtom);
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setSelected(id_);
        if(isMobile) {
            navigate('/chatbox');
        }
    }
        
    if (isMobile === true) {
        return (
            <>
                <div onClick={(e) => handleClick(e)}
                    style={{ backgroundColor: selected === id_ ? "#cadbfc" : "" }}
                    className="flex border-b-2 gap-x-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                    <div className="h-10 w-10 rounded-full overflow-hidden"><img src={avatar} alt="" /></div>
                    <div>
                        <div className="text-gray-500 font-bold">{name}</div>
                        <div className="text-sm text-gray-600">{userMessages.slice(0, 10)}...</div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div onClick={(e) => handleClick(e)}
                style={{ backgroundColor: selected === id_ ? "#cadbfc" : "" }}
                className="flex border-b-2 gap-x-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                <div className="h-10 w-10 rounded-full overflow-hidden"><img src={avatar} alt="" /></div>
                <div>
                    <div className="text-gray-500 font-bold">{name}</div>
                    <div className="text-sm text-gray-600">{userMessages.slice(0, 10)}...</div>
                </div>
            </div>
        </>
    )
}