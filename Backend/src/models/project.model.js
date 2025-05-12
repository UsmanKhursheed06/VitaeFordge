<<<<<<< HEAD
// models/Project.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: {
    type: String
  },
  techStack: {
    type: [String]
  },
  projectSummary: {
    type: String
  }
}, { _id: false });

export default projectSchema;
=======
// models/Project.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: {
    type: String
  },
  techStack: {
    type: [String]
  },
  projectSummary: {
    type: String
  }
}, { _id: false });

export default projectSchema;
>>>>>>> 78274e8c8b6139a5938b71458a0bfd4f72ab704e
