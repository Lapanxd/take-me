import * as sharp from 'sharp';
import {Buffer} from 'buffer';

async function resizeImageToBuffer(base64Image, mime) {
  const imageBuffer = Buffer.from(base64Image, 'base64');

  try {
    return await sharp(imageBuffer)
      .resize({width: 500})
      .jpeg()
      .toBuffer();
  } catch (error) {
    console.error('Erreur lors du redimensionnement de l\'image :', error);
    throw error;
  }
}

function bufferToBase64(buffer, mime) {
  const base64String = buffer.toString('base64');
  return {
    mime, base64: base64String
  }
}

export {resizeImageToBuffer, bufferToBase64};
