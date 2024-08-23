import TrajetonLogo from "@/app/components/TrajetonLogo";

export default function Header()
{
  return (
    <div className="bg-gray-300 relative h-[75px] w-[75]">
      <a href="/login">
        <TrajetonLogo />
      </a>
    </div>
  )
}