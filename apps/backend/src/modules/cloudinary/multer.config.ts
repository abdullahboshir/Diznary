import { diskStorage } from 'multer';
import * as os from 'os';
import { extname } from 'path';

// Vercel only allows writing to /tmp directory
const tempDir = os.tmpdir();

export const multerOptions = {
    storage: diskStorage({
        destination: (req, file, cb) => {
            cb(null, tempDir);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
    }),
};
