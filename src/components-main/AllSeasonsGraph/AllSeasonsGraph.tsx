import React from 'react';

import {
  IAllSeasonsGraphInputProps
} from './AllSeasonsGraph.interface';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { ViewStyle, TextStyle, View } from 'react-native';
import { styles } from '../../styles';
import {
  TextMedium,
  TextHeadingMedium
} from '../../components-elements';

const styleAllSeasonsGraphWrapper: ViewStyle = {
  height: 300
};

const styleAllSeasonsGraphView: ViewStyle = {
  flex: 1,
  flexDirection: 'row'
};

const styleAllSeasonsGraphXAxis: ViewStyle = {
  paddingVertical: 16
};

const styleAllSeasonsGraphText: TextStyle = {
  marginBottom: 20,
  marginTop: 10,
  textAlign: 'center'
};

// const GraphLabels = ({ data }: {data: IAllSeasonsGraphData[] }) => (
//   <Fragment>
//     { data && data.map((value, index) => (
//       <TextSmall key={index}>
//         { value['Number of food items in season'] }
//       </TextSmall>
//     ))}
//   </Fragment>
// );

export const AllSeasonsGraph = ({
  foodInSeasonGraphData
}: IAllSeasonsGraphInputProps) => (
  foodInSeasonGraphData
    ? <View>
        <TextHeadingMedium style={styleAllSeasonsGraphText}>
          Number of food items in season
        </TextHeadingMedium>
        <View style={styleAllSeasonsGraphWrapper}>
          <BarChart
            svg={{ fill: styles.colors.primaryColor }}
            style={styleAllSeasonsGraphView}
            data={foodInSeasonGraphData}
            gridMin={0}
            xAccessor={({ index }) => index}
            yAccessor={({ item }) => item['Number of food items in season']}>
            <Grid />
          </BarChart>
          <XAxis
            data={foodInSeasonGraphData}
            formatLabel={(value, index) => (
              foodInSeasonGraphData[index].name.slice(0, 3)
            )}
            contentInset={ { left: 15, right: 15 } }
            svg={{
              fill: styles.colors.primaryText,
              fontSize: 10
            }}
            style={styleAllSeasonsGraphXAxis} />
        </View>
        {/* <GraphLabels data={foodInSeasonGraphData} /> */}
        <TextMedium style={styleAllSeasonsGraphText}>
          Enter some text in the search bar to find when certain items are in season
        </TextMedium>
      </View>
    : null
);
