import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import HeaderBar from '../../../shared/header-bar';
import {styles} from './style';
import {hp} from '../../../shared/responsive-dimension';
import {sharedImages} from '../../../images';

class Giving extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {goBack, navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderBar
          hasBackButton
          headerTitle="Giving"
          tintColor="#000"
          onPressLeftIcon={() => goBack()}
        />
        <View style={styles.body}>
          <Text style={styles.buttonText}>
            Below are account detials for any transactions you want to carry
            out.
          </Text>

          <FlatList
            data={data}
            contentContainerStyle={{marginTop: hp(20)}}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Image
                  source={item.bank}
                  resizeMode="contain"
                  style={styles.imageItem}
                />
                <View>
                  <Text style={styles.accountName}>{item.accountName}</Text>
                  <Text style={styles.accountNumber}>{item.accountNumber}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const data = [
  {
    id: '1',
    bank: sharedImages.gtb,
    accountName: 'RCCG Solid Rock Church',
    accountNumber: '0000000022',
  },
  {
    id: '2',
    bank: sharedImages.uba,
    accountName: 'RCCG Solid Rock Church',
    accountNumber: '3500000022',
  },
  {
    id: '3',
    bank: sharedImages.zenith,
    accountName: 'RCCG Solid Rock Church',
    accountNumber: '0002400022',
  },
];

export default Giving;
