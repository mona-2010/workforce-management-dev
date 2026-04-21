import Image from 'next/image';

export default function Home() {
  const name = 'Mona';
  return (
    <div>
      <h1 className="text-blue-400">Hello, Monaaaa </h1>
      <p>{name}</p>
    </div>
  );
}
