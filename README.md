# qrcode-vcard-generator

VCARD bilgileri içeren THEADX qr-code-generator.

# Karekod ortasına eklenen THEADX logosu
Error correction level (ecl) ile ortada logo bulunmasına rağmen karekod okunabilir şekilde oluşturuluyor.

Kaynak <br>
[What is error correction level?](https://docs.uniqode.com/en/articles/6018654-what-is-error-correction)

# Kullanım

Kütüphaneleri kuruyoruz.
```sh
npm i
```


8-11.satırlar arasındaki veriyi güncelliyoruz
```javascript
const name = "Atakan";
const surname = "Argın";
const phone = "+905554443322";
const mail = "atakan.argin@theadx.com";
```

Son satırda kaydedilecek dizini güncelleyelim;
```javascript
fs.outputFileSync(`./KAREKODLAR/ATAKAN_ARGIN.svg`, svgWithImage);
```

Çalıştıralım;
```sh
node to_svg.js
```
