import { styled } from "../../../stitches.config";

const ButtonStyle = styled("button", {
  background: "#fff",
  border: "none",
  cursor: "pointer",
  backgroundColor: "$blue10",
  padding: "10px 15px",
  borderRadius: "5px",
});

const Button = ({ ...rest }) => {
  return <ButtonStyle {...rest} />;
};

export default Button;
