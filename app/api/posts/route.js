import mongoDb from "../../../utils/connectMongo";
import blogPostModel from "../../../models/blogPostModel";

export async function GET() {
    try{
        await mongoDb();
        const postData = await blogPostModel.find({});
        return Response.json(postData);
    } catch (error) {
        return Response.json({ message: error.message })
    }

};
