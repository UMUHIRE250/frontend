import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Beacons from 'react-native-ibeacon';
// import axios from 'axios';

const Welcome = ({ navigation }) => {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //     const region = {
  //         identifier: 'RoomBeacon',
  //         uuid: 'YOUR_BEACON_UUID'
  //     };

  //     Beacons.requestWhenInUseAuthorization();
  //     Beacons.startMonitoringForRegion(region);
  //     Beacons.startRangingBeaconsInRegion(region);

  //     const subscription = Beacons.BeaconsEventEmitter.addListener(
  //         'beaconsDidRange',
  //         (data) => {
  //             if (data.beacons.length > 0) {
  //                 const beacon = data.beacons[0];
  //                 fetchRoomInfo(beacon.uuid);
  //             }
  //         }
  //     );

  //     return () => {
  //         subscription.remove();
  //         Beacons.stopMonitoringForRegion(region);
  //         Beacons.stopRangingBeaconsInRegion(region);
  //     };
  // }, []);

  const fetchRoomInfoAll = async (beaconId) => {
    try {
      const response = await axios.get(
        `https://dd8b-196-12-144-113.ngrok-free.app/api/rooms/`
      );
      setRoom(response.data);
    } catch (err) {
      setError("Error fetching room information");
    }
  };

  useEffect(() => {
    fetchRoomInfoAll();
  }, []);

  return (
    <View style={styles.container}>
      {/* {error && <Text style={styles.error}>{error}</Text>}
            {room ? ( */}

      <View>
        <Text style={styles.title}>welcome</Text>
        <Text style={styles.message}>Agaciro navigation system</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("ListRooms");
          }}
        >
          <Text>View all rooms</Text>
        </TouchableOpacity>
      </View>
      {/* ) : ( */}
      {/* <Text>enjoy the system </Text>
            )} */}
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
  message: {
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default Welcome;
