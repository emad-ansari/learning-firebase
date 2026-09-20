import { create } from "zustand";

import { Task } from "@/utils/types";
import { createTaskToDatabase } from "@/services/firebase/task";

interface TaskState {
  loading: boolean;
  tasks: Task[];

  addTask: (
    userId: string,
    title: string,
    description: string,
  ) => Promise<void>;
  updateTask: (taskId: string, updatedTask: Partial<Task>) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
}

export const useTask = create<TaskState>((set) => ({
  loading: false,
  tasks: [],

  addTask: async (userId, title, description) => {
    try {
      const task = await createTaskToDatabase(userId, title, description);

      console.log('task created: ', task);
    }
    catch(error: any) {
      console.error('Failed to add task: ', error);
    }
    finally {
      set({loading: false})
    }
    
  },

  updateTask: async (taskId, updatedTask) => {

  },
  deleteTask: async (taskId) => {

  },
}));
