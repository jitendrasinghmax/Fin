import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedUserAtom, showTabAtom, usersAtom } from "../../recoil/recoil";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCall, IoMoonSharp } from "react-icons/io5";

const ChatHeader = () => {
    const selected = useRecoilValue(selectedUserAtom);
    const user = useRecoilValue(usersAtom);
    const setShowTabState = useSetRecoilState(showTabAtom);
    const userName = user.find((item) => item.id === selected)?.name;
    const isMobile = useIsMobile();
    const navigate = useNavigate();

    if (isMobile === true) {
        return <div className="h-12 text-2xl text-gray-700 px-2 font-bold pb-3 border-b-2 flex justify-between items-center">
            <div className=" flex-1 flex justify-center items-center py-4">

                <div className=" flex-1 flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={() => navigate('/')} className="border-2 shadow-lg rounded-md font-semibold px-2 mt-2 mx-2"><IoMdArrowRoundBack />
                        </button>
                        <div>{userName}</div>
                    </div>
                    <div className=" flex gap-x-2 justify-center items-center" >
                        <div className="py-4">
                            <div
                                onClick={() => setShowTabState(true)}
                                className="text-lg h-7 flex justify-center items-center text-white font-semibold bg-gray-800 rounded-md px-4 py-1 mt-2">Fin</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
    return <>
        <div className="h-12 text-2xl text-gray-700 px-2 font-bold pb-2 border-b-2 flex justify-between">
            <div>{userName}</div>
            <div className=" flex gap-x-2 py-1" >
                <div><CiStar /></div>
                <div className="px-3 rounded bg-gray-300  text-sm flex justify-center items-center"><HiDotsHorizontal /></div>
                <div className=" px-3 rounded bg-gray-300 text-sm flex justify-center items-center"><IoCall /></div>
                <div className=" px-3 rounded bg-gray-300 flex justify-center items-center text-sm"><IoMoonSharp />snooze</div>
                <div className=" px-2 rounded bg-black flex justify-between items-center text-white font-semibold text-sm">close</div>
            </div>
        </div>
    </>;
};

export default ChatHeader;
