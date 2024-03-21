import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useMemo, useState, useEffect } from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group'
import DefaultButton from '../defaultButton/DefaultButton'

const QuestionCard = (props) => {
  const [isRadioDisabled, setIsRadioDisabled] = useState(false)

  const radioButtons = [
    {
      id: 'answer_a_correct',
      label: props.answers['answer_a'],
      value: 'answer_a',
      disabled: isRadioDisabled
    },
    {
      id: 'answer_b_correct',
      label: props.answers['answer_b'],
      value: 'answer_b',
      disabled: isRadioDisabled
    },
    {
      id: 'answer_c_correct',
      label: props.answers['answer_c'],
      value: 'answer_c',
      disabled: isRadioDisabled
    },
    {
      id: 'answer_d_correct',
      label: props.answers['answer_d'],
      value: 'answer_d',
      disabled: isRadioDisabled
    }
  ]

  const [selectedId, setSelectedId] = useState()

  const [isDisabled, setIsDisabled] = useState(Boolean)

  let corrected_answers = props.correct_answers

  const findAnswer = () => {
    let rightAnswer;

    for (let [key, value] of Object.entries(corrected_answers)) {
      if (key === selectedId && value === "true") {
        rightAnswer = key;
        break;
      }
    }

    if (rightAnswer) {
      showToast('That is correct! 🥳')
    } else {
      showToast("Oops! That's not the right one. 😓")
    }
    
    setTimeout(() => {
      setIsDisabled(true)
      setIsRadioDisabled(true)
    }, 1000);
  }

  const showToast = (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };


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
            paddingTop: 10,
            width: '90%'
          }}
        />
      </View>
      <DefaultButton
        actionText='Verify'
        backgroundColor='#02577A'
        borderColor='#02577A'
        onPress={() => {
          if (selectedId == undefined) {
            showToast('Select one option!')
          } else {
            findAnswer()
          }
        }}
        disabled={isDisabled}
      />
    </View>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#89d6fb',
    borderRadius: 5,
    gap: 10
  },
  questionTitle: {
    fontWeight: '700',
    color: 'black'
  }
})