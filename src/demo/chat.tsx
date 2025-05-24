import { useState, useRef, useEffect } from "react";
import { Message } from "../component/message";
import { useSetRecoilState } from "recoil";
import { heightAtoms } from "../recoil/recoil";

export const Chat = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: "user", text: "Hello!" },
        { id: 2, sender: "bot", text: "Hi, how can I help you today?" },
        { id: 3, sender: "user", text: "Tell me a joke." },
        { id: 4, sender: "bot", text: "Why did the developer go broke? Because he used up all his cache!" },
        { id: 5, sender: "user", text: "What's the weather like today?" },
        { id: 6, sender: "bot", text: "It's always sunny in the codebase!" },
        { id: 7, sender: "user", text: "Can you help me with React?" },
        { id: 8, sender: "bot", text: "Of course! What do you need help with?" },
        { id: 9, sender: "user", text: "How do I use useEffect?" },
        { id: 10, sender: "bot", text: "useEffect lets you perform side effects in function components." }
    ]);
    const [input, setInput] = useState("");
    const setHeight = useSetRecoilState(heightAtoms);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToBottomAnimated = () => {
            const parent = messagesEndRef.current?.parentElement;
            if (!parent) return;
            const start = parent.scrollTop;
            const end = parent.scrollHeight - parent.clientHeight;
            const duration = 600; // ms, adjust for slower/faster animation
            let startTime: number | null = null;

            function animateScroll(timestamp: number) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                parent.scrollTop = start + (end - start) * progress;
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        };

        scrollToBottomAnimated();
    }, [messages]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && input.trim() !== "") {
            setMessages([
                ...messages,
                {
                    id: messages.length + 1,
                    sender: "user",
                    text: input.trim()
                }
            ]);
            setHeight(20);
            setInput("");
        }
    };

    return(<>
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="h-3/4 w-1/3 p-3 flex flex-col justify-start gap-y-3 bg-gray-200 overflow-hidden ">
            <div className="flex flex-col gap-y-3 transition-all duration-300 overflow-hidden" style={{height: "100%"}}>
                {messages.map((message) => (
                    <Message
                        message={message.text}
                        id={message.id}/>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
        <input
            className="w-1/3 mt-4 p-2 border rounded"
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Type your message..."
        />
    </div>
    </>)
}