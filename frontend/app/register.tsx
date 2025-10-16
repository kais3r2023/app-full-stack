import axios, { isAxiosError } from 'axios';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // 🔹 Validaciones básicas
    if (!username.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      // 🔹 Petición a la API usando Axios
      const response = await axios.post('https://example.com/api/register', {
        username: username.trim(),
        email: email.trim(),
        password,
      });

      // 🔹 Validar respuesta
      if (!response.data) {
        Alert.alert('Error', 'Respuesta inválida del servidor.');
        return;
      }

      Alert.alert('Éxito', `Usuario ${username} registrado correctamente.`);
      return;
    } catch (error) {
      let message = 'Error desconocido';

      if (isAxiosError(error)) {
        if (error.response) {
          message =
            error.response.data?.message || 'Error en el registro del usuario.';
          Alert.alert('Error', message);
          return;
        }

        if (error.request) {
          message = 'No se pudo conectar con el servidor.';
          Alert.alert('Error', message);
          return;
        }

        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }
        Alert.alert('Error', message);
        return;
      }

      if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error);
      }
      Alert.alert('Error', message);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});
