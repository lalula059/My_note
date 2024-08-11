const crypto = require('crypto');

// 给定的十六进制字符串
const hexString = "30819f";

// 将十六进制字符串转换为Buffer
const derBuffer = Buffer.from(hexString, 'hex').length;

// 将Buffer中的每个字节转换为二进制字符串，并将它们拼接起来
// const binaryString = Array.from(derBuffer).length
    // .map(byte => byte.toString(2).padStart(8, '0')) // 将每个字节转换为二进制并填充至8位
    // .join(' '); // 用空格分隔每个字节的二进制表示

console.log(derBuffer);