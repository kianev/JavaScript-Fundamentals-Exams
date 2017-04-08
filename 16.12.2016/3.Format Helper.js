function formatHelper([text]) {
    console.log(text
        .replace(/([.,!?:;])\s*/g, (match, symb) => symb + " ")
        .replace(/\s+([.,!?:;])/g, (match, symb) => symb)
        .replace(/".\s*\.\s*\.\s*!"/g, '...!')
        .replace(/\.\s*([?=0-9])/g, (match, symb) => "." + symb)
        .replace(/"([^"]+)"/g, (match, symb) => `"${symb.trim()}"`)
    );
}
formatHelper(["Terribly formatted text      .  With chaotic spacings.\"  Terrible quoting   \"! Also this date is pretty confusing : 20   .   12.  16 . \".  . .!\""]);