import mongoose from 'mongoose';

const TeamMemberSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
    enum: ['web-development', 'app-development', 'design', 'marketing']
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  expertise: {
    type: [String],
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  projects: {
    type: Number,
    default: 0
  },
  github: String,
  linkedin: String,
  bio: String
}, { timestamps: true });


const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);


export { TeamMember };

