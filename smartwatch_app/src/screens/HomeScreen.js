
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StatBox from '../components/StatBox';
import styles from '../styles/styles';

const stepsIcon = { uri: 'https://e7.pngegg.com/pngimages/873/215/png-clipart-computer-icons-footprint-steps-miscellaneous-hand.png' };
const heartIcon = { uri: 'https://st4.depositphotos.com/11523582/21255/v/1600/depositphotos_212555670-stock-illustration-heartbeat-icon-transparent-background-red.jpg' };
const O2Icon = { uri: 'https://cdn-icons-png.freepik.com/512/3476/3476044.png' };

const dailySteps = 1500;
const dailyGoal = 3000;
const heartRate = 96;
const spo2 = 98;

const HomeScreen = () => {
  return (
    <View >
        <div style={styles.container}>
        <Text style={styles.header}>Hi, John Doe</Text>
        {/* <image>{icon1}</image> */}
        </div>
      <div style={styles.container}>
      <View style={styles.statsContainer}>
      <StatBox iconSource={stepsIcon} label={`${dailySteps}/${dailyGoal} Daily Steps`} />
        <StatBox iconSource={heartIcon} label={`${heartRate} BPM Heart Rate`} />
        <StatBox iconSource={O2Icon} label={`${spo2}% SPO2`} />
      </View>
      </div>
      
      <View style={styles.insuranceContainer}>
        <Text style={styles.insuranceText}>Insurance Premium:</Text>
        <Text style={styles.insuranceAmount}>£25</Text>
        <Text style={styles.insuranceDate}>Due Date 31/07/2024</Text>
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>

      <div style={styles.container}>
      <View style={styles.learnContainer}>
        <Text style={styles.learnHeader}>Learn</Text>
        <View style={styles.learnGrid}>
          <View style={styles.learnItem}><Text>Meditation</Text></View>
          <View style={styles.learnItem}><Text>Yoga</Text></View>
          <View style={styles.learnItem}><Text>Dieting</Text></View>
          <View style={styles.learnItem}><Text>Fitness</Text></View>
        </View>
      </View>
      </div>

    </View>
  );
};

export default HomeScreen;
