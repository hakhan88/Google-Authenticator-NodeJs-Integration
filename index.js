const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

const secret = speakeasy.generateSecret({
  name: "DigitalLab",
});

qrcode.toDataURL(secret.otpauth_url, function (_err, data) {
  console.log(data);
});
