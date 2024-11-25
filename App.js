import React,{ useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.boldText}>Hello, World</Text>
//       </View>
//       <View style={styles.body}>
//         <Text style={styles.boldText}>Lorem ipsum <Text>Hello</Text> hhuijjwihfdiwj</Text>
//         <Text>Lorem ipsum dolor sit amet</Text>
//         <Text>Lorem ipsum dolor sit amet</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     backgroundColor: 'red',
//     padding: 20,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
//   body: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     margin: 10,
//   },
// });

// export default function App() {
//   const [name, setName] = useState('shaun');
//   const [person, setPerson] = useState({name: 'mario', age: 40});

//   const clickHandler=()=>{
//     setName('chun-li');
//     setPerson({name: 'luigi', age: 30});
//   }

//   return (
//     <View style={styles.container}>
//       <Text >My name is {name}</Text>
//       <Text>His name is {person.name} and his age {person.age}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title='update satate' onPress={clickHandler}/>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });



// todo app
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);
  const [text, setText] = useState('');

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = () => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Todo App</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder='New todo...'
          onChangeText={setText}
          value={text}
        />
        <Button onPress={submitHandler} title='Add Todo' color='red' />
        {
          todos.map((todo) => (
            <TodoItem key={todo.key} item={todo} pressHandler={pressHandler} />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.list}>{item.text}</Text>
    </TouchableOpacity>
  );
};
