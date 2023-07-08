import { darkTheme, styled } from "../../../../stitches.config";

const WorkItemStyled = styled("a", {
  width: "100%",
  display: "flex",
  gap: "10px",
  textDecoration: "none",

  "&:not(:last-child)": {
    marginBottom: "20px",
  },
});
const WorkLogoContainer = styled("div", {
  borderRadius: "50%",
  border: `1px solid $gray4`,
  maxWidth: "40px",
  minWidth: "40px",
  height: "40px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",

  [`.${darkTheme} &`]: {
    border: `1px solid $grayDark4`,
  },
});

const CompanyDetail = styled("div", {
  width: "100%",
});

const CompanyName = styled("div", {
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "6px",
  color: "$gray12",

  [`.${darkTheme} &`]: {
    color: `$grayDark12`,
  },
});

const CompanyPosition = styled("div", {
  fontSize: "13px",
  color: "$gray11",

  [`.${darkTheme} &`]: {
    color: `$grayDark11`,
  },
});

const CompanyDuration = styled("div", {
  fontSize: "13px",
  color: "$gray11",

  [`.${darkTheme} &`]: {
    color: `$grayDark10`,
  },
});

const WorkItem = ({ work: { logo, position, duration, company, url } }) => {
  return (
    <WorkItemStyled href={url} target="_blank">
      <WorkLogoContainer>
        <img src={logo} width={24} height={24} />
      </WorkLogoContainer>
      <CompanyDetail>
        <CompanyName>{company}</CompanyName>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CompanyPosition>{position}</CompanyPosition>
          <CompanyDuration>{duration}</CompanyDuration>
        </div>
      </CompanyDetail>
    </WorkItemStyled>
  );
};

export default WorkItem;
