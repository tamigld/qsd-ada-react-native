import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState, useEffect } from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group'

const QuestionCard = (props) => {
  const radioButtons = useMemo(() => ([
    {
      id: 1,
      label: "props.answers['answer_a']",
      value: 'option1'
    },
    {
      id: 2,
      label: "props.answers['answer_b']",
      value: 'option2'
    },
    {
      id: 3,
      label: "props.answers['answer_c']",
      value: 'option2'
    },
    {
      id: 4,
      label: "props.answers['answer_d']",
      value: 'option2'
    }
  ]), [])

  const [selectedId, setSelectedId] = useState()

  return (
    <View style={styles.container}>
      <Text style={styles.questionTitle}>{props.questionTitle}</Text>
      <View>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          labelStyle={{
            color: 'grey'
          }}
          containerStyle={{
            alignItems: 'flex-start',
            paddingTop: 10
          }}
        />
      </View>
    </View>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#89d6fb',
    borderRadius: 5
  },
  questionTitle: {
    fontWeight: '700',
    color: 'black'
  }
})