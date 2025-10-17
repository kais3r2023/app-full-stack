import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    if (!username.trim() || !password) {
      Alert.alert('Error', 'Por favor ingresa usuario y contraseña.');
      return false;
    }
    return true;
  };

  // const handleLogin = async () => {

  //   if (!validate()) {
  //     return;
  //   }

  //   setLoading(true);

  //   try {

  //     const response = await axios.post('https://example.com/', {
  //       username: username.trim(),
  //       password,
  //     });

  //     const { token } = response.data;

  //     if (!token) {
  //       Alert.alert('Error', 'Respuesta inválida del servidor.');
  //       return;
  //     }

  //     await AsyncStorage.setItem('authToken', token);

  //     Alert.alert('Éxito', 'Has iniciado sesión correctamente.');

  //     router.push('/profile/123');
  //     return;
  //   } catch (error) {
  //     let message = 'Error desconocido';

  //     if (isAxiosError(error)) {
  //       if (error.response) {
  //         message =
  //           error.response.data?.message || 'Usuario o contraseña incorrectos';
  //         return Alert.alert('Error', message);
  //       }

  //       if (error.request) {
  //         message = 'No se pudo conectar con el servidor.';
  //         return Alert.alert('Error', message);
  //       }

  //       message = error.message;
  //       return Alert.alert('Error', message);
  //     }

  //     message = (error as Error).message;
  //     return Alert.alert('Error', message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //HandleLogin de prueba

  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (username === 'admin' && password === '1234') {
        await AsyncStorage.setItem('authToken', 'fake-token-123');
        Alert.alert('Éxito', 'Inicio de sesión simulado correctamente.');
        router.push('/profile/123');
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Algo salió mal.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        autoCapitalize="none"
        style={styles.input}
        editable={!loading}
        keyboardType="default"
        placeholderTextColor="#999"
      />

      <View style={styles.passwordRow}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          style={[styles.input, { flex: 1 }]}
          editable={!loading}
          placeholderTextColor="#999"
        />
        <TouchableOpacity
          onPress={() => setShowPassword((s) => !s)}
          style={styles.showButton}
        >
          <Text>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/register')}
        disabled={loading}
      >
        <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
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
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showButton: {
    padding: 10,
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#0a84ff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: '#0a84ff',
  },
});
