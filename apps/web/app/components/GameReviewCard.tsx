import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import * as styles from './GameReviewCardStyles';

const GameReviewCard = ({data}) => {
    return (
        <View style={styles.container}>
            <View style = {styles.row}>
                <styles.UserIcon source={{ uri: data.userIcon }} />
                <Text style={styles.userName}>{data.userName}</Text>
                <styles.GameIcon source={{uri: data.gameIcon}} />
                <Text style={styles.gameTitle}>{data.gameName}</Text>
            </View>

            <Text style={styles.reviewTitle}>{data.reviewTitle}</Text>
            <Text style={styles.reviewText}>{data.reviewText}</Text>

            <View style={styles.row}>
                {data.hashtags.map(tag => (
                  <Text key={tag} style={styles.hashtag}>#{tag}</Text>
                 ))}
            </View>


            <View style={styles.buttonRow}>
                <TouchableOpacity>
                  <Text>♡</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>📗</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>💬</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GameReviewCard;