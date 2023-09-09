import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import NowShowing from "@/components/home/NowShowing";

export async function generateStaticMovies() {
  const posts = await fetch("http:/192.168.3.3:8084/movie/all", {
    method: "GET",
  }).then((res) => res.json());
  return posts;
}

const Page = async () => {
  const data = await generateStaticMovies();
  console.log(data);
  return (
    <>
      <NavBar />
      <Banner movies={data} />
      <NowShowing movies={data} />
    </>
  );
};
export default Page;
