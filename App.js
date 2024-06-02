import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./my-app/Welcome";
import info from "./my-app/info";
import AllRooms from "./my-app/AllRooms";
const Stack = createStackNavigator();

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(null);

  // useEffect(() => {
  //   const bootstrapAsync = async () => {
  //     let userToken;

  //     try {
  //       userToken = await AsyncStorage.getItem('token');
  //       setIsAuthenticated(!!userToken); // Set true if token exists, false otherwise
  //     } catch (e) {
  //       console.error('Failed to load user token.');
  //       setIsAuthenticated(false); // Assume not authenticated if there's an error
  //     }
  //   };

  //   bootstrapAsync();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={info}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListRooms"
          component={AllRooms}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
