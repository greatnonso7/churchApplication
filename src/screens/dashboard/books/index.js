import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import HeaderBar from '../../../shared/header-bar';
import {hp} from '../../../shared/responsive-dimension';
import {styles} from './style';
import {sharedImages} from '../../../images';

class Books extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {goBack, navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderBar
          hasBackButton
          headerTitle="Books"
          tintColor="#000"
          onPressLeftIcon={() => goBack()}
        />

        <View style={styles.body}>
          <FlatList
            contentContainerStyle={{paddingBottom: hp(100)}}
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={3}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.itemContainer}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={styles.imageItem}
                />
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
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
    image: sharedImages.book1,
    title: 'Capital Campaign',
    url: 'Media',
  },
  {
    id: '2',
    image: sharedImages.book2,
    title: 'Deep\nDiscipline',
    url: 'Events',
  },
  {id: '3', image: sharedImages.book3, title: 'Essentials', url: 'Giving'},
  {
    id: '4',
    image: sharedImages.book4,
    title: 'Big Idea\nSermons',
    url: 'LiveStream',
  },
  {
    id: '5',
    image: sharedImages.book5,
    title: 'Leading\nsmall groups',
    url: 'Books',
  },
  {
    id: '6',
    image: sharedImages.book6,
    title: 'Love your church',
    url: 'Payers',
  },
  {id: '7', image: sharedImages.book7, title: 'Preaching', url: 'Contact'},
  {
    id: '8',
    image: sharedImages.book8,
    title: 'We want you here',
    url: 'Attend',
  },
  {
    id: '8',
    image: sharedImages.book9,
    title: 'Full circle\nparenting',
    url: 'Attend',
  },
  {
    id: '8',
    image: sharedImages.book10,
    title: 'Designed\nto lead',
    url: 'Attend',
  },
  {
    id: '8',
    image: sharedImages.book11,
    title: 'Leading\nsmall groups',
    url: 'Attend',
  },
  {id: '8', image: sharedImages.book12, title: 'Growing up', url: 'Attend'},
  {
    id: '8',
    image: sharedImages.book13,
    title: 'Lies women\nbelieve',
    url: 'Attend',
  },
  {
    id: '8',
    image: sharedImages.book14,
    title: 'Love your church',
    url: 'Attend',
  },
  {
    id: '8',
    image: sharedImages.book15,
    title: 'No silver\nbullet',
    url: 'Attend',
  },
  {
    id: '8',
    image: sharedImages.book16,
    title: "Pastor's Manual ",
    url: 'Attend',
  },
  {id: '8', image: sharedImages.book17, title: 'Preach', url: 'Attend'},
  {
    id: '8',
    image: sharedImages.book18,
    title: 'Share Jesus\nwithout fear',
    url: 'Attend',
  },
];

export default Books;
