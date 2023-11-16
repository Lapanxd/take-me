import * as sharp from 'sharp';
import {Buffer} from 'buffer';

async function resizeImageToBuffer(base64Image, mime) {
  const imageBuffer = Buffer.from(base64Image, 'base64');

  try {
    return await sharp(imageBuffer)
      .resize({width: 500})
      .toBuffer();
  } catch (error) {
    console.error('Erreur lors du redimensionnement de l\'image :', error);
    throw error;
  }
}

export {resizeImageToBuffer};
