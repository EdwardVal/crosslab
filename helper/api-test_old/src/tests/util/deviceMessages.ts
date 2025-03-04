import { ServiceConfig } from "@cross-lab-project/api-client/dist/generated/device/types"

export interface Message {
    messageType: string
}
export function isMessage(object: object): object is Message {
    return "messageType" in object
}

export interface CommandMessage extends Message {
    messageType: "command"
    command: string
}
export function isCommandMessage(message: Message): message is CommandMessage {
    return message.messageType === "command"
}

export interface CreatePeerConnectionMessage extends CommandMessage {
    command: "createPeerConnection"
    connectiontype: string
    url: string
    services: ServiceConfig[]
    tiebreaker: boolean
}
export function isCreatePeerConnectionMessage(message: CommandMessage): message is CreatePeerConnectionMessage {
    return message.command === "createPeerConnection"
}

export interface SignalingMessage extends Message {
    messageType: "signaling"
    connectionUrl: string
}
export function isSignalingMessage(message: Message): message is SignalingMessage {
    return message.messageType === "signaling"
}

export interface AuthenticationMessage extends Message {
    messageType: "authenticate"
    url: string
    token?: string
    authenticated?: boolean 
}
export function isAuthenticationMessage(message: Message): message is AuthenticationMessage {
    return message.messageType === "authenticate"
}

export interface CloseMessage extends Message {
    messageType: "close"
    connectionUrl: string
}
export function isCloseMessage(message: Message): message is CloseMessage {
    return message.messageType === "close"
}