import React from 'react';
import styled from 'styled-components';

interface TaskItemProps {
    task: {
        id: number;
        title: string;
    };
    onDeleteTask: (taskId: number) => void;
}

const Item = styled.div`
  margin-bottom: 1rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 1rem;
  background-color: #33393a;
  border-radius:6px;
  border: 1px solid #3c4345;

`;

const DeleteButton = styled.button`
background-color:transparent;
  border: solid 1px #b14e4e;
  color: #b14e4e;
  padding: 10px;
  margin-left:1rem;
  cursor: pointer;
  border-radius:6px;
  transition:300ms all ease;
  &:hover {
    filter:brightness(.9);
    background-color:#b14e4e;
    transition:300ms all ease;
    color:#fff;
  };
`;

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask }) => {


    const handleDeleteClick = () => {
        onDeleteTask(task.id);
    };

    return (
        <Item>
            {task.title}
            <DeleteButton onClick={handleDeleteClick}>Remover</DeleteButton>
        </Item>
    );

};

export default TaskItem;
