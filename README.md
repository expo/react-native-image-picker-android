# What is it?

It's an Android counterpart to the
[`UIImagePicker` native module for iOS](https://github.com/marcshilling/react-native-image-picker).
Thanks marcshilling and everyone else that contributed for that one!

# How can I try it?

This project can be run out of the box to try out the image picker. Get
*react-native-cli* if you don't have it already with `npm install -g
react-native-cli`. Run `react-native run-android` from the root directory of
this project with a device attached or an Android simulator running. Make sure
you don't have other react packagers fighting for ports.

# How can I use it in my own projects?

Follow these steps to integrate with your own project. Each step links to a
commit detailing what to do. The commits have comments explaining the purpose of
each change.

1. Add `ActivityResultListener.java`, `ImagePickerModule.java` and
   `ImagePickerPackage.java` to the Java code for your react-native application.
   [This commit](https://github.com/exponentjs/react-native-image-picker-android/commit/810b43adb62ff3dc45dd98a770c37818f0a35653)
   does that for this project.
2. Add code to your `MainActivity` to register `ImagePickerPackage` and notify
   it of Activity results.
   [Here's a commit](https://github.com/exponentjs/react-native-image-picker-android/commit/6ee500326164bf9ac400533d9a5510f70ed1917e)
   showing how.
3. Use it in your JavaScript code. The API right now just supports
   `.launchCamera(...)` and `.launchImageLibrary(...)` and doesn't support any
   of the extra options.
   [This commit](https://github.com/exponentjs/react-native-image-picker-android/commit/bca70c6dc629530399f623036378102d7d52c90a)
   shows how it was done in our example.
