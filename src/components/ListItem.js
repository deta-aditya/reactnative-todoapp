import React from 'react'
import { View, StyleSheet } from 'react-native'

export const ListItem = ({ backgroundColor = 'transparent', children }) => {
  const backgroundStyle = {
    backgroundColor,
  }

  return (
    <View style={[styles.listItem, backgroundStyle]}>
      {children}
    </View>
  )
}

export const ListItemSeparator = () => <View style={styles.listItemSeparator} />

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  listItemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
  },
})
