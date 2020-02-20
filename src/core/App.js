/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';
import TodoPool, { TodoPoolProvider } from '../providers/TodoPool'
import { ListItemSeparator } from '../components/ListItem'
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

const App = () => {
  return (
    <>
      <TodoPoolProvider>
        <StatusBar backgroundColor="#6A1B9A" barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.appBar}>
            <Text style={styles.appTitle}>Todo App</Text>
          </View>
          <TodoPool.Consumer>
            {(todosPool) => (
              <>
                <TodoInput todosPool={todosPool} />
                <FlatList
                  data={todosPool.todos}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => <TodoItem todo={item} todosPool={todosPool}/>}
                  ItemSeparatorComponent={() => <ListItemSeparator />}
                />
              </>
            )}
          </TodoPool.Consumer>
        </SafeAreaView>
      </TodoPoolProvider>
    </>
  );
};

const styles = StyleSheet.create({
  appBar: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#9C27B0',
  },  
  appTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800'
  },
  scrollView: {

  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listItemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
  }
});

export default App;
