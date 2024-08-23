import Image from "next/image";

export default function Header()
{
  return (
    <div className="bg-gray-300 relative h-[75px] w-[75]">
      <a href="/login">
        <Image 
          src={"/trajeton-logo-desktop.png"}
          alt="Trajon"
          layout="fill"
          objectFit="contain"
        />
      </a>

    </div>
  )
}