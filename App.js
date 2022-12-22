import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Profiles,
  LensProvider,
} from "@lens-protocol/react-native-lens-ui-kit";
import ProfileView from "./ProfileView";
import ViewFollowing from "./ViewFollowing";
import ViewComment from "./ViewComments";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LensProvider theme="dark">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profiles" component={ProfileComponent} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
          <Stack.Screen name="ViewComment" component={ViewComment} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

function ProfileComponent({ navigation }) {
  return (
    <Profiles
      onProfilePress={(profile) => navigation.navigate("Profile", { profile })}
    />
  );
}
