import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  @media (max-width: 600px) {
    margin-left: 20px;
  }
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
  })
)<ReactSwitchProps>`
  margin: 10px;
`;
