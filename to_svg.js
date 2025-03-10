var QRCode = require("qrcode-svg");
const fs = require("fs-extra");

// Read the SVG file directly
const imagePath = '/Users/argin/Downloads/BAHCEKULE/BahceKule_QRCREATOR/theadx-logo.svg';
const svgContent = fs.readFileSync(imagePath, 'utf8');

const name = "Atakan";
const surname = "Argın";
const phone = "+905412048372";
const mail = "atakan.argin@theadx.com";

// vCard data
const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name} ${surname}
N:${surname};${name};;;
EMAIL;TYPE=INTERNET:${mail}
TEL;TYPE=CELL:${phone}
ORG:THEADX
END:VCARD
`.trim();

var svg = new QRCode({
    content: vCardData,
    padding: 2,
    width: 256,
    height: 256,
    color: "#000000",
    background: "#ffffff",
    ecl: "H"
}).svg();

// SVG içeriğini düzenleyerek resim ekleyin
const svgWithImage = svg.replace('</svg>', `
    <g transform="translate(53,110.75) scale(0.075)">
        ${svgContent.replace(/<\?xml.*?\?>|<!DOCTYPE.*?>|<svg[^>]*>|<\/svg>/g, '')}
    </g>
</svg>`);

// SVG dosyasını kaydedin
fs.outputFileSync(`./KAREKODLAR/ATAKAN_ARGIN.svg`, svgWithImage);
