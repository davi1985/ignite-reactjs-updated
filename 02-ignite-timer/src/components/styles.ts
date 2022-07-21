import styled, { css } from "styled-components";
import { ButtonContainerProps } from "./types";

const buttonVariant = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${({ variant }) =>
    css`
      background-color: ${buttonVariant[variant]};
    `}
`;
