import ArrowLogo from '@/components/ArrowLogo';
import DollarLogo from '@/components/DollarLogo';
import HomeLogo from '@/components/HomeLogo';
import ProfileLogo from '@/components/ProfileLogo';
import QRLogo from '@/components/QRLogo';
import SquaresLogo from '@/components/SquaresLogo';
import TimeLogo from '@/components/TimeLogo';
import WalletLogo from '@/components/WalletLogo';
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BellLogo from '../../components/BellLogo';
import UTransferLogo from '../../components/UTransferLogo';
import VisaLogo from '../../components/VisaLogo';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <UTransferLogo width={30} height={30} />
        <Text style={{ color: '#0a1630', fontSize: 18, fontWeight: 'bold' }}>
          Utransfer
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 60,
          marginTop: 30,
        }}
      >
        <View
          style={{
            marginRight: 6,
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/20.jpg' }}
            style={{ width: 40, height: 45, borderRadius: 75, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Usuario Móvil
            </Text>
            <Text>Bienvenido, Usuario Móvil</Text>
          </View>
        </View>
        <View>
          <BellLogo />
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: '#783fe2',
            height: 225,
            width: 325,
            borderRadius: 10,
            padding: 30,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'flex-end',
            }}
          >
            <UTransferLogo width={25} height={25} />
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
              Utransfer
            </Text>
          </View>
          <Text style={{ color: 'white', marginBottom: 10 }}>Saldo</Text>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>
            $1,300.25
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', gap: 15, marginTop: 20 }}>
              <Pressable style={{ alignItems: 'center' }}>
                <ArrowLogo />
                <Text
                  style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}
                >
                  Enviar
                </Text>
              </Pressable>
              <Pressable style={{ alignItems: 'center' }}>
                <WalletLogo />
                <Text
                  style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}
                >
                  Recibir
                </Text>
              </Pressable>
              <Pressable style={{ alignItems: 'center' }}>
                <DollarLogo />
                <Text
                  style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}
                >
                  Recargar
                </Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 20 }}>
              <VisaLogo />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 20, color: '#0a1630', fontWeight: 'bold' }}>
            {' '}
            Mis ofertas
          </Text>

          <ImageBackground
            resizeMode="cover"
            source={require('../../assets/images/gamer.jpg')}
            style={{
              height: 175,
              width: 300,
              borderRadius: 10,
              padding: 10,
              overflow: 'hidden',
              marginTop: 30,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
              }}
            >
              <UTransferLogo width={20} height={20} />
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
              >
                Utransfer
              </Text>
            </View>
            <Text
              style={{
                position: 'absolute',
                bottom: 10,
                right: 30,
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              {' '}
              Te pagamos por {'\n'} jugar...
            </Text>
          </ImageBackground>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
          height: 70,
          backgroundColor: '#edededf3',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Pressable style={{ alignItems: 'center' }}>
          <HomeLogo />
          <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>
            Inicio
          </Text>
        </Pressable>
        <Pressable style={{ alignItems: 'center' }}>
          <TimeLogo />
          <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>
            Movimientos
          </Text>
        </Pressable>
        <Pressable
          style={{
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 50,
            padding: 10,
          }}
        >
          <QRLogo />
        </Pressable>
        <Pressable style={{ alignItems: 'center' }}>
          <SquaresLogo />
          <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>
            Servicios
          </Text>
        </Pressable>
        <Pressable style={{ alignItems: 'center' }}>
          <ProfileLogo />
          <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>
            Perfil
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f6f6f6',
  },
});
