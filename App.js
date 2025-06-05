import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === '') {
      alert('Digite seu nome');
      return;
    }

    this.setState({
      name: this.state.input,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Digite seu nome"
          style={styles.input}
          onChangeText={text => {
            this.setState({input: 'Bem-vindo: ' + text});
          }}
        />
        <Text style={styles.texto}>{this.state.name}</Text>
        <Button title="entrar" onPress={this.entrar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#b3b3b3'},
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 50,
    fontSize: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  texto: {
    textAlign: 'center',
    fontSize: 50,
  },
});

export default App;
