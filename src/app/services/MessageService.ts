import firebase from "firebase/compat";
import { IMessageData } from "../../domain/Message";
import { database } from "../../firebaseSetup";


const db = database.collection('/messages');

class MessageDataService {
    getUserData(userId: string) {
        const currData: firebase.firestore.DocumentData[] = [];

        return db.where('userId', '==', userId).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let docData = doc.data();
                    docData['ticketId'] = doc.id;
                    
                    currData.push(docData);
                });

                return currData;
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

    create(message: IMessageData) {
        return db.add(message);
    }

    updateTicket(ticketId: string, value: any) {
        return db.doc(ticketId).update({
            ticketStatus: value 
        });
    }

    deleteTicket(ticketId: string) {
        return db.doc(ticketId).delete();
    }
}

export const messageService = new MessageDataService();