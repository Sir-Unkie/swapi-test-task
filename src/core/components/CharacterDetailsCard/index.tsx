import { Button } from '@mui/material';
import { useState } from 'react';

import { extractIdFromUrl } from '@core/utils/characters';

import EditHomeWorldModal from '../modals/EditHomeWorldModal';
import Viewer from '../ui/Viewer';

import * as UI from './styles';
import { ICharacterDetailsCardProps } from './types';

const CharacterDetailsCard = (props: ICharacterDetailsCardProps) => {
  const { character, homeworld, species } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const characterId = extractIdFromUrl(character.url);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <UI.Wrapper>

        <UI.StyledCard>
          <UI.Title>{`Character № ${characterId}`}</UI.Title>

          <Viewer label="Name:" value={character.name} />
          <Viewer label="Gender:" value={character.gender ?? '-'} />
          <Viewer label="Height:" value={character.height} />
          <Viewer label="Mass:" value={character.mass} />
          <Viewer label="Skin color:" value={character.skin_color} />

          <UI.Title>Species info</UI.Title>
          <Viewer label="Race:" value={species?.name ?? '-'} />
          <Viewer label="Language:" value={species?.language ?? '-'} />
          <Viewer label="Classification:" value={species?.classification ?? '-'} />
          <Viewer label="Homeworld:" value={homeworld?.name ?? '-'} />
        </UI.StyledCard>

        <UI.RightCard>
          <UI.TopPartWrapper>
            <UI.Title>Homeworld info</UI.Title>

            <Viewer label="Planet name:" value={homeworld?.name ?? '-'} />
            <Viewer label="Population:" value={homeworld?.population ?? '-'} />
            <Viewer label="Gravity:" value={homeworld?.gravity ?? '-'} />
            <Viewer label="Climate:" value={homeworld?.climate ?? '-'} />
            <Viewer label="Orbital period:" value={homeworld?.orbital_period ?? '-'} />
            <Viewer label="Planet diameter:" value={homeworld?.diameter ?? '-'} />
          </UI.TopPartWrapper>

          <UI.ButtonWrapper>
            <Button variant="contained" onClick={() => { setIsModalOpen(true); }}>Edit</Button>
          </UI.ButtonWrapper>
        </UI.RightCard>

      </UI.Wrapper>

      <EditHomeWorldModal
        closeModal={closeModal}
        homeWorld={homeworld}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default CharacterDetailsCard;
