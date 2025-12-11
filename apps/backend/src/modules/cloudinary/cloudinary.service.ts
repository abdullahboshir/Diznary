import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import * as fs from 'fs';

@Injectable()
export class CloudinaryService {
    async uploadImage(
        imgName: string,
        file: Express.Multer.File,
    ): Promise<UploadApiResponse | UploadApiErrorResponse> {

        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(
                file.path,
                {
                    public_id: imgName, // Use provided name as public_id
                    folder: 'diznary', // Optional: organize in folder
                    resource_type: 'auto',
                },
                (error, result: any) => {
                    if (error) {
                        // Cleanup on error too
                        fs.unlink(file.path, (unlinkErr) => {
                            if (unlinkErr) console.error('Error deleting file after failed upload:', unlinkErr);
                        });
                        return reject(error);
                    }

                    resolve(result);

                    // delete the local file asynchronously after successful upload
                    fs.unlink(file.path, (err) => {
                        if (err) {
                            console.error('Error deleting local file:', err);
                        } else {
                            // console.log('File deleted after upload.');
                        }
                    });
                },
            );
        });
    }
}
