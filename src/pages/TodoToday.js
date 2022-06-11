import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform, TextInput,
  TouchableOpacity,
  Keyboard,
  Alert
} from 'react-native';
import Task from '~/components/Task';


export default function TodoToday() {
  const [task, setTask] = useState("")
  const [taskItems, setItemsTask] = useState([])


  const handleAddTask = () => {
    if(task.length > 0){
      setItemsTask([...taskItems, task])
      setTask("");
      Keyboard.dismiss();
    } else {
      Alert.alert(
        "輸入為空",
        "請輸入待辦事項",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>{}
        }
      );
    }
  }

  const completeTask = (index) => {
    let itemCopy = [...taskItems]
    itemCopy.splice(index, 1)
    setItemsTask(itemCopy)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.items} >
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  < Task title={item} />
                </TouchableOpacity>
              )

            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          placeholder='請輸入待辦事項'
          style={styles.input}
          onChangeText={(text) =>{if(text.length > 0)setTask(text)} }
          value={task}
        />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText: {},


});
