import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({
    title: String,
    description: String,
    image: String,
});

const blogPostModel = models.BlogPost || model('BlogPost', blogPostSchema);

export default blogPostModel;