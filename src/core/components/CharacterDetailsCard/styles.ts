import { Card, colors } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Title = styled.div`
  border-bottom: 1px solid ${colors.grey[300]};
  font-size: 25px;
  font-weight: bold;
  color: ${colors.blue[400]};
  margin: 10px 0px;

`;

export const StyledCard = styled(Card)`
  width: 600px;
  padding: 10px 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RightCard = styled(Card)`
  width: 300px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopPartWrapper = styled.div``;
