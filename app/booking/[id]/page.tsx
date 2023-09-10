import NavBar from "@/components/NavBar";
import BookingHeader from "@/components/bookings/BookingHeader";
export const generateStaticShow = async (id: string) => {
  const req = await fetch("http://localhost:8084/show/read/" + id, {
    method: "GET",
    next: { revalidate: 0 },
  });
  const data = await req.json();
  return { data, fallback: true, cache: "no-store" };
};
const Page = async ({ params }: { params: { id: string } }) => {
  const { data } = await generateStaticShow(params.id);
  console.log(data);
  return (
    <>
      <NavBar />
      <div className="text-">
        <BookingHeader movieShow={data} />
      </div>
    </>
  );
};

export default Page;
