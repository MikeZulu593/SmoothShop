import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  const image = require('./assets/background.png');
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.subtitulo}>Cree su cuenta para comenzar</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Constrseña"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Número Telefónico"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Nacimiento"
          placeholderTextColor="white"
        />
        <Text style={styles.subtitulo}>Género</Text>
        <Picker style={styles.input}>
          <Picker.Item label="Masculino" value="1" color="white"/>
          <Picker.Item label="Femenino" value="2" color="white"/>
          <Picker.Item label="Otro" value="3" color="white"/>
        </Picker>

        <Text style={styles.subtitulo}>Términos y condiciones</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  subtitulo: {
    fontWeight: 'normal',
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#bbbbbb',
    borderRadius: 6,
    backgroundColor: '#666666',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',  
    height: '100%', 
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
