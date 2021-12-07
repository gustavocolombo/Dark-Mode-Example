import styled from "styled-components";

export const Container = styled.div`
  height: 3.75rem;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  span{
    font-size: 1.125rem;
    font-weight: 600;
  }
`