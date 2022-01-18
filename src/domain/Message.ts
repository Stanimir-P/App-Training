export interface IMessageData {
    id?: string,
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    title: string,
    description: string,
    ticketStatus: string,
    messageType: MessageType,
}

export enum MessageType {
    Request = "Request",
    Complain = "Complain",
    Question = "Question",
}