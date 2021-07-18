import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import {styles} from './style';
import HeaderBar from '../../../shared/header-bar';
import {sharedImages} from '../../../images';

class Prayer extends React.Component {
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
          headerTitle="Prayers"
          onPressLeftIcon={() => goBack()}
        />

        <View style={styles.body}>
          <Text style={styles.termsText}>
            View our latest prayer below as well as the most popular prayers.
          </Text>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.imageItem}
                />
                <View>
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Text>{item.content}</Text>
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
    image: sharedImages.morningPrayer,
    title: 'A Morning Prayer for God"s Presence',
    content:
      'Lord, may nothing separate me from You today. Teach me how to choose only Your way today so each step will lead me closer to You. Help me walk by the Word and not my feelings. Help me to keep my heart pure and undivided. Protect me from my own careless thoughts, words, and actions. And keep me from being distracted by MY wants, MY desires, MY thoughts on how things should be. Help me to embrace what comes my way as an opportunity... rather than a personal inconvenience. And finally, help me to rest in the truth of Psalm 86:13,  Amen.',
  },
];

export default Prayer;
