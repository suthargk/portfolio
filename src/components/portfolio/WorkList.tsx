import { styled } from "../../../stitches.config";
import CustomLink from "../common/CustomLink";
import { workList } from "./utils";

const WorkListStyle = styled("ul", {});

const WorkItemStyle = styled("li", {
  listStyle: "none",
});
const WorkDescription = styled("span", {
  color: "$gray12",
  fontSize: "18px",
});

const WorkTitle = styled("span", {
  fontSize: "15px",
  position: "relative",

  "&::before": {
    display: "block",
    content: "",
    width: "1px",
    height: "15px",
    backgroundColor: "$indigo9",
    marginLeft: "-15px",
    position: "absolute",
    top: "10%",
  },
});

const Figure = styled("figure", {
  aspectRatio: 2 / 1,
  position: "relative",
});

const Picture = styled("picture", {
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  width: "100%",
  height: "100%",
  display: "flex",
  maxWidth: "none",
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const WorkItem = ({ item }) => {
  return (
    <WorkItemStyle className="work-item">
      <CustomLink href={item.path} target="_blank">
        <span style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <WorkTitle>{item.name}</WorkTitle>
          <WorkDescription>{item.description}</WorkDescription>
        </span>
      </CustomLink>
      <Figure>
        <CustomLink href={item.path} target="_blank">
          <Picture>
            <Image src={item.imgSrc} />
          </Picture>
        </CustomLink>
      </Figure>
    </WorkItemStyle>
  );
};
const WorkList = () => {
  return (
    <WorkListStyle className="work-list">
      {workList.map((item) => {
        return <WorkItem key={item.id} item={item} />;
      })}
    </WorkListStyle>
  );
};

export default WorkList;
