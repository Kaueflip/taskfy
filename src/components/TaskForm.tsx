import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface TaskFormProps {
    addTask: (task: string) => void;
}



const Form = styled.form`
  background-color: #33393a;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #3c4345;
`;

const Input = styled.input`
  border: 1px solid #3c4345;
  background-color:#33393a;
  color: #fff;
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  transition:300ms all ease;
  -webkit-appearance: none;
  outline:none;
  font-size:1.1rem;
  &:hover {
    background-color: #ffffff05;
    transition:300ms all ease;
  };
  &:focus {
    background-color: #ffffff05;
    border: 1px solid #3c4345;
    box-shadow:0;
    transition:300ms all ease;
    outline:none;
    -webkit-appearance: none;
  };
`
    ;

const Button = styled.button`
  background-color: #00FFC2;
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 1rem;
  border-radius: 6px;
  transition:300ms all ease;
  &:hover {
    filter:brightness(.9);
    transition:300ms all ease;
  };
`;

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {

    const [taskInput, setTaskInput] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskInput.trim() !== "") {
            addTask(taskInput);
            setTaskInput("");
        }
    };

    const handleClearTasks = () => {
        setTaskInput('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Digite sua tarefa..."
                type="text"
                value={taskInput}
                onChange={handleInputChange}
            />
            <Button type="submit">Adicionar Tarefa</Button>

        </Form>
    );
};

export default TaskForm;
