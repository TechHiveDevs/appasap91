
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListCommentsScreen from "../Entities/Comments/List.comments.screen";
import ShowCommentsScreen from "../Entities/Comments/Show.comments.screen";
import ListBlogentriesScreen from "../Entities/Blogentries/List.blogentries.screen";
import ShowBlogentriesScreen from "../Entities/Blogentries/Show.blogentries.screen";
import ListBlogsScreen from "../Entities/Blogs/List.blogs.screen";
import ShowBlogsScreen from "../Entities/Blogs/Show.blogs.screen";
import ListUsersScreen from "../Entities/Users/List.users.screen";
import ShowUsersScreen from "../Entities/Users/Show.users.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListCommentsScreen"
            component={ListCommentsScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowCommentsScreen"
          component={ShowCommentsScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListBlogentriesScreen"
            component={ListBlogentriesScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowBlogentriesScreen"
          component={ShowBlogentriesScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListBlogsScreen"
            component={ListBlogsScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowBlogsScreen"
          component={ShowBlogsScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListUsersScreen"
            component={ListUsersScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowUsersScreen"
          component={ShowUsersScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}
