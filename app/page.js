import InfoSticker from '@/components/InfoSticker';
import Image from 'next/image';

export const metadata = {
  title: "Anthony Stiles: Home"
}

export default function Home() {
  return (
    <div className='flex items-center justify-evenly'>
      <div className='w-1/5 flex flex-col items-center'>
        <Image
          src="/portrait.jpg"
          alt="Picture of me."
          width={303}
          height={365}
          className='pb-5'
        />
        <div className='flex flex-col items-center pt-5'>
          <span className='text-xl text-custom-orange font-bold'>
            Anthony Stiles
          </span>
          <span className='font-semibold'>
            Senior Software Developer
          </span>
          <span>
            Pinewood Technologies
          </span>
        </div>
      </div>
      <div className='w-3/5 flex flex-col'>
        <div className='pb-5'>
          <span className='text-xl text-custom-orange font-bold'>
            About Me
          </span>
          <p>
            My name is Anthony Stiles (Ant) and I am a Senior Software Developer for Pinewood Technologies PLC. My role includes full stack development of an enterprise level software system for the automotive sales industry primarily utilising SQL, C# (.Net Core and Razor Pages), JavaScript (Vanilla) and HTML. As a senior my role demands high coding standards with additional responsibilities such as project management and mentorship.
          </p>
        </div>
        <div className='flex justify-evenly pt-5'>
          <InfoSticker 
            icon={"education"} 
            primaryText={"Computer Science (BSc)"} 
            secondaryText={"First Class"} 
            tertiaryText={"Birmingham City University 2020"} />
          <InfoSticker 
            icon={"engineer"} 
            primaryText={"6+ Years Software Development"} 
            secondaryText={"Full Stack"} 
            tertiaryText={"Microsoft Technology Stack"} />
        </div>
      </div>
    </div>
  );
}