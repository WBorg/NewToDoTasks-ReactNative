import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface TasksProgressProps {

  allTasksCounter: number ;
  doneTasksCounter: number;

}



export function TasksProgress({allTasksCounter,doneTasksCounter}: TasksProgressProps){


return(

  <View style={styles.container}>
    <View style={styles.containerTasks}>
      <Text style={styles.textCriadas}>Criadas</Text>
      <View style={styles.numberTasks}>
        <Text style={styles.numberTaskText}>{allTasksCounter}</Text>
      </View>
    </View>
    <View style={styles.containerTasks}>
      <Text style={styles.textConcluidas}>Concluídas</Text>
      <View style={styles.numberTasks}>
        <Text style={styles.numberTaskText}>{doneTasksCounter}</Text>
      </View>
    </View>

    

  </View>

)


}

const styles = StyleSheet.create({
  container:{
    height: 19,
    flexDirection: 'row',
    marginTop: 32,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  containerTasks:{
    flexDirection: 'row',
    alignItems: 'baseline'

  },

  textCriadas:{
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#4EA8DE'
  },
  textConcluidas:{
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#8284FA'
  },
  numberTasks:{
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    marginLeft: 8,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'

  },
  numberTaskText:{
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'Inter_700Bold'


  }
})
