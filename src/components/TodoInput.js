import React, { useState } from 'react'
import { ListItem, ListItemSeparator } from './ListItem'
import { TextInput, StyleSheet } from 'react-native'

const TodoInput = ({ todosPool }) => {
  const [value, setValue] = useState('')

  return (
    <>
      <ListItem>
        <TextInput
          style={styles.todoTextInput}
          placeholder="Add New Item"
          onChangeText={text => setValue(text)}
          onSubmitEditing={() => {
            todosPool.addTodo(value)
          }}
          value={value}
        />
      </ListItem>
      <ListItemSeparator />
    </>
  )
}

const styles = StyleSheet.create({
  todoTextInput: {
    padding: 0
  },
})

export default TodoInput
