import ArrowLogo from '@/components/ArrowLogo';
import DollarLogo from '@/components/DollarLogo';
import HomeLogo from '@/components/HomeLogo';
import ProfileLogo from '@/components/ProfileLogo';
import QRLogo from '@/components/QRLogo';
import SquaresLogo from '@/components/SquaresLogo';
import TimeLogo from '@/components/TimeLogo';
import VisaLogo from '@/components/VisaLogo';
import WalletLogo from '@/components/WalletLogo';
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BellLogo from '../../components/BellLogo';
import UTransferLogo from '../../components/UTransferLogo';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Encabezado */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <UTransferLogo width={30} height={30} />
          <Text style={{ color: '#0a1630', fontSize: 18, fontWeight: 'bold' }}>
            Utransfer
          </Text>
        </View>

        {/* Perfil del usuario */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 30,
            marginBottom: 20, // 👈 reducido para acercar más las tarjetas
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/20.jpg' }}
              style={{
                width: 40,
                height: 45,
                borderRadius: 75,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Usuario Móvil
              </Text>
              <Text>Bienvenido, Usuario Móvil</Text>
            </View>
          </View>
          <BellLogo />
        </View>

        {/* Scroll horizontal de tarjetas */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 5,
            gap: 10,
          }}
        >
          {/* Tarjeta 1 */}
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
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}
            >
              <UTransferLogo width={25} height={25} />
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}
              >
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

          {/* Tarjeta 2 */}
          <View
            style={{
              backgroundColor: '#e23fa6',
              height: 225,
              width: 325,
              borderRadius: 10,
              padding: 30,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}
            >
              <UTransferLogo width={25} height={25} />
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}
              >
                Blue Card
              </Text>
            </View>

            <Text style={{ color: 'white', marginBottom: 10 }}>Saldo</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 35 }}>
              $850.00
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
        </ScrollView>

        {/* Sección Mis ofertas */}
        {/* <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 20, color: '#0a1630', fontWeight: 'bold' }}>
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
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
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
              Te pagamos por {'\n'} jugar...
            </Text>
          </ImageBackground>
        </View> */}

        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 20, color: '#0a1630', fontWeight: 'bold' }}>
            Mis ofertas
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
              paddingLeft: 5,
              paddingRight: 5,
            }}
          >
            {/* Oferta 1 */}
            <ImageBackground
              resizeMode="cover"
              source={require('../../assets/images/gamer.jpg')}
              style={{
                height: 175,
                width: 300,
                borderRadius: 10,
                padding: 10,
                overflow: 'hidden',
                marginRight: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
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
                Te pagamos por {'\n'} jugar...
              </Text>
            </ImageBackground>

            {/* Oferta 2 */}
            <ImageBackground
              resizeMode="cover"
              source={require('../../assets/images/cupon-ganador.jpg')}
              style={{
                height: 175,
                width: 300,
                borderRadius: 10,
                padding: 10,
                overflow: 'hidden',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
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
                Gana recompensas...
              </Text>
            </ImageBackground>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Menú inferior fijo */}
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
          borderTopWidth: 1,
          borderColor: '#ccc',
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
    backgroundColor: '#f6f6f6',
  },
});
