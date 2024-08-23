import Image from "next/image"

export default function TrajetonLogo()
{
  return (
    <Image
        src="/trajeton-logo-desktop.png" 
        alt="Trajeton Magazine"
        layout="fill"
        objectFit="contain"
      />
  )
}