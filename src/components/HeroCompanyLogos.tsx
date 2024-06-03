import React from 'react'
import Image from 'next/image'

export default function HeroCompanyLogos() {
     return (
          <div className='flex flex-row gap-4'>
               <Image src="/bitbucket.svg" alt="BitBucket" width={50} height={0} />
               <Image src="/BlissOS.png" alt="BlissOS" className='rounded-full' height={0} width={80} />
               <Image src="/Canonical.jpg" alt="Canonical" className='rounded-full' width={50} height={50} />
               <Image src="/Yandex.png" alt="Yandex" className='rounded-full' width={50} height={50} />
               <Image src="/Mega.io.png" alt="Mega.io" className='rounded-full' width={50} height={50} />
               <Image src="/Debian.png" alt="Debian" className='rounded-full' width={50} height={50} />
          </div>
     )
}
