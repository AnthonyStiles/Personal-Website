export const metadata = {
  title: "Projects"
}

export default function Projects() {
  return (
    <main className='page-wrapper'>

      <div className="text-content-wrapper">
        <h1 className='title'>
          Augmented Reality Car Manual
        </h1>
        <p className='text text-block'>
          For my final year project at university, I created an augmented reality application for android which would show information about features of a cars interior. The app used image recognition and could show information related to warning lights on a cars dashboard so that the user could get some quick information without needing to search through a big user manual.
        </p>
        <p className='text text-block'>
          The application was built using an Augmented Reality addon for Unity 3D.
        </p>
        <iframe
          src="https://www.youtube.com/embed/q8MPNhPsi3A?si=fI0leYgCPSVi3_Tm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='video'>
        </iframe>
      </div>

      <div className="text-content-wrapper">
        <h1 className='title'>
          Multi-DB Script Generator
        </h1>
        <a href="https://github.com/AnthonyStiles/MultiDBScriptGenerator">
          <div className="text text-block">
            GitHub Repository
          </div>
        </a>
        <p className='text text-block'>
          A python script that I created to help improve effeciency when working. I turned it into a self contained exe so that others could utilise it easily. The tool reads a config file and will generate a script to run in SQL Server Management Studio that will execute a script contained within a file on multiple databases.
        </p>
        <p className='text text-block'>
          The tool was built using python and PyInstaller to bundle the script and its dependencies into an exe file.
        </p>
        <div className='project-image-wrapper'>
          <img src='/projects/multidbscriptgenerator/result.png' alt="A picture showing the output of the tool. It shows the tool and a config file in a folder with an output file." />
          <img src='/projects/multidbscriptgenerator/file.png' alt="A picture showing the contents of the output file of the tool." />
        </div>
      </div>

      <div className="text-content-wrapper">
        <h1 className='title'>
          Car Game
        </h1>
        <p className='text text-block'>
          A game I created during my time at college inspired by TrackMania and Dirt Rally.
        </p>
        <p className='text text-block'>
          The application was built using Unity 3D with some free assets.
        </p>
        <iframe
          src="https://www.youtube.com/embed/vf73RXRnXK0?si=dBknB48OfVrBytJm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className='video'>
        </iframe>
      </div>

    </main>
  );
}