// Structure: { [userId: string]: { name: string; id: number; messages: { messages: string; sender: "user" | "copilot"; }[] } }

import { UserMessagesMap } from "../types/databaseType";

export const userMessages: UserMessagesMap= {
    "1": {
        name: "Luis Easton",
        messages: [
            {
                messages: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is un-opened.",
                sender: "user"
            },

        ]
    },
    "2": {
        name: "Sarah Miller",
        messages: [
            {
                messages: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is un-opened.",
                sender: "user"
            }
        ]
    },
    "3": {
        name: "John Smith",
        messages: [
            {
                messages: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is un-opened.",
                sender: "user"
            }
        ]
    },
    "4": {
        name: "Emily Clark",
        messages: [
            {
                messages: "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is un-opened.",
                sender: "user"
            }
        ]
    }
};
