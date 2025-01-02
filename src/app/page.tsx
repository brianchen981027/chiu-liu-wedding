import Details from "@/Components/Details";
import Header from "@/Components/Header";
import Info from "@/Components/Info";
import Map from "@/Components/Map";
import Story from "@/Components/Story";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Info />
        <Story />
        <Details />
        <Map />
      </main>
    </>
  );
}
