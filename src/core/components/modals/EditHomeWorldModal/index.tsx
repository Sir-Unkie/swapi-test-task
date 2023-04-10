import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Modal } from '@mui/material';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import ControlledTextField from '@core/components/ui/controlledInputs/ControlledTextField';
import { useAppDispatch } from '@core/store';
import { updateHomeWorldData } from '@core/store/characterDetails';

import { editHomeWorldFormSchema, formFieldsNames } from './schema/editHomeWorldFormSchema';
import * as UI from './styles';
import { IEditHomeWorldForm, IEditHomeWorldModalProps } from './types';
import { formValuesAdapter } from './utils';

const EditHomeWorldModal = (props: IEditHomeWorldModalProps) => {
  const { isOpen, onClose, closeModal, homeWorld } = props;
  const dispatch = useAppDispatch();

  const formMethods = useForm<IEditHomeWorldForm>({
    mode: 'onSubmit',
    resolver: yupResolver(editHomeWorldFormSchema),
  });

  const { handleSubmit, reset } = formMethods;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { climate, diameter, gravity, orbital_period: orbitalPeriod, population } = homeWorld ?? {};

  useEffect(() => {
    reset({
      climate: climate ?? '',
      diameter: Number(diameter) ?? null,
      gravity: Number(gravity) ?? null,
      // eslint-disable-next-line camelcase
      orbital_period: Number(orbitalPeriod) ?? null,
      population: Number(population) ?? null,
    });
  }, [climate, diameter, gravity, orbitalPeriod, population, reset]);

  const onSubmit = (formValues: IEditHomeWorldForm) => {
    if (!homeWorld) return;

    const { name, url } = homeWorld;
    const payload = formValuesAdapter(formValues, name, url);

    dispatch(updateHomeWorldData(payload));
    closeModal();
  };

  const editClickHandler = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <UI.Wrapper>
        <UI.Header>
          {`Edit ${homeWorld?.name} data`}
        </UI.Header>

        <FormProvider {...formMethods}>
          <UI.Row>
            <ControlledTextField
              label="climate"
              name={formFieldsNames.climate}
            />
          </UI.Row>

          <UI.Row>
            <ControlledTextField
              label="diameter"
              name={formFieldsNames.diameter}
            />
          </UI.Row>

          <UI.Row>
            <ControlledTextField
              label="gravity"
              name={formFieldsNames.gravity}
            />
          </UI.Row>

          <UI.Row>
            <ControlledTextField
              label="orbitalPeriod"
              name={formFieldsNames.orbitalPeriod}
            />
          </UI.Row>

          <UI.Row>
            <ControlledTextField
              label="population"
              name={formFieldsNames.population}
            />
          </UI.Row>

        </FormProvider>

        <UI.ButtonWrapper>
          <Button variant="contained" onClick={editClickHandler}>Apply</Button>
          <Button color="error" variant="outlined" onClick={closeModal}>Cancel</Button>
        </UI.ButtonWrapper>
      </UI.Wrapper>
    </Modal>
  );
};

export default EditHomeWorldModal;
