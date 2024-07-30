import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Pressable, Linking } from "react-native";
import StatBox from "../components/StatBox";
import styles from "../styles/styles";
import userjson from "../screens/sampleData.json";
import RNBackgroundFetch from 'react-native-background-fetch';
import axios from "axios";

const stepsIcon = {
  uri: "https://e7.pngegg.com/pngimages/873/215/png-clipart-computer-icons-footprint-steps-miscellaneous-hand.png",
};
const heartIcon = {
  uri: "https://st4.depositphotos.com/11523582/21255/v/1600/depositphotos_212555670-stock-illustration-heartbeat-icon-transparent-background-red.jpg",
};
const O2Icon = {
  uri: "https://cdn-icons-png.freepik.com/512/3476/3476044.png",
};

// const dailySteps = 1500;
const dailyGoal = 8000;
// const heartRate = 96;
// const spo2 = 98;

const HomeScreen = () => {
  const [userData, setUserData] = useState(userjson);
  const [insurance_amount,setAmount] = useState(500);
  const [discount,setDiscount] = useState(0);
  const [dueDate,setDueDate]=useState("25/04/2024")

  const postData = async () => {
    try {
      const response = await axios.post(
        "http://192.168.184.161:8080/fitness-data/",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const fetchData = async () => {
    try {
      axios.get("http://192.168.184.161:8080/getInsuranceValue").then((response) => {setAmount(response.data["amount"]);setDueDate(response.data["due_date"]);setDiscount((response.data["discount"]*100).toFixed(0)-1)})
    }catch (error)
    {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData();
}, [])


  useEffect(() => {
    const onEvent = async (taskId) => {
      console.log("[BackgroundFetch] taskId:", taskId);
      await postData();
      RNBackgroundFetch.finish(taskId);
    };

    const onTimeout = async (taskId) => {
      console.log("[BackgroundFetch] TIMEOUT taskId:", taskId);
      RNBackgroundFetch.finish(taskId);
    };

    RNBackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // <-- minutes (15 is minimum allowed)
        stopOnTerminate: false,
        startOnBoot: true,
        enableHeadless: true,
      },
      onEvent,
      onTimeout
    );

    RNBackgroundFetch.scheduleTask({
      taskId: "com.example.postData",
      delay: 24 * 60 * 60 * 1000, // <-- milliseconds (1 day)
      forceAlarmManager: true,
      periodic: true,
      stopOnTerminate: false,
      startOnBoot: true,
    });

    return () => {
      RNBackgroundFetch.stop();
    };
  }, []);

  const handlePress = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log(`Unable to open URI: ${url}`);
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <View>
      <div style={styles.container}>
        <Text style={styles.header}>Hi, {userData.userName}</Text>
      </div>
      <div style={styles.container}>
        <View style={styles.statsContainer}>
          <StatBox
            iconSource={stepsIcon}
            label={`${userData.stepCount}/${dailyGoal} Daily Steps`}
          />
          <StatBox
            iconSource={heartIcon}
            label={`${userData.heartRate} BPM Heart Rate`}
          />
          <StatBox iconSource={O2Icon} label={`${userData.spO2}% SPO2`} />
        </View>
      </div>

      <View style={styles.insuranceContainer}>
        <Text style={styles.insuranceText}>Insurance Premium:</Text>
        <Text style={styles.insuranceAmount}>₹{insurance_amount}</Text>
        <Text style={styles.insuranceDate}>Discount: {discount} %</Text>
        <Text style={styles.insuranceDate}>Due Date {dueDate}</Text>
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowText} onPress={() => handlePress(`upi://pay?pa=insurance@testbank&pn=LifeInsurance&tn=InsurancePremium&am=${insurance_amount}&cu=INR`)} >Pay Now</Text>
        </TouchableOpacity>
      </View>

      <div style={styles.container}>
        <View style={styles.learnContainer}>
          <Text style={styles.learnHeader}>Learn</Text>
          <View style={styles.learnGrid}>
            <View style={styles.learnItem}>
              <Pressable
                onPress={() =>
                  handlePress("https://www.youtube.com/watch?v=VpHz8Mb13_Y")
                }
              >
                <Text>Meditation</Text>
              </Pressable>
            </View>
            <View style={styles.learnItem}>
              <Pressable
                onPress={() =>
                  handlePress("https://www.youtube.com/watch?v=vNyJuQuuMC8")
                }
              >
                <Text>Yoga</Text>
              </Pressable>
            </View>
            <View style={styles.learnItem}>
              <Pressable
                onPress={() =>
                  handlePress("https://www.youtube.com/watch?v=bREPaPWc2zI")
                }
              >
                <Text>Diet</Text>
              </Pressable>
            </View>
            <View style={styles.learnItem}>
              <Pressable
                onPress={() =>
                  handlePress("https://www.youtube.com/watch?v=rBUjOY12gJA")
                }
              >
                <Text>Fitness</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </div>
    </View>
  );
};

export default HomeScreen;
