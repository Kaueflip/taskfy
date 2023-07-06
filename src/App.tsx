import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { styled } from "styled-components";
import Logo from "./components/Logo";

interface Task {
  id: number;
  title: string;
}

const Wrapper = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  width:100%;
`;

const Container = styled.div`
  width:100%;
  max-width: 600px;
  margin:1rem;
`;

const LogoWrapper = styled.div`
 padding:3rem;
 padding-left:0;
`;


const loadTasksFromStorage = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return JSON.parse(storedTasks) as Task[];
  }
  return [];
};

const saveTasksToStorage = (updatedTasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasksFromStorage());

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  const addTask = (task: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: task,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };


  return (

    <Wrapper>
      <Container>
        <LogoWrapper>
          <Logo></Logo>
        </LogoWrapper>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </Container >
    </Wrapper>

  );
};

export default App;
