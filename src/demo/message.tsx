import { useEffect, useRef } from "react"
import gsap from "gsap";
import { useRecoilValue } from "recoil";
import { heightAtoms } from "../recoil/recoil";
export const Message = ({ message, id }: { message: string, id: number}) => {
    const ref = useRef<HTMLDivElement>(null);
    const height=useRecoilValue(heightAtoms);
    useEffect(() => {
        console.log("use effect triggerd")
        if (ref.current) {
            gsap.fromTo(
                ref.current,
                { y: height },
                { y: 0, duration: 1 }
            );
        }
    },[height]);
    return (<>
        <div
            ref={ref}
            key={id}
            className="w-3/4 h-fit px-2 border-[1px] rounded-md border-blue-950  break-words whitespace-pre-line"
        >
            <p>{message}</p>
        </div>
    </>)
}