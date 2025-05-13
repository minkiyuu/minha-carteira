import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

//prettier-ignore
const Button: React.FC<IButtonProps> = ({ ...rest }) => (
 <Container {...rest} />
);

export default Button;
