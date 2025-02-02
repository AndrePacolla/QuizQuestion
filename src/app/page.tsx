

export default function Home() {

    const title = "Quiz de Culinária";
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">

      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black border-red-400  border-t-4">
        <div className="p-5 font-bold  text-2xl shadow shadow-gray-950">{title}</div>
      </div>

    </div>
  );
}
