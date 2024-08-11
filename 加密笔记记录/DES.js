CryptoJS = require('crypto-js')
function encryptByDES(message, key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}
//DES解密
function decryptByDES(ciphertext, key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
}
var message = '18616563858';//需要加密的数据
var key = 'pptv';//加密key
//加密
desMessage = encryptByDES(message, key);
// 加密出来
console.log(desMessage);
//解密出来
message = decryptByDES(desMessage,key)
console.log(message);
// 6304eb799fb2a47852d3306aeda0fd51