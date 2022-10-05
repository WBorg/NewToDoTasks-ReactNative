import { View, Text, StyleSheet } from "react-native";
import React, {useState} from 'react'
import {Header} from '../components/Header'
import { Task, TasksList } from '../components/TasksList';

import { TodoInput } from "../components/TodoInput";


export function Home(){

  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask(newTaskTitle : string){

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks( oldTasks => [...oldTasks , newTask])
    console.log(tasks)


  }

  return(
    <View style={styles.container}>
      <Header/>
      <TodoInput addTask={handleAddTask} />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1a1a1a',
  }
})