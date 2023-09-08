import NavBar from "@/components/NavBar";
import PageHead from "@/components/movie/PageHead";
import axios from "axios";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <>
      <NavBar />


      <PageHead id={params.id}/>
    </>
  );  
};

export default Page;
