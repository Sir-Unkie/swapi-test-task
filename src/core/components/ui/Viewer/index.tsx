import * as UI from './styles';
import { IViewerProps } from './types';

const Viewer = (props: IViewerProps) => {
  const { label, value } = props;

  return (
    <UI.Wrapper>
      <UI.Label>{label}</UI.Label>
      <UI.Value>{value}</UI.Value>
    </UI.Wrapper>
  );
};

export default Viewer;
