import Image from 'next/image';

export const metadata = {
  title: "Projects"
}

export default function Projects() {
    return (
      <div className="w-3/4 mx-auto flex flex-col gap-20 pb-5">
        <div className="flex flex-col gap-5">
          <h2 className='text-xl font-bold'>
            Augmented Reality Car Manual
          </h2>
          <p>
            For my final year project at university, I created an augmented reality application for android which would show information about features of a cars interior. The app used image recognition and could show information related to warning lights on a cars dashboard so that the user could get some quick information without needing to search through a big user manual.
          </p>
          <p>
            The application was built using an Augmented Reality addon for Unity 3D.
          </p>
          <div className='flex gap-5 justify-center'>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/q8MPNhPsi3A?si=fI0leYgCPSVi3_Tm" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div> 
        <div className="flex flex-col gap-5">
          <h2 className='text-xl font-bold'>
            Multi-DB Script Generator
          </h2>
          <a className="text-blue-500 underline" href="https://github.com/AnthonyStiles/MultiDBScriptGenerator">GitHub Repository</a>
          <p>
            A python script that I created to help improve effeciency when working. I turned it into a self contained exe so that others could utilise it easily. The tool reads a config file and will generate a script to run in SQL Server Management Studio that will execute a script contained within a file on multiple databases.
          </p>
          <p>
            The tool was built using python and PyInstaller to bundle the script and its dependencies into an exe file.
          </p>
          <div className='flex gap-5 justify-evenly flex-wrap'>
            <Image
              src="/projects/multidbscriptgenerator/result.png"
              alt="A picture showing the output of the tool. It shows the tool and a config file in a folder with an output file."
              width={500}
              height={0}
              className='rounded'
            />
            <Image
              src="/projects/multidbscriptgenerator/file.png"
              alt="A picture showing the contents of the output file of the tool."
              width={600}
              height={0}
              className='rounded'
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className='text-xl font-bold'>
            Car Game
          </h2>
          <p>
            A game I created during my time at college inspired by TrackMania and Dirt Rally.
          </p>
          <p>
            The application was built using Unity 3D with some free assets.
          </p>
          <div className='flex gap-5 justify-center'>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/vf73RXRnXK0?si=dBknB48OfVrBytJm" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    );
  }