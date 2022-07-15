import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

const MeetupDetail = ({ meetup }) => {
  const { image, title, address, description } = meetup;
  return (
    <MeetUpDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export default MeetupDetail;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://tolu:IRe3qTIZ0mBL1oEJ@intro-to-next.5axcp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://tolu:IRe3qTIZ0mBL1oEJ@intro-to-next.5axcp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
