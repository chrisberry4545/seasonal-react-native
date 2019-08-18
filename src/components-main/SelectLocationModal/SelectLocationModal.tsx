import React, { FC } from 'react';
import { ISelectLocationModalProps } from './SelectLocationModal.interface';
import { SelectLocationConnecter } from '../SelectLocation/SelectLocation.connector';
import { ModalLayout } from '../../components-layout';
import { TextSmall } from '../../components-elements';
import { TextStyle } from 'react-native';

const styleSelectLocationModalInfoText: TextStyle = {
  marginTop: 8
};

export const SelectLocationModal: FC<ISelectLocationModalProps> = ({
  isVisible,
  closeLocationPopup
}) => (
  <ModalLayout
    isVisible={isVisible}
    onClose={closeLocationPopup}>
      <SelectLocationConnecter />
      <TextSmall style={styleSelectLocationModalInfoText}>
        You can change this later in the settings
      </TextSmall>
  </ModalLayout>
);
