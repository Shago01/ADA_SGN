import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
  },
  name: String,
  password: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
},
});

export const UserModel = mongoose.model("User", userSchema);
