import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
import {Feather} from '@expo/vector-icons'


import { ItemWrapper } from './ItemWrapper';

import trashIcon from '../assets/images/trash.png';
import clipBoard from '../assets/images/Clipboard.png';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number, name:string) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <View style={{alignItems:'center',borderTopWidth: 1, borderTopColor:'#333333',
              paddingTop: 48, marginHorizontal:24
        }}>
          <Image style={{marginBottom:16}} source={clipBoard} />
          <Text style={{fontSize:14,fontFamily:'Inter_700Bold',color:'#808080'}}
          >
            Você ainda não tem tarefas cadastradas</Text>
          <Text  style={{fontSize:14,fontFamily:'Inter_400Regular',color:'#808080'}}
          >
            Crie tarefas e organize seus itens a fazer</Text>
        </View>
      )}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper>
            <View style={{flex:1}}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={()=>toggleTaskDone(item.id)}
              >
                <View 
                  style={item.done ? styles.taskMarkerDone : styles.taskMarker}
                >
                  { item.done && (
                    <Feather 
                      name="check"
                      size={12}
                      color="#F2F2F2"
                    />
                  )}
                </View>
                <View >
                  <Text style={item.done ? styles.taskTextDone : styles.taskText}>
                    {item.title}
                  </Text>
                </View>     
               
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ marginLeft:18, marginRight: 17.52}}
              onPress={()=> removeTask(item.id, item.title)}
            >
              <Image  source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 15.52,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  taskMarker: {
    height: 17.45,
    width: 17.45,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginRight: 11.27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#E1E1E6',
    fontFamily: 'Inter_400Regular',
    fontSize:14,
    
    
    
  },
  taskMarkerDone: {
    height: 17.45,
    width: 17.45,
    borderRadius: 999,
    backgroundColor: '#5E60CE',
    marginRight: 11.27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_400Regular',
    
  }
 
})