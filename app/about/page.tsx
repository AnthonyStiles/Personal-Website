export const metadata = {
  title: "About / CV"
}

export default function About() {
  return (
    <main className="page-wrapper">

      <div className="text-content-wrapper">
        <h1 className='title'>
          Personal Statement
        </h1>
        <p className="text text-block">
          With over seven years of experience working across the full stack of an enterprise level system I am a senior software developer who thrives in solving difficult problems and has improved performance, security and functionality as well as improving development efficiency across the department. I’m a keen developer who enjoys learning new technologies either at work or while working on personal projects. My aim is to continue to build high quality software people can use to achieve their goals while learning new things and improving.        </p>
      </div>

      <div className="text-content-wrapper">
        <h1 className='title'>
          Experience
        </h1>
        <h2 className="sub-title text-block">
          <a href="https://pinewood.ai/automotive-intelligence-platform/" target="_blank">Pinewood.AI</a>, Birmingham
        </h2>
        <div>
          <div className="text-block">
            <h2 className="sub-title">
              Senior Software Developer
            </h2>
            <div className="text">
              July 2022 - Present
            </div>
          </div>
          <div className="text-block">
            <h2 className="sub-title">
              Graduate / Software Developer
            </h2>
            <div className="text">
              May 2020 - July 2022
            </div>
          </div>
          <div className="text-block">
            <h2 className="sub-title">
              Placement Student
            </h2>
            <div className="text">
              June 2018 - May 2020
            </div>
          </div>
        </div>
        <p className="text text-block">
          Award winning, enterprise level automotive dealership management system. Full stack software development in a scrumban agile environment.
        </p>
        <div className="text-block">
          <h2 className="sub-title">Full-stack Feature Implementation</h2>
          <ul className="list">
            <li className="text">
              Leading projects from estimation to completion within set timeframes collaborating with multidisciplinary teams.
            </li>
            <li className="text">
              Implementing Web API endpoints, working with a C# layered business layer and implementing T-SQL.
            </li>
            <li className="text">
              Consuming APIs in a Razor Pages application using C# and creating functionality with HTML and JavaScript.
            </li>
            <li className="text">
              Examples: Major system reports, configuration pages, workshop planning system, HTML document editor.
            </li>
          </ul>
        </div>
        <div className="text-block">
          <h2 className="sub-title">Internal Framework Maintenance</h2>
          <ul className="list">
            <li className="text">
              Creating and maintaining an internal framework (Page model base classes, Layouts, Tag / HTML Helpers, CSS, JavaScript) focussed on improving development speed and standardisation.
            </li>
            <li className="text">
              Specialised in validation (jQuery Unobtrusive, Middleware, Filters), created attributes, implemented email domain validation via web request, virus scanning.
            </li>
          </ul>
        </div>
        <div className="text-block">
          <h2 className="sub-title">Ad Hoc / Legacy System Maintenance</h2>
          <ul className="list">
            <li className="text">
              Architectural changes to migrate from .NET Framework 4.7.2 to .NET 9
            </li>
            <li className="text">
              Implementing data heavy import routines using factory and template method patterns.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-content-wrapper">
        <h1 className='title'>
          Main Technologies
        </h1>
        <ul className="list">
          <li className="text">
            C# 
          </li>
          <li className="text">
            .NET (Framework and Core) 
          </li>
          <li className="text">
            JavaScript (Vanilla, jQuery) 
          </li>
          <li className="text">
            Web API 
          </li>
          <li className="text">
            Razor Pages 
          </li>
          <li className="text">
            HTML
          </li>
          <li className="text">
            CSS 
          </li>
          <li className="text">
            Azure
          </li>
          <li className="text">
            Azure DevOps
          </li>
          <li className="text">
            Git 
          </li>
        </ul>
      </div>

      <div className="content-wrapper">
        <h1 className='title'>
          Qualifications
        </h1>
        <div className="text-block">
          <h2 className="sub-title">
            Bachelor of Science with Honours in Computer Science (First Class)
          </h2>
          <div className="text">
            Birmingham City University
          </div>
          <div className="text">
            2020
          </div>
        </div>
        <div className="text-block">
          <h2 className="sub-title">
            BTEC Level 3 Extended Diploma in Information Technology (Distinction)
          </h2>
          <div className="text">
            Birmingham Metropolitan College (Stourbridge)
          </div>
          <div className="text">
            2016
          </div>
        </div>
      </div>
    </main>
  );
}