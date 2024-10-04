import Hero from "../components/Hero/Hero";
import OurStory from "../components/OurStory/OurStory";
import Testimonials from "../components/Testimonials/Testimonials";
import WeekSpecials from "../components/WeekSpecials/WeekSpecials";

const Home = () => {
  return (
    <>
      <Hero />
      <WeekSpecials />
      <Testimonials />
      <OurStory />
    </>
  );
};

export default Home;
