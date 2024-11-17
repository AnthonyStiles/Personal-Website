import InfoSticker from './ui/info-sticker';

export const metadata = {
  title: "Home | Anthony Stiles"
}

export default function Home() {
  return (
    <main className='page-wrapper-centered'>
      <div className='main-page-wrapper'>

        <div>
          <div className='content-wrapper'>
            <img className='image' src='/portrait-2.jpg' alt="Picture of me." />
          </div>
          <div>
            <div className='description-text description-text-primary'>
              Anthony Stiles
            </div>
            <div className='description-text'>
              Senior Software Developer
            </div>
            <div className='description-text'>
              Pinewood.AI
            </div>
          </div>
        </div>


        <div>
          <div className='content-wrapper'>
            <h1 className='title'>
              About Me
            </h1>
            <p className='text text-block'>
              My name is Anthony Stiles (Ant) and I am a Senior Software Developer for Pinewood.AI.
            </p>
            <p className='text text-block'>
              My role includes full stack development of an enterprise level software system for the automotive sales industry primarily utilising SQL, C# (.Net Core and Razor Pages), JavaScript (Vanilla) and HTML.
            </p>
            <p className='text text-block'>
              As a senior my role demands high coding standards with additional responsibilities such as project management and mentorship.
            </p>
          </div>


          <div className='main-page-info-sticker-wrapper'>
            <div className=''>
              <InfoSticker
                icon={"education"}
                primaryText={"Computer Science (BSc)"}
                secondaryText={"First Class"}
                tertiaryText={"Birmingham City University 2020"} />
            </div>

            <div className=''>
              <InfoSticker
                icon={"engineer"}
                primaryText={"6+ Years Software Development"}
                secondaryText={"Full Stack"}
                tertiaryText={"Microsoft Technology Stack"} />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}