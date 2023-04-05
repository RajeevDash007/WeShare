import File from "../models/file.js";

export const uploadImage = async(request,response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
   try {
        const file = await File.create(fileObj);
        response.status(200).json({path:`http://localhost:8000/file/${file._id}`})
   } catch (error) {
    console.error(error.message);
    response.status(500).json({error: error.message});
   }
}