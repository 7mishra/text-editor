export interface TaskInterface {
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    status: 'Todo' | 'In-progress' | 'Done';
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
    comments: string[];
    attachments: string[];
    tags: string[];
    subTasksIds: string[];
    parentTask: string;
    isHidden: boolean;
    updatedAt: string;
    updatedBy: string;

}