// url => homepage.com/api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://tolu:IRe3qTIZ0mBL1oEJ@intro-to-next.5axcp.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    // console.log(result);

    client.close();

    res.status(201).json({
      status: "success",
      message: "Meetup created successfully",
      data: {
        ...data,
        id: result.insertedId,
      },
    });
  }
};

export default handler;
