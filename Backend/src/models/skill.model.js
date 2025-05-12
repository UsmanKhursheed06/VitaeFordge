<<<<<<< HEAD
// models/Skill.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  }
}, { _id: false });

export default skillSchema;
=======
// models/Skill.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: String
  },
  rating: {
    type: Number
  }
}, { _id: false });

export default skillSchema;
>>>>>>> 78274e8c8b6139a5938b71458a0bfd4f72ab704e
