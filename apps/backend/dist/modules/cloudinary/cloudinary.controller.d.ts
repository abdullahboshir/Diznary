import { CloudinaryService } from './cloudinary.service';
export declare class CloudinaryController {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
