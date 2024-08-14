import { Schema, model, models } from "mongoose";

const blogPostSchema = new Schema({
    title: String,
    description: String,
    image: String,
    create_at: String
}, { toJSON: {virtuals: true} });

blogPostSchema.virtual('short_description').get(function() {
    return this.description.substr(0,50)+'...'
});

blogPostSchema.virtual('created_at_formatted').get(function() {
    return changeDateFormat(this.create_at) 
});

function changeDateFormat(date_str) {
    const date = new Date(date_str)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ]

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear}`
};

 

const blogPostModel = models.BlogPost || model('BlogPost', blogPostSchema);
// models.BlogPost || => this is added because if the model is created then use already created model else use new model. (nextjs compiles <=> refreshes)

export default blogPostModel;