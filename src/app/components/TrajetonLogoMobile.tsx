import Image from "next/image";

export default function TrajetonLogoMobile()
{
  return (
    <Image 
      src={"/trajeton-logo-mobile.png"}
      alt="Trajeton Magazine"
      layout="fill"
      objectFit="contain"
    />
  )
}