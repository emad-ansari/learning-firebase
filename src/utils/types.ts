

export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}


export type FilterBadgeType   = "All" | "Completed" | "Pending";