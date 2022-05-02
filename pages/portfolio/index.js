import Image from "next/dist/client/image";
import classes from ".././util-css.module.css";
import Link from "next/link";
import Projbox from "../../components/projbox";

export default function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mx-3">
          <div className="col-9 d-flex  justify-content-center flex-column">
            <h1 className={`${classes.textrighteous} `}>
              These Projects where build from the ground up.
            </h1>
            <h4 className={`${classes.textdosis} `}>
              I must confess, It’s a work in progress... with juggling school
              work and family responsibilities, I have not had enough time to
              work on my portfolio.
            </h4>
          </div>

          <div className="col-3 d-flex align-items-center justify-content-end">
            <Image
              src="/dev_portfolio.png"
              alt="photo of michael tran in a hexigon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <Projbox
          imagesrc="/mikesenh_thumbnail.png"
          imagealt="mikesenh mikes first project"
          codestack="HTML / CSS / JavaScript / React / Next / Boostrap"
          projectname="Personal Website: Mikesenh"
          date="3/29/2022 - 4/28/2022"
          summary="This is my first portfolio on the internet, using everything I know so far I created this near the end of my senior year of college. It has a mixture of react and next which was not taught in school as well as some experimentation of animation on some pages."
          figmalink="https://www.figma.com/file/GHFG6gClo9piNUAW6bRL6g/Project-JS%3A-Mikesenh?node-id=0%3A1"
          githublink="https://github.com/Tewinsky/mike-dev-project-done"
          sitelink=""
        />
        <Projbox
          imagesrc="/starway_thumbnail.png"
          imagealt="starway a fictional design I had on the fly"
          codestack="N/A Only Design"
          projectname="Just Web Designing: Starway"
          date="4/26/2022 - 4/28/2022"
          summary="As you may know, this site is new, so I only want the best type of work on it. I figure I add in what I currently playing around with in the design department a company specializing in space travel! it's all theory, but a fun exercise non the less."
          figmalink="https://www.figma.com/file/ezHQDY7Kiqn19O5Stv2sUy/Project-JS%3A-StarWay?node-id=6%3A2"
          githublink=""
          sitelink=""
        />
        <Projbox
          imagesrc="/jjanadhi_thumbnail.png"
          imagealt="Janadhi & Company was a Company I worked for!"
          codestack="HTML / CSS / JavaScript / Bootstrap"
          projectname="School Project: Janadhi & Company"
          date="1/29/2021 - 3/28/2021"
          summary="I had a school assignment to update an old company website, It was a mixture of contacting the owner of the site and doing good free work! it was a whole lot of design and after that a whole lot of coding."
          figmalink="https://www.figma.com/file/h82egEsVmUnZLWjlcVmKCg/Janadhi-%26-Company-Design?node-id=0%3A1"
          githublink=""
          sitelink="https://janadhi.com/V9/index.html"
        />
        <Projbox
          imagesrc="/shepherd_thumbnail.png"
          imagealt="probate shepherd member probate attorneys"
          codestack="N/A Only Design"
          projectname="Client Design: Probate Shepherd"
          date="2/29/2022 - 4/01/2022"
          summary="my first ever contract work, where I was paid to design a website working with the client to get the image perfect! That's one of my real-world professional experience so far."
          figmalink="https://www.figma.com/file/uCbOoFhwCsL49kquaXZCAM/Untitled?node-id=0%3A1"
          githublink=""
          sitelink=""
        />
      </div>
    </>
  );
}
