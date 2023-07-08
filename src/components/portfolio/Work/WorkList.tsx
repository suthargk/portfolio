import { styled } from "../../../../stitches.config";
import { workList } from "../utils";
import WorkItem from "./WorkItem";

const WorkListStyled = styled("div", {});

const WorkList = () => {
  return (
    <WorkListStyled>
      {workList.map((work) => {
        return <WorkItem key={work.id} work={work} />;
      })}
    </WorkListStyled>
  );
};

export default WorkList;
