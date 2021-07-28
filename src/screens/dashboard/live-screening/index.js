import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import YoutubeIframe, {getYoutubeMeta} from 'react-native-youtube-iframe';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderBar from '../../../shared/header-bar';
import {styles} from './style';
import {hp} from '../../../shared/responsive-dimension';

const videoSeries = [
  '5JjEt2EJI14',
  'CHc46MMVWkI',
  'P0RNve6DG6M',
  'yf-8GJrX9Xg',
  'QKySt8dK7QY',
  'H7h5BHax06c',
  'k3k8VEN13a0',
];

const LiveStream = props => {
  const [modalVisible, showModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  const onVideoPress = useCallback(videoId => {
    showModal(true);
    setSelectedVideo(videoId);
  }, []);

  useEffect(() => {
    getProgress().then(p => {
      setProgress(p);
    });
  }, [modalVisible]);

  const closeModal = useCallback(() => showModal(false), []);

  return (
    <View style={styles.container}>
      <HeaderBar
        headerTitle={'Our Live Streams'}
        hasBackButton
        tintColor={'#000'}
        onPressLeftIcon={() => props.navigation.goBack()}
      />
      <FlatList
        contentContainerStyle={{margin: 16}}
        ListHeaderComponent={
          <>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              RCCG SOLID ROCK CHURCH DERBY
            </Text>
          </>
        }
        ListFooterComponent={<View style={{marginBottom: 50}} />}
        data={videoSeries}
        renderItem={({item}) => (
          <VideoItem videoId={item} onPress={onVideoPress} />
        )}
        keyExtractor={item => item}
      />
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}>
        <VideoModal videoId={selectedVideo} onClose={closeModal} />
      </Modal>
    </View>
  );
};

const getProgress = async () => {
  const total = videoSeries.length;
  let completed = 0;
  for (let i = 0; i < total; i++) {
    const videoId = videoSeries[i];
    const status = await getVideoProgress(videoId);
    if (status?.completed) {
      completed += 1;
    }
  }
  return completed / total;
};

const VideoItem = ({videoId, onPress}) => {
  const [videoMeta, setVideoMeta] = useState(null);
  useEffect(() => {
    getYoutubeMeta(videoId).then(data => {
      setVideoMeta(data);
    });
  }, [videoId]);

  if (videoMeta) {
    return (
      <TouchableOpacity
        onPress={() => onPress(videoId)}
        style={{flexDirection: 'row', marginVertical: 16}}>
        <Image
          source={{uri: videoMeta.thumbnail_url}}
          style={{
            width: videoMeta.thumbnail_width / hp(4),
            height: videoMeta.thumbnail_height / hp(4),
          }}
        />
        <View style={{justifyContent: 'center', marginStart: 6}}>
          <Text
            style={{marginVertical: 4, fontWeight: 'bold', maxWidth: hp(240)}}>
            {videoMeta.title}
          </Text>
          <Text>{videoMeta.author_name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return null;
};

const VideoModal = ({videoId, onClose}) => {
  const playerRef = useRef(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      playerRef.current?.getCurrentTime().then(data => {
        saveVideoProgress({
          videoId,
          completed,
          timeStamp: data,
        });
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [videoId, completed]);

  const onPlayerReady = useCallback(() => {
    getVideoProgress(videoId).then(data => {
      if (data.timeStamp) {
        playerRef.current?.seekTo(data.timeStamp);
      }
    });
  }, [videoId]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000dd',
        justifyContent: 'center',
      }}>
      <View style={{backgroundColor: 'white', padding: 16}}>
        <Text onPress={onClose} style={{textAlign: 'right'}}>
          Close
        </Text>
        <YoutubeIframe
          ref={playerRef}
          play={true}
          videoId={videoId}
          height={250}
          onReady={onPlayerReady}
          onChangeState={state => {
            if (state === 'ended') {
              setCompleted(true);
            }
          }}
        />
      </View>
    </View>
  );
};

const saveVideoProgress = ({videoId, completed, timeStamp}) => {
  const data = {
    completed,
    timeStamp,
  };

  return AsyncStorage.setItem(videoId, JSON.stringify(data));
};

const getVideoProgress = async videoId => {
  const json = await AsyncStorage.getItem(videoId);
  if (json) {
    return JSON.parse(json);
  }
  return {
    completed: false,
    timeStamp: 0,
  };
};

export default LiveStream;
