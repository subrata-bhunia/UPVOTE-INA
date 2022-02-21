import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Modal
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import Colors from '../helper/Colors';
const ImagePickerCmp = (props) => {
    // console.log("props", props.image)
    const [state, setState] = useState({ uploadImgUri: null })
    const [modalVisible, setModalVisible] = useState(true);



    const resetHandler = () => {
        props.setImage("")
    }

    const openImageHandler = () => {
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            // cropping: cropit,
            // cropperCircleOverlay: circular,
            sortOrder: 'none',
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            compressImageQuality: 0.5,
            // compressVideoPreset: 'MediumQuality',
            // includeExif: true,
            cropperStatusBarColor: 'white',
            cropperToolbarColor: 'white',
            cropperActiveWidgetColor: 'white',
            cropperToolbarWidgetColor: '#3498DB',
        }).then(image => {
            props.setImage(image)
        });
        setModalVisible(!modalVisible);
    }

    const openCameraHandler = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality:0.5
        }).then(image => {
            props.setImage(image)

        });
        setModalVisible(!modalVisible);
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }} >

            <View style={styles.container}>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={openImageHandler} />
                    <Button title="Open Camera" onPress={openCameraHandler} />
                    <Button title="Reset" onPress={resetHandler} />
                </View>
            </View>
        </Modal>
    );
}

export default ImagePickerCmp;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,

    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        color: "red",
        marginTop: 10
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "70%",
        height: 280,
        marginTop: 50,
    },
    button: {
        width: "80%",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",

    },
    previewImage: {
        width: "100%",
        height: "100%"
    },
    imageCircle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LIGHT_GRAY
    }
});
