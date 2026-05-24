import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import { client } from "@/sanity/lib/client";

export const revalidate = 0; // Ensure dynamic data is fetched

export default async function Home() {
  let settings = null;
  let heroSlides = [];
  let about = null;
  let apartments = [];
  let galleryItems = [];

  try {
    const [
      settingsRes,
      heroSlidesRes,
      aboutRes,
      apartmentsRes,
      galleryItemsRes
    ] = await Promise.all([
      client.fetch(`*[_type == "settings"][0]`),
      client.fetch(`*[_type == "hero"]`),
      client.fetch(`*[_type == "about"][0]`),
      client.fetch(`*[_type == "apartment"]`),
      client.fetch(`*[_type == "gallery"]`)
    ]);

    settings = settingsRes;
    heroSlides = heroSlidesRes || [];
    about = aboutRes;
    apartments = apartmentsRes || [];
    galleryItems = galleryItemsRes || [];
  } catch (err) {
    console.error("Error fetching homepage data from Sanity:", err);
  }

  return (
    <>
      <Hero slides={heroSlides} />
      <About data={about} />
      <Catalog apartments={apartments} />
      <Gallery items={galleryItems} />
      <Contact settings={settings} />
    </>
  );
}
