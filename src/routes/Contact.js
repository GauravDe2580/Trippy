import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assest/img-3.jpg";
import Footer from "../components/Footer";
import ContactFrom from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactFrom />

      <Footer />
    </>
  );
}
export default Contact;
