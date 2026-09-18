import { create } from "zustand";

import { Task } from "@/utils/types";

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
    
  },

  updateTask: async (taskId, updatedTask) => {

  },
  deleteTask: async (taskId) => {

  },
}));
