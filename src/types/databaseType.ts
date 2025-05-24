export type MessageSender = "user" | "copilot";

export interface DatabaseMessage {
    messages: string;
    sender: MessageSender;
}

export interface DatabaseUserMessages {
    name: string;
    messages: DatabaseMessage[];
}

export interface UserMessagesMap {
    [userId: string]: DatabaseUserMessages;
}

export type CopilotMessagesMap = {
    [userId: string]: {
        message:string,
        type:"question"|"answer",
        renderd:true|false
    }[];
};

export interface DatabaseUser {
    id: number;
    name: string;
    avatar: string;
}
