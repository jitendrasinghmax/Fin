import { atom } from "recoil";
import { users } from "../database/users";
import { CopilotMessagesMap, DatabaseUser, UserMessagesMap } from "../types/databaseType";
import { suggestion } from "../database/copiletSuggesation";
import { userMessages } from "../database/messages";
import { copilotMessages } from "../database/copiletMessages";

export const usersAtom=atom<DatabaseUser[]>({
    key: 'usersAtom',
    default: users
})

export const selectedUserAtom=atom<number>({
    key: 'selectedUserAtom',
    default: 1,
})
export const messagesAtom=atom<UserMessagesMap>({
    key: 'messagesAtom',
    default: userMessages
})

export const copilotAtom=atom({
    key: 'copilotAtom',
    default: suggestion
})

export const copilotGenText=atom<string>({
    key:"inputText",
    default:""
})

export const copilotMessagesAtom=atom<CopilotMessagesMap>({
    key: 'copilotMessagesAtom',
    default:copilotMessages
})

export const showTabAtom=atom<boolean>({
    key: 'showTabAtom',
    default: true
})
