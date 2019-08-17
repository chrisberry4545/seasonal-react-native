import React, { FC, Fragment } from 'react';
import { ISelectOption } from '@chrisb-dev/seasonal-shared';
import { ViewStyle, TextStyle, Modal } from 'react-native';
import { BareButton } from '../Buttons';
import { TextLarge } from '../Text';
import { colors } from '../../styles/colors';

const styleSelectOption: ViewStyle = {
  borderColor: colors.greyLight,
  borderWidth: 1,
  padding: 10
};

const styleSelectOptionSelected: TextStyle = {
  backgroundColor: colors.greyLight
};

export const SelectBox: FC<{
  options: ISelectOption[] | undefined,
  onSelected?: (selectedValue: string) => void
}> = ({
  options,
  onSelected
}) => (
  <Fragment>
  {/* <Modal transparent={false} animationType='slide' visible={true}>
    <TextLarge>Test modal</TextLarge>
  </Modal> */}
  {
    options && options.map((selectOptions) => (
      <BareButton
        style={[
          styleSelectOption,
            ...(selectOptions.isSelected
              ? [styleSelectOptionSelected]
              : []
            )
        ]}
        key={selectOptions.value}
        onClick={() => onSelected && onSelected(selectOptions.value)}>
        <TextLarge>
          {selectOptions.name}
        </TextLarge>
      </BareButton>
    ))
  }
  </Fragment>
);

// import React, {Component} from 'react';
// import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// export class SelectBox extends Component {
//   state = {
//     modalVisible: false,
//   };

//   setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//   }

//   render() {
//     return (
//       <View style={{marginTop: 22}}>
//         <Modal
//           presentationStyle='pageSheet'
//           animationType='fade'
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
