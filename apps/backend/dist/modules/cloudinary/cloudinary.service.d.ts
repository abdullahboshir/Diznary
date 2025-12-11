import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
export declare class CloudinaryService {
    uploadImage(imgName: string, file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
