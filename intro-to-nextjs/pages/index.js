import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return (
    <Fragment>
      <Head>
        <title>My Meetups 😎</title>
        <meta
          name="description"
          content="Browse a huge list of active React meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://tolu:IRe3qTIZ0mBL1oEJ@intro-to-next.5axcp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 100,
  };
}

export default HomePage;
