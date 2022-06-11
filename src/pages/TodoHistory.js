import React, { useState,useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";

import Task from '~/components/Task';
import { getTodoHistoryList } from '~/api/api';

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

export default function TodoHistory() {
  const [taskHistory, setTaskHistory] = useState([])


  useEffect(async () => {
    const data = await getTodoHistoryList();
    console.log('data=',data);
    setTaskHistory(data);
  }, []);

  return (
    <View style={styles.todoView}>
        {taskHistory && taskHistory.map((item, index) => (
          <View key={index} style={styles.todo}>
              <Text style={styles.date}>{item.date}</Text>
              {item.todolist && <>
              {item.todolist.map((todo, index) => (
                  <View key={index} style={styles.todoitem}>
                      <Text style={styles.todoname}>{todo.name}</Text>
                </View>
              ))}
            </>}
          </View>
      ))}
   </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  date: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  todoitem: {
    borderBottomColor: '#fff',
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  todoname: {
    fontSize: 20,
    marginLeft: 40,
    color: "#55bcf6",
  },
  todoView:{
    flex: 1
  }
});