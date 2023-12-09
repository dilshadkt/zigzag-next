import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
async function getWorks() {
  const res = await fetch("http://localhost:8080/work", {
    next: { revalidate: 0 },
  });
  return res.json();
}
const page = async () => {
  const works = await getWorks();

  return (
    <>
      <div>
        <div className="flex items-center justify-end my-[2%]">
          <Link href={"/admin/works/addwork"}>
            <div
              className="cursor-pointer hover:text-red-400"
              title="add image"
            >
              <AddIcon />
            </div>
          </Link>
        </div>
        <div className="p-5 border rounded-lg flex flex-wrap">
          {works.map((item, index) => (
            <div
              key={index}
              className="w-[23%] min-w-[20%]   m-2  cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                width={150}
                height={150}
                src={item.image}
                alt=""
                className="hover:scale-105 transition-all duration-700 w-full h-full "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
