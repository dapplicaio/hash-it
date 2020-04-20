import CryptoJS from 'crypto-js'

export function calculateHashMd5(file, callback) {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = function () {
    const wordArray = CryptoJS.lib.WordArray.create(reader.result),
      hash = CryptoJS.MD5(wordArray).toString();
    // or CryptoJS.SHA256(wordArray).toString(); for SHA-2
    callback(hash);
  };
}