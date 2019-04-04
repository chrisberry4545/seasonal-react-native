import React, { SFC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';

import { IImageGrid } from './ImageGrid.interface';

import { ImageGridItem } from '../ImageGridItem/ImageGridItem';
import { TextHeadingMedium } from '../../components-elements';

const styleImageGrid: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: 8
};

const styleImageGridNoResults: TextStyle = {
  flex: 1,
  marginTop: 20,
  textAlign: 'center'
};

export const ImageGrid: SFC<IImageGrid> = ({
  data,
  onClick
}) => (
  <View style={ styleImageGrid }>
    {
      data && data.length > 0
        ? data.map((item, index) => (
          <ImageGridItem { ...item }
            evenGridItem={ index % 2 === 0 } onClick={onClick} />
        ))
        : <TextHeadingMedium
            style={ styleImageGridNoResults }>
            No results found
          </TextHeadingMedium>
    }
  </View>
);
