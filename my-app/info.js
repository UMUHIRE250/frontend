import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const Info = ({ route }) => {
  // const { beaconId } = route.params;
  const [roomInfo, setRoomInfo] = useState(null);
  const [error, setError] = useState(null);

  const { data } = route.params;

  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const response = await axios.get(
          `https://c4d9-154-68-64-230.ngrok-free.app/api/rooms/${data.beaconId}`
        );
        console.log("RESPONSE", response.data);
        setRoomInfo(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchRoomInfo();
  }, []);

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {roomInfo ? (
        <View>
          <Text style={styles.title}>Room: {roomInfo.name}</Text>
          <Text style={styles.info}>INFO:{roomInfo.info}</Text>
          {/* <Text style={styles.info}>Message:{roomInfo[1].welcomeMessage}</Text> */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default Info;
