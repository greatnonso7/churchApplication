import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import HeaderBar from '../../shared/header-bar';
import {styles} from './style';

import {sharedImages} from '../../images';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <HeaderBar />
        <View style={styles.logoContainer}>
          <Image
            source={sharedImages.logo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
        <View style={styles.body}>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigate(item.url)}
                style={styles.itemContainer}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.imageItem}
                />
                <View style={styles.overlay}>
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const data = [
  {id: '1', image: sharedImages.media, title: 'Media', url: 'Media'},
  {id: '2', image: sharedImages.event, title: 'Event', url: 'Events'},
  {id: '3', image: sharedImages.giving, title: 'Giving', url: 'Giving'},
  {id: '4', image: sharedImages.live, title: 'Live Stream', url: 'LiveStream'},
  {id: '5', image: sharedImages.books, title: 'Books', url: 'Books'},
  {id: '6', image: sharedImages.prayer, title: 'Payers', url: 'Payers'},
  {id: '7', image: sharedImages.contact, title: 'Contact', url: 'Contact'},
  {id: '8', image: sharedImages.attend, title: 'Attend', url: 'Attend'},
];

export default Dashboard;
