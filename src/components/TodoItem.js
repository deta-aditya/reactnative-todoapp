import React from 'react'
import { ListItem } from './ListItem'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const TodoItem = ({ todo, todosPool }) => {
  return (
    <ListItem backgroundColor={todo.done ? '#C8E6C9' : 'transparent'}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{todo.text}</Text>
        <View style={styles.todoButtonGroup}>
          {!todo.done && (
            <Icon.Button 
              name="check" 
              color="#4CAF50"
              backgroundColor="transparent"
              style={styles.iconButton} 
              onPress={() => todosPool.doneTodo(todo.id)}
            />
          )}
          <Icon.Button 
            name="minus" 
            color="#F44336"
            backgroundColor="transparent"
            style={styles.iconButton} 
            onPress={() => todosPool.removeTodo(todo.id)}
          />
        </View>
      </View>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoText: {
    flex: 5,
  },
  todoButtonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  iconButton: {
    padding: 0,
  }
})

export default TodoItem
