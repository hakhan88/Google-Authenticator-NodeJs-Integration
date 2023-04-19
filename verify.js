const speakeasy = require("speakeasy");

const verify = speakeasy.totp.verify({
  secret: "uIxTgRTh5pJa2#9IqpXEM[DSTGD$&/{)",
  encoding: "ascii",
  token: "12345",
});

console.log(verify);
