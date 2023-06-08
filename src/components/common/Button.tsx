import { styled } from "../../../stitches.config";

const ButtonStyle = styled("button", {
  background: "#fff",
  border: "none",
  cursor: "pointer",
});

const Button = ({ ...rest }) => {
  return <ButtonStyle {...rest} />;
};

export default Button;
