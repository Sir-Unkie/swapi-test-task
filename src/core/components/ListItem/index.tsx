import { Divider, Typography, colors } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import * as UI from './styles';
import { IListItemProps } from './types';

const ListItem = (props: IListItemProps) => {
  const { headerText, titleText, bodyText, bottomText, routeToVavigate } = props;

  const navigate = useNavigate();

  const cardClickHandler = () => {
    navigate(routeToVavigate);
  };

  return (
    <UI.StyledCard>
      <UI.StyledCardActionArea
        onClick={cardClickHandler}
      >
        <Typography>{headerText}</Typography>
        <Divider />
        <Typography color={colors.blue[400]} fontWeight={500} paddingTop={2}>{titleText}</Typography>
        <Typography paddingTop={1}>{bodyText}</Typography>
        <Typography color={colors.blue[400]} paddingTop={2}>{bottomText}</Typography>
      </UI.StyledCardActionArea>
    </UI.StyledCard>
  );
};

export default ListItem;
