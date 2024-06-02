import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const AllRooms = ({ route }) => {
  // const { beaconId } = route.params;
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `https://c4d9-154-68-64-230.ngrok-free.app/api/rooms`
        );
        console.log("RESPONSE", response.data);
        setRooms(response.data);
        setError(null);
      } catch (err) {
        console.log("ERROR=====", err);
        setError(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}
      {rooms.length > 0 ? (
        <View style={{ gap: 20 }}>
          {rooms.map((room) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: "grey",
                padding: 4,
                borderRadius: 4,
              }}
              key={room.id}
            >
              <Text style={styles.label}>Room: {room.name}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Info", { data: room });
                }}
              >
                <Text>View all info</Text>
              </TouchableOpacity>
            </View>
          ))}

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
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
  },
  info: {
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});

export default AllRooms;
