export const metadata = {
  title: "About / CV"
}

export default function About() {
    return (
      <div className="w-3/4 mx-auto flex flex-col gap-20 pb-5">
        <div className="flex flex-col gap-5">
          <h2 className='text-xl font-bold'>
            Personal Statement
          </h2>
          <p>
            A self-motivated and focused full stack software developer with over 6 years of experience of migrating and creating new solutions for a live product using Microsoft technologies. Collaborating with cross functional teams, I’ve helped improve performance, security and functionality as well as improving development efficiency. My aim is to broaden my skills in order to take the next step in my career.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className='text-xl font-bold'>
            Experience
          </h2>
          <h3 className="font-semibold">
            Pinewood Technologies PLC, Birmingham
          </h3>
          <div className="grid grid-cols-2 w-1/2 gap-y-2">
              <span>July 2022 - Present</span> <span className="font-semibold">Senior Software Developer</span>
              <span>May 2020 - July 2022</span> <span className="font-semibold">Graduate / Software Developer</span>
              <span>June 2018 - May 2020</span> <span className="font-semibold">Placement Student</span>
          </div>
          <p>
            Full stack development of an award winning automotive dealership management system. Utilising the following technologies: SQL Server, C#, .NET (Framework and Core), Web API, Razor, HTML, CSS, JavaScript (Vanilla, jQuery), Azure, Azure DevOps, Git. Contributing to work in the platform team maintaining the foundations of the main product.
          </p>
          <ul className="list-disc px-10 space-y-3">
            <li>
              Involved in a major refactor of backend code handling images to allow for migration to Azure.
            </li>
            <li>
              Collaborated with the UX team to redevelop a critical JavaScript heavy page used by hundreds of dealers to upload vehicle images.
            </li>
            <li>
              Directly involved in the creation of a new front end for the flagship product. Our team migrated an area of the system while developing an internal framework intended for use by other teams.
            </li>
            <li>
              Improved performance by optimising SQL data retrieval and minimising API data transfer.
            </li>
            <li>
              Lead work around validation including the creation of client and server side validation rules using jQuery unobtrusive validation, middleware for virus scanning and validation of email domains.
            </li>
            <li>
              Mentored multiple junior developers and worked with them to improve their skills.
            </li>
            <li>
              Implemented code analysis rules to enforce coding standards.
            </li>
            <li>
              Collaborated with the UX team to redesign a planning system for dealers to plan jobs for a workshop.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className='text-xl font-bold'>
            Qualifications
          </h2>
          <div className="flex gap-20">
            <span>2020</span>
            <div className="flex flex-col">
              <span className="font-semibold">
                Bachelor of Science with Honours in Computer Science (First Class)
              </span>
              <span>
                Birmingham City University
              </span>
            </div>
          </div>
          <div className="flex gap-20">
            <span>2016</span>
            <div className="flex flex-col">
              <span className="font-semibold">
                BTEC Level 3 Extended Diploma in Information Technology (Distinction)
              </span>
              <span>
                Birmingham Metropolitan College (Stourbridge)
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }