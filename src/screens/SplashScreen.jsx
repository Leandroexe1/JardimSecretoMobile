import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#6C63FF' }}>
      
      <Text style={{ fontSize: 30, color: 'white', marginTop: 100 }}>
        Jardim Secreto
      </Text>

      <View style={{ width: 200, marginBottom: 50 }}>
        <Button title="Home" color="#0805acff" onPress={() => {}} />
      </View>

    </View>
  );
}