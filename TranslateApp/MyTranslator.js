import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {translate} from 'google-translate-api';

export default function MyTranslator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = () => {
    translate(inputText, {from: 'pl', to: 'en'})
      .then(response => {
        setTranslatedText(response.text);
      })
      .catch(error => {
        console.error(error);
        setTranslatedText('Błąd podczas tłumaczenia.');
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Wprowadź tekst po polsku"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button title="Tłumacz" onPress={translateText} />
      <Text style={{marginTop: 20}}>{translatedText}</Text>
    </View>
  );
}
