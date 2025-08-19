import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import Tentang from "/components/Tentang";
import Fasilitas from "/components/Fasilitas";
import Agenda from "/components/Agenda";
import Kontak from "/components/Kontak";
import Footer from "/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <Fasilitas />
      <Agenda />
      <Kontak />
      <Footer />

    </>
  )
}
