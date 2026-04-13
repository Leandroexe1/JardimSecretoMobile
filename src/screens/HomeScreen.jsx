import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#2ecc71', // verde bonito
      padding: 50 
    }}>
      
      <Text style={{ 
        fontSize: 32, 
        color: 'white', 
        marginTop: 100,
        fontWeight: 'bold'
      }}>
        Jardim Secreto
      </Text>

      <Button title="Acessar" color="#27ae60" onPress={() => {}} />

    </View>
  );
}