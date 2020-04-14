import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

import Firebase from "./firebase";
import { Home, Profile, Login } from "./screens";
import Header from "./components/Header";
import Context from "./context";

export default () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    return () => {};
  });

  const user = {
    uid: "abc123"
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
};

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     };
//   }

//   componentDidMount = async () => {
//     // const user = await Firebase.signInWithEmailAndPassword(
//     //   "user@gmail.com",
//     //   "password"
//     // );

//     // console.log(user);
//     this.checkIfLoggedIn();
//   };

//   checkIfLoggedIn = async () => {
//     try {
//       const user = await Firebase.getCurrentUser();

//       if (user.uid) {
//         //this.props.navigation.navigate('HomeScreen')
//         //take him to the home page

//         this.setState({ isLoggedIn: true });
//         //store the user in redux
//       } else {
//         //user is signed out
//         // take him to the login screen
//         //this.props.navigation.navgate('LoginScreen')
//         this.setState({ isLoggedIn: false });
//       }

//       console.log({ user });
//     } catch (ex) {
//       console.error({ ex });
//     }

//     // const user = await Firebase.getCurrentUser();

//     // console.log(user);
//     // user
//     //   ? this.setState({ isLoggedIn: true })
//     //   : this.setState({ isLoggedIn: false });
//     // so this onAuthStateChanged will check if the user is logged into tfirebase

//     // this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
//     //   //return the user
//     //   // i think it basically resolves the promise to give you the user
//     //   if (user) {
//     //     //this.props.navigation.navigate('HomeScreen')
//     //     //take him to the home page

//     //     this.setState({ isLoggedIn: true });
//     //     //store the user in redux
//     //   } else {
//     //     //user is signed out
//     //     // take him to the login screen
//     //     //this.props.navigation.navgate('LoginScreen')
//     //     this.setState({ isLoggedIn: false });
//     //   }
//     // });

//     // this.unsubscribe()
//   };

//   // componentWillUnmount() {
//   //   if (this.unsubscribe) this.unsubscribe();
//   // }

//   render() {
//     if (this.state.isLoggedIn) {
//       return (
//         <>
//           <div>
//             Home Screen
//             <button>Log out</button>
//           </div>
//         </>
//       );
//     } else {
//       return <div> Login Screen</div>;
//     }
//   }
// }

// render() {
//   if (this.props.auth.isLoading) {
//     return <SplashScreen />;
//   }
//   return (
//     <NavigationContainer>
//       {!this.props.auth.isSignedIn ? (
//         <Stack.Navigator
//           screenOptions={{
//             headerStyle: {
//               backgroundColor: colors.bgMain,
//             },
//             headerTintColor: "white",
//           }}
//         >
//           <Stack.Screen
//             name="WelcomeScreen"
//             component={WelcomeScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="LoginScreen"
//             component={LoginScreen}
//             options={{ headerBackTitleVisible: false }}
//           />
//         </Stack.Navigator>
//       ) : (
//         <ActionSheetProvider>
//           <AppDrawerNavigator />
//         </ActionSheetProvider>
//       )}
//     </NavigationContainer>
//   );
// }
