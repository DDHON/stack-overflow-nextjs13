// import mongoose from "mongoose";

// let isConnected: boolean = false;

// export const connectToDatabase = async () => {
//   mongoose.set("strictQuery", true);

//   if (!process.env.MONGODB_URL) {
//     return console.log("MISSING MONGGODB_URL");
//   }
//   if (isConnected) {
//     console.log("menggoDB Is already connected");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       dbName: "DevFlow",
//     });
//     isConnected = true;
//     console.log("mongodb is connected");
//   } catch (error) {
//     console.log("mongoDB Connection failed", error);
//   }
// };
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevFlow",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
