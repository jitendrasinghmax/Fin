import { useRecoilValue } from "recoil";
import { usersAtom } from "../../recoil/recoil";
import { ListedUser } from "./listedUser";

const Sidebar = () => {
    const user = useRecoilValue(usersAtom)
    return (
        <>
            <div className="h-12 text-gray-800 px-2 pb-4 border-b-2 text-lg font-bold">Your Inbox</div>
            <div className="h-full flex flex-col gap-y-2 px-2 mt-2">
                {user.map((item) => {
                    console.log(item)
                    return <ListedUser key={item.id} id_={item.id} name={item.name} avatar={item.avatar} />
                })}
            </div>
        </>
    )
};

export default Sidebar;
