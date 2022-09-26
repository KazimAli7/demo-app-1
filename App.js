import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getSUM, getUserData } from "./api";
import { MyButton } from "./components/button";

export default function App() {
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([{ name : 'kazim', id: 1}, {name: 'furqan', id: 2}])
  const [yourname] = useState('aziz')

  useEffect(() => {
    const result = getSUM(names)
    console.log({result})
  }, []);

  console.log('fdsasdf sadf ===>', names[0].name)

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <StatusBar style="auto" />
      <MyButton clicked={() => setCount(count + 1)} title="My Button" />
      <MyButton clicked={() => setCount(count + 1)} title="My Button 1" />
      <View>
        {
          names.map((i)=> <Text>{
            i.name+i.id 
            }</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
