import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'

import Home from './pages/home/Home';
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard'

import { View, Alert, SafeAreaView, StyleSheet, Image, StatusBar} from 'react-native';
import DrawerTitle from './src/components/drawerLink/DrawerTitle';
import StackHTML from './pages/stacks/StackHTML';

const App = () => {
  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user)
    })

    return unsubscribe;
  }, [])

  const categories = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'React',
    'Angular',
    'VueJS',
    'MySQL'
  ]

  const signOut = () => {
    Alert.alert('Sair', 'Tem deseja que deseja sair da sua conta?', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {
          auth().signOut()
            .then(() => console.log('usuário deslogado'))
        }
      }
    ])
  }

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
        <DrawerItemList {...props}/>
        <View style={{gap: 10}}>
        <DrawerTitle content='Categorias' />
          {
            categories.map((category, index) => {
              return(
                <DrawerItem
                  style={styles.drawerItem}
                  label={category}
                  key={index}
                />
              )
            })
          }
        </View>
        <DrawerItem 
          label='Sair'
          onPress={signOut}
        />
      </DrawerContentScrollView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar hidden={true}/> */}
      <NavigationContainer>
        {user ?
          <Drawer.Navigator
            initialRouteName='Dashboard'
            drawerStyle={{
              backgroundColor: '#000',
              paddingVertical: 20
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
          >
            <Stack.Screen
              name='Dashboard'
              component={Dashboard}
              options= {() => (
              {
                headerTitle: '',
                headerStyle: {
                  backgroundColor: '#edf2f4',
                  borderBottomWidth: 1,
                  borderBottomColor: '#02a9f7'
                },
                headerRight: () => (
                  <Image style={{width: 40, height: 40}} source={require('./src/img/codequiz-logo.png')}/>
                )
              }
              )}
            />
            <Stack.Screen
              name='StackHTML'
              component={StackHTML}
              options={{
                headerShown: false,
              }}
              // options= {() => (
              // {
              //   headerTitle: '',
              //   headerStyle: {
              //     backgroundColor: '#edf2f4',
              //     borderBottomWidth: 1,
              //     borderBottomColor: '#02a9f7'
              //   },
              //   headerRight: () => (
              //     <Image style={{width: 40, height: 40}} source={require('./src/img/codequiz-logo.png')}/>
              //   )
              // }
              // )}
            />
          </Drawer.Navigator>

          :

          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Home'
          >
            <Stack.Screen
              name='Home'
              component={Home}
            />
            <Stack.Screen
              name='Login'
              component={Login}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    marginHorizontal: 20,
    marginVertical: 40,
    gap: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  drawerItem: {
    backgroundColor: '#d4f0fc'
  }
})

export default App