import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [image, setImage] = useState<string | undefined>(undefined);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <Pressable
          style={styles.pressable}
          onPress={() => {
            ImagePicker.openPicker({
              compressImageMaxHeight: 2049,
              compressImageMaxWidth: 2049,
              mediaType: 'photo',
            }).then(result => {
              console.log(result);
              setImage(result.path);
            });
          }}>
          <Text>Open Image Picker</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 5,
  },
  pressable: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default App;
