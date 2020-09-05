import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

const gray = "#91A1BD";

export default function App() {

  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner, { width: size || 40, height: size || 40, borderRadius: size / 2 || 40 / 2 }, style
            ]}>
            {children}
          </View>

        </View>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ alignSelf: 'stretch' }}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}>
          <View style={styles.topContainer}>
            <NeuMorph size={48}>
              <AntDesign name="arrowleft" size={20} color={gray} />

            </NeuMorph>


            <View>
              <Text style={styles.playning}>PLAYING NOW</Text>
            </View>

            <NeuMorph size={48}>
              <Entypo name="menu" size={24} color={gray} />
            </NeuMorph>

          </View>

          <View style={styles.songArtContainer}>
            <NeuMorph size={300}>{/*size centraliza a imagem */}
              <Image source={require("./assets/anarta.jpg")} style={styles.songArt} />
            </NeuMorph>
          </View>

          <View style={styles.songContainer}>
            <Text style={styles.title}>Anarta - Revolução do eu</Text>
            <Text style={styles.artist}>Entre Guirlandas e entranhas</Text>
          </View>

          <View style={styles.trackContainer}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
              <Text style={styles.time}>4:20</Text>
              <Text style={styles.time}>5:13</Text>
            </View>

            <Slider minimumValue={0} maximumValue={1}
              minimumTrackTintColor="#8AAAFF"
              maximumTrackTintColor="#C4E7C3"
              thumbTintColor="#7B9BFF" />
          </View>

          <View style={styles.controlContainer}> 

            <NeuMorph size={65}>
              <Ionicons name="ios-rewind" size={24} color={gray} />
            </NeuMorph>

            <NeuMorph size={65} style={{backgroundColor: "#8AAAFF", borderColor: "#8AAAFF"}}>
              <Ionicons name="ios-pause" size={24} color={gray}  color="#FFF"/>
            </NeuMorph>

            <NeuMorph size={65}>
              <Ionicons name="ios-fastforward" size={24} color={gray} />
            </NeuMorph>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row', // Deixa o menutop em linha
    justifyContent: 'space-between', // Separa eles de forma igual
    alignItems: 'center'
  },
  inner: {
    backgroundColor: "#DEE9f7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF"
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD"
  },
  playning: {
    color: gray,
    fontWeight: "800"
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: "center"
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150, // Deixa a imagem redonda
    borderColor: "#D7E1F3", // Define a cor da borda
    borderWidth: 10 // Define a espessura da borda
  },
  songContainer: {
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    color: "#6C7A93",
    fontWeight: "600"
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: "500"
  },
  time: {
    fontSize: 14,
    color: gray,
    fontWeight: "700"
  },
  controlContainer:{
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
