import Image from "next/image";
import Link from "next/link";

// Icons
import { Discord } from "@/assets/icons/discord";
import { Instagram } from "@/assets/icons/instagram";
import { Tiktok } from "@/assets/icons/tiktok";
import { Twitch } from "@/assets/icons/twitch";
import { X } from "@/assets/icons/x";
import { Youtube } from "@/assets/icons/youtube";

import { LINK1 } from '@/constants/link'

export default function Home() {
  return (
    <div className="py-10 bg-[#9FC5E8] min-h-screen px-2">
      <div className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto text-center text-white space-y-2">
        <Image src={"/user.png"} alt="" width={96} height={96} className="rounded-full mx-auto" />
        <h1 className="font-bold text-base">Hoshiko Remi</h1>
        <p className="text-sm">
          Hi hi hi 👋🏻 Hoshiko Remi heree~ (๑&gt;◡&lt;๑) I&apos;m a little star who fell to the earth.
          Will you accompany me to be a star in your life? (★‿★)
        </p>
        <div className="flex gap-x-2 justify-center">
          <Link href={''}><Discord color="white" fontSize={23} /></Link>
          <Link href={''}><Instagram color="white" fontSize={23} /></Link>
          <Link href={''}><Tiktok color="white" fontSize={23} /></Link>
          <Link href={''}><Twitch color="white" fontSize={23} /></Link>
          <Link href={''}><X color="white" fontSize={23} /></Link>
          <Link href={''}><Youtube color="white" fontSize={23} /></Link>
        </div>
        <div className='pt-14 w-full text-center mx-auto text-black space-y-4'>
          {LINK1.map((res, key) => {
            return (
              <Link
                key={key}
                href={res.url}
                className="w-full bg-[#FFE599] py-4 rounded-full font-semibold hover:scale-105 duration-300 grid grid-cols-3 items-center"
              >
                <p className="text-left pl-4">{res.icons}</p>
                <p className="text-center">{res.name}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
