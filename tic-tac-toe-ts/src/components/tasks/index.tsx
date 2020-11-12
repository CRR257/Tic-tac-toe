import React, { useState, useRef } from 'react';
import './index.css';
type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
    name: string;
    done: boolean;
}

const Tasks = () => {
    const [newTask, setNewTask] = useState<string>('');
    const [tasks, setTasks] = useState<ITask[]>([]);
    const taskInput = useRef<HTMLInputElement>(null);

    const handleToggleDoneTask = (i: number): void => {
        const taskSelected: ITask[] = [...tasks];
        taskSelected[i].done = !taskSelected[i].done;
        setTasks(taskSelected);
    }

    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask('');
        taskInput.current?.focus();
    }

    const addTask = (name: string): void => {
        const newTasks: ITask[] = [...tasks, { name, done: false }]
        setTasks(newTasks);
        console.log(newTasks)
    }

    const handleDeleteTask = (i: number): void => {
        // : void => return nothing
        const allTasks: ITask[] = [...tasks];
        allTasks.splice(i, 1);
        setTasks(allTasks);
    }

    return (
        <div>
            <div className="container formsubmit">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} autoFocus ref={taskInput}/>
                    <button>Submit Task</button>
                </form>
            </div>
            <div className="container-tasks">
                {
                    tasks.map((task: ITask, i: number) => {
                        return (
                            <div>
                                <li key={i} className="container-task">
                                    <p style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.name}</p>
                                    <div>
                                        <button onClick={() => handleToggleDoneTask(i)} className="toggle">{task.done ? '✓' : '🗑️'}</button>
                                        <button onClick={() => handleDeleteTask(i)} className="toggle">❌</button>
                                    </div>
                                </li>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasks;
