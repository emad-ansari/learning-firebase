import {doc, serverTimestamp, setDoc, addDoc, collection} from 'firebase/firestore';
import {db} from '@/services/firebase/config'
import { Task } from '@/utils/types';

// create a task reference over here

const taskRef = collection(db, "tasks");

export const createTaskToDatabase = async (userId: string, title: string, description: string) => {

    const result = await addDoc(taskRef, {
        title: title,
        description: description,
        completed: false,
        userId: userId,
        createdAt: serverTimestamp()
    })
    console.log('result of creating doc inside task collection: ', result);

    return result;
}


export const getTaskFromDatbase = async(userId: string) => {
    


}

export const updateTaskToDatabase = async(taskId: string, updatedTask: Task)  => {

}


export const deleteTask = async(taskId: string) => {

}