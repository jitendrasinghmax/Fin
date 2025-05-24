import { useSetRecoilState } from "recoil"
import { copilotGenText } from "../../../recoil/recoil"

export const TextWithOutAnnimation=({msg}:{msg:string})=>{
    const setGenText=useSetRecoilState(copilotGenText);
    const setGenTextHandeler=()=>setGenText(msg);
    return (<>
           <div className="w-full text-sm font-semibold rounded-xl p-3 bg-gradient-to-l from-purple-200  to-indigo-200">{msg}
            <button onClick={setGenTextHandeler} className="w-full flex bg-white py-2 px-1 rounded-lg mt-2"><div className="flex-1">Add to Composser</div><div><select name="" id=""></select></div></button>
           </div>
    </>)
}