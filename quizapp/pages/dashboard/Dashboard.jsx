import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import DefaultTitle from "../../src/components/defaultTitle/DefaultTitle";
import Card from '../../src/components/card/Card';

const Dashboard = ({ navigation }) => {
  const [falseLoading, setFalseLoading] = useState()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('reloaded');
      setFalseLoading(true)
    })

    return unsubscribe;

  }, [navigation])

  const imagesUrls = [
    {
      url: require('../../src/img/html5.png'),
      name: 'HTML5',
      page: 'StackHTML',
      stackCategory: 'HTML',
      key: 1
    },
    {
      url: require('../../src/img/css3.png'),
      name: 'CSS3',
      page: 'StackHTML',
      stackCategory: 'Css',
      key: 2
    },
    {
      url: require('../../src/img/js.png'),
      name: 'JavaScript',
      page: 'StackHTML',
      stackCategory: 'JavaScript',
      key: 3
    },
    {
      url: require('../../src/img/python.png'),
      name: 'Python',
      page: 'StackHTML',
      stackCategory: 'Python',
      key: 4
    },
    {
      url: require('../../src/img/linux.png'),
      name: 'Linux',
      page: 'StackHTML',
      stackCategory: 'Linux',
      key: 5
    },
    {
      url: require('../../src/img/php.png'),
      name: 'PHP',
      page: 'StackHTML',
      stackCategory: 'PHP',
      key: 6
    },
    {
      url: require('../../src/img/wordpress.png'),
      name: 'Wordpress',
      page: 'StackHTML',
      stackCategory: 'Wordpress',
      key: 7
    },
    {
      url: require('../../src/img/mysql.png'),
      name: 'MySQL',
      page: 'StackHTML',
      stackCategory: 'MySQL',
      key: 8
    }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <DefaultTitle
          content='Categorias'
        />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.categorieView}>
          {
            imagesUrls.map((element, index) => {
              return (
                <Card
                  onPress={
                    () => navigation.navigate(`StackHTML`, {
                      stackName: element.name,
                      imageUrl: element.url,
                      stackCategory: element.stackCategory,
                      loading: falseLoading
                    })
                  }
                  key={index}
                  imageUrl={element.url}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf2f4',
    flex: 1
  },
  header: {
    position: 'absolute',
    top: 0
  },
  contentContainerStyle: {
    alignItems: 'center',
    maxHeight: '100%',
    paddingVertical: 20,
    paddingHorizontal: 40,
    gap: 20
  },
  categorieView: {
    flexWrap: 'wrap',
    gap: 20
  }
})