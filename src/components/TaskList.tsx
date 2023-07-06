import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';

interface Task {
    id: number;
    title: string;
}

interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (taskId: number) => void;
}

const List = styled.div`
  margin-top: 1rem;
`;

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
    return (
        <List>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDeleteTask={onDeleteTask} />
            ))}
        </List>
    );
};

export default TaskList;
