import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

interface ItemWrapperProps {
  
  children: ReactNode;
}

export function ItemWrapper({  children }: ItemWrapperProps) {
  
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  )
}
 const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: '#262626',
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginHorizontal: 24,
    borderRadius: 8,
    marginBottom: 8
  }
 })
