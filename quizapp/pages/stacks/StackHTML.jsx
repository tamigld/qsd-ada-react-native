import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import QuestionCard from '../../src/components/questionCard/QuestionCard'
import DefaultText from '../../src/components/defaultText/DefaultText'
import DefaultButton from '../../src/components/defaultButton/DefaultButton'

const StackHTML = ({ route, navigation }) => {
  const url = "https://quizapi.io/api/v1"
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'iFmUVGyTywGtxYsbYTUg4WaZ3rHUJf20peTQ0w7G'
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([{}] | undefined)

  const fetchData = async () => {
    await fetch(`${url}/questions?tags=${route.params.stackCategory}&limit=5`, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data)

        setTimeout(() => {
          setIsLoading(false)
        }, 1100);
      })
  }

  useEffect(() => {
    fetchData()
    setIsLoading(route.params.loading)
  }, [route])

  return (
    isLoading ?
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator />
      </SafeAreaView>

      :

      <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Image source={route.params.imageUrl} />
          <Text style={styles.stackName}>Category: {route.params.stackName}</Text>
        </View>
        <DefaultText content='Select the right answer. Good luck!'/>
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
          {
            data.map((item, index) => {
              return (
                <QuestionCard
                  key={index}
                  questionTitle={item.question}
                  category={route.params.stackName}
                  answers={item.answers}
                  correct_answers={item.correct_answers}
                />
              )
            })
          }
        </ScrollView>
        <View>
          <DefaultButton
            backgroundColor='#b5040a'
            borderColor='#b5040a'
            actionText='Give Up'
            onPress={() => {
              Alert.alert('Give Up', `Are you sure you want to leave the ${route.params.stackName} quiz?`, [
                {
                  text: 'No',
                  style: 'cancel'
                },
                {
                  text: "Yes, I'm sure.",
                  onPress: () => {
                    navigation.goBack()
                  }
                }
              ])
            }}
          />
        </View>
      </SafeAreaView>
  )
}

export default StackHTML

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    gap: 20
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  stackName: {
    color: 'black',
    fontWeight: '900'
  },
  contentContainerStyle: {
    gap: 30,
    paddingVertical: 20
  },
  topView: {
    gap: 10,
    padding: 20,
    backgroundColor: '#89d6fb',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
})