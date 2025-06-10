import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const diagnosePlant = async (request, h) => {
  const { payload } = request;
  const { image } = payload;

  if (!image) {
    return h
      .response({ status: 'fail', message: 'Gambar tidak ditemukan' })
      .code(400);
  }

  const uploadDir = path.join(__dirname, '../uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filename = Date.now() + '_' + image.hapi.filename;
  const filepath = path.join(uploadDir, filename);
  const fileStream = fs.createWriteStream(filepath);

  await new Promise((resolve, reject) => {
    image.pipe(fileStream);
    image.on('end', resolve);
    image.on('error', reject);
  });

  const form = new FormData();
  form.append('my_image', fs.createReadStream(filepath));

  try {
    const flaskResponse = await fetch('https://diagnosis-flask-production.up.railway.app/api/diagnosis', {
      method: 'POST',
      body: form,
    });

    const result = await flaskResponse.json(); // Jangan lupa ini async

    fs.unlinkSync(filepath);

    return h.response({
      status: 'success',
      data: result,
    }).code(200);

  } catch (err) {
    console.error('Error kirim ke Flask:', err);
    return h
      .response({
        status: 'fail',
        message: 'Gagal menghubungi server diagnosis',
      })
      .code(500);
  }
};
