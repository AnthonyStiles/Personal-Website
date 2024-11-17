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
          A self-motivated and focused full stack software developer with over 6 years of experience of migrating and creating new solutions for a live product using Microsoft technologies. Collaborating with cross functional teams, I’ve helped improve performance, security and functionality as well as improving development efficiency. My aim is to broaden my skills in order to take the next step in my career.
        </p>
      </div>

      <div className="text-content-wrapper">
        <h1 className='title'>
          Experience
        </h1>
        <h2 className="sub-title text-block">
          Pinewood.AI, Birmingham
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
          Full stack development of an award winning automotive dealership management system. Utilising the following technologies: SQL Server, C#, .NET (Framework and Core), Web API, Razor, HTML, CSS, JavaScript (Vanilla, jQuery), Azure, Azure DevOps, Git. Contributing to work in the platform team maintaining the foundations of the main product.
        </p>
        <ul className="list">
          <li className="text text-block">
            Involved in a major refactor of backend code handling images to allow for migration to Azure.
          </li>
          <li className="text text-block">
            Collaborated with the UX team to redevelop a critical JavaScript heavy page used by hundreds of dealers to upload vehicle images.
          </li>
          <li className="text text-block">
            Directly involved in the creation of a new front end for the flagship product. Our team migrated an area of the system while developing an internal framework intended for use by other teams.
          </li>
          <li className="text text-block">
            Improved performance by optimising SQL data retrieval and minimising API data transfer.
          </li>
          <li className="text text-block">
            Lead work around validation including the creation of client and server side validation rules using jQuery unobtrusive validation, middleware for virus scanning and validation of email domains.
          </li>
          <li className="text text-block">
            Mentored multiple junior developers and worked with them to improve their skills.
          </li>
          <li className="text text-block">
            Implemented code analysis rules to enforce coding standards.
          </li>
          <li className="text text-block">
            Collaborated with the UX team to redesign a planning system for dealers to plan jobs for a workshop.
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