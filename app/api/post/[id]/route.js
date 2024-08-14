import mongoDb from "../../../../utils/connectMongo";
import blogPostModel from "../../../../models/blogPostModel";

export async function GET(req, {params}) {
    try{
        await mongoDb();

        const postData = await blogPostModel.findOne({_id: params.id});
        return Response.json(postData);
    } catch (error) {
        return Response.json({ message: error.message })
    }

};
