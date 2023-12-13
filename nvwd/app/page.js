import Image from "next/image";

export default function Home() {
  return (
    <nav className="flex bg-[#80dfff] justify-around items-center">
      <div>Logo</div>
      <div className="flex px-4 py-2 gap-4 items-center">
        <div>Home</div>
        <div>About</div>
        <div>Movies</div>
        <button className="bg-red-400 rounded-lg p-4">Login</button>
      </div>
    </nav>
  );
}
