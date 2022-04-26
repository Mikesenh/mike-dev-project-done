import classes from "../pages/util-css.module.css";
import Image from "next/dist/client/image";
import Link from "next/link";

export default function Projbox(props) {
  return (
    <>
      <div className="row m-3 mb-5">
        <div className="col-sm-12 col-md-6 mt-5 d-flex align-items-center justify-content-center">
          <Image
            src={props.imagesrc}
            alt={props.imagealt}
            width={500}
            height={300}
          />
        </div>
        <div className="col mt-3 d-flex justify-content-center flex-column">
          <p className="m-0">
          {props.codestack}
            
          </p>
          <h5 className="m-0">{props.projectname}</h5>
          <small className="my-1">Timeline: {props.date}</small>
          <p>
          {props.summary}
            
          </p>
          {props.figmalink &&  <a href={props.figmalink}>Figma Design File: WireFrame & Prototypes</a>}
          {props.githublink &&  <a href={props.githublink}>Github Repo: Code & Developement</a>}
          {props.sitelink &&  <a href={props.sitelink}>Live: Render & Served</a>}
          
        </div>
      </div>
    </>
  );
}
