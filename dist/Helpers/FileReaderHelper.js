"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileReaderHelper = async (file) => {
    const fileReader = new FileReader();
    // start loading the file as binary
    fileReader.readAsArrayBuffer(file);
    // wrap the filereader callback in a promise
    return new Promise((resolve) => {
        // resolve the output onload
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
    });
};
exports.arrayBufferToBase64 = (data) => {
    return new Promise((resolve, reject) => {
        const blob = new Blob([data], { type: "image/png" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};
exports.default = fileReaderHelper;
