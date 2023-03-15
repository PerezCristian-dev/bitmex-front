import Link from "next/link";

interface Props {
  link: string;
  title: string;
  content: string;
  date: string;
}

export const Card = ({ link, title, content, date }: Props) => {

  return (
    <div
      className="card"
      style={{
        width: "400px",
        height: "300px",
        margin: "5px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="card-body">
        <h4 className="card-title mb-3 text-center">{title}</h4>

        <span
          dangerouslySetInnerHTML={{ __html: content }}
          className=" "
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "0.8rem",
            lineHeight: "1.2",
            wordWrap: "normal",
            wordBreak: "break-word",
          }}
        ></span>
        <a className="btn btn-primary" href={link} target={"_blank"}>
          Read More
        </a>
      </div>
    </div>
  );
};
