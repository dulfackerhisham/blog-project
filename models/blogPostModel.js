import { Schema, model } from "mongoose";

const blogPostSchema = new Schema({
    title: string,
    description: string,
    image: string
});

const blogPostModel = model('BlogPost', blogPostSchema);

export default blogPostModel;