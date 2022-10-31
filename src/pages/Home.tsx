import { View, Text, StyleSheet, Alert } from "react-native";
import React, {useState} from 'react'
import {Header} from '../components/Header'
import { Task, TasksList } from '../components/TasksList';

import { TodoInput } from "../components/TodoInput";
import { TasksProgress } from "../components/TasksProgress";



export function Home(){

  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksDone, setTasksDone] = useState<number>(0)

  function handleAddTask(newTaskTitle : string){

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks( oldTasks => [...oldTasks , newTask])
    


  }
  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const taskToogleDone = updatedTasks.find(task => task.id == id)
    if(!taskToogleDone)
      return

    
    taskToogleDone.done = !taskToogleDone.done
    setTasks(updatedTasks)
    
     const total = updatedTasks.reduce(( total, {done} ) => {
        if(done){
          return total + 1
        }
        else{
          return total + 0
        }

     },0)  
      
    setTasksDone(total)  
    
    
    

  }

  function handleRemoveTask(id : number, title: string) {

    Alert.alert("Remover", `Deseja remover a tarefa ${title}?`,[
      {
          text: 'Sim',
          onPress: () =>  {
            const filterTasks = tasks.filter(task => task.id !== id)
            setTasks(filterTasks)

            const total = filterTasks.reduce(( total, {done} ) => {
            if(done){
              return total + 1
            }
            else{
              return total + 0
            }

        },0)  
            
          setTasksDone(total) 
            
          
        }
        
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])


    

  }

  return(
    <View style={styles.container}>
      <Header/>
      <TodoInput addTask={handleAddTask} />
      <TasksProgress allTasksCounter={tasks.length} doneTasksCounter={tasksDone}/>
      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1a1a1a',
  }
})