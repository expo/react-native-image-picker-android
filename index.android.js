/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NativeModules,
  StyleSheet,
  Text,
  View,
  Image,
} = React;

let { UIImagePickerManager: ImagePickerManager } = NativeModules;

var ImagePickerAndroid = React.createClass({
  getInitialState: function() {
    return {
      imageURI: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>

        <Text
          onPress={this._pickFromCamera.bind(this)}
          style={styles.imagePickerButton}>
          Touch me to take a photo!
        </Text>
        <Text
          onPress={this._pickFromImageLibrary.bind(this)}
          style={styles.imagePickerButton}>
          Touch me to pick from gallery!
        </Text>

        <Image
          style={styles.image}
          source={{ uri: this.state.imageURI }}
        />
      </View>
    );
  },

  _pickFromCamera: function() {
    ImagePickerManager.launchCamera({}, (cancelled, response) => {
      if (!cancelled) {
        this.setState({ imageURI: response.uri });
      }
    });
  },

  _pickFromImageLibrary: function() {
    ImagePickerManager.launchImageLibrary({}, (cancelled, response) => {
      if (!cancelled) {
        this.setState({ imageURI: response.uri });
      }
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 19,
  },

  imagePickerButton: {
    textAlign: 'center',
    color: '#2222AA',
    marginBottom: 4,
  },
  image: {
    width: 256,
    height: 256,
    marginTop: 4,
  },
});

AppRegistry.registerComponent('ImagePickerAndroid', () => ImagePickerAndroid);
