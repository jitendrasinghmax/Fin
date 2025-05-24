import React, { useCallback, useEffect, useState } from "react"
import { TextAnimation } from "./text Response/animation";
import { MdOutlineMessage } from "react-icons/md";
export const steps = ["Getting a refund", "Refund fron an oder placed by mistake", "Refund for an unwanted gift"];
export const FinResponseWithAnimation = ({msg}:{msg:string}) => {
    const [step, setSteps] = useState<React.ReactElement[]>([]);

    let id: any;
    const startAnimation = useCallback(() => {
                    let length=0;

        id = setInterval(() => {
            if (length === steps.length) {
                setSteps((prev)=>[<TextAnimation msg={msg}/>,...prev])
                clearInterval(id);
                return;
            }
            setSteps((prev: React.ReactElement[]) => {
                return [...prev,<div className="flex gap-x-2"><MdOutlineMessage className="my-auto"/><div className="my-auto">{steps[prev.length]}</div></div>]
            })
            length++;
        }, 700)
    }, [])
    useEffect(() => {
        startAnimation();
    }, [])
    return (<>
        <div className="px-2">
            <div className="flex gap-x-2">
                <div className="h-7 w-7 rounded-md bg-black"></div>
                <h1 className="font-bold text-lg ">Fin</h1>
            </div>
            <div className="pl-10">
                {step.map((item) => {
                    console.log(item)
                    return item
                })}
            </div>
        </div>
    </>)
}