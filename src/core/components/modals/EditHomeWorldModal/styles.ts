import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 10px;
  position: absolute;
  left: 50%;
  background-color: white;
  margin-top: 15%;
  padding: 15px 20px;
  width: 500px;
  transform: translateX(-50%);
`;

export const Header = styled.div`
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  margin-bottom: 30px;
  > * {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
