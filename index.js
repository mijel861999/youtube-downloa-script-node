const fs = require('fs');
const prompt = require('prompt-sync')()
const ytdl = require('ytdl-core');
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above
	//
	//

const link = prompt("Ingresa el enlace del video: ");
const name = prompt("Ingresa el nombre que quieres que tenga el video: ");
console.log("El enlace es: " + link)

ytdl(link)
  .pipe(fs.createWriteStream('/home/mijel/Descargas/' + name + '.mp4'))

console.log("Video descargado")
