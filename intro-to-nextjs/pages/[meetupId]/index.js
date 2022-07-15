import MeetUpDetail from "../../components/meetups/MeetUpDetail";

const MeetupDetail = () => {
  return (
    <MeetUpDetail
      image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
      title="First Meetup"
      address="Some Address"
      description="Meetup Description"
    />
  );
};

export default MeetupDetail;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetup: {
        id: meetupId,
        title: "First Meetup",
        image:
          "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
        address: "some address 4, 1236 city",
        description: "this is the first meetup",
      },
    },
  };
}
