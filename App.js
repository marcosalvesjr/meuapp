import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Sua sorte aqui!',
      img: require('./src/biscoito.png'),
    };
    this.frases = [
      'A persistência é o caminho do êxito.',
      'O sucesso nasce do querer, da determinação e da persistência.',
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
      'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
      'Seja a mudança que você quer ver no mundo.',
      'Grandes realizações começam com pequenos passos.',
      'A vida é feita de escolhas. Quando você dá um passo à frente, inevitavelmente algo fica para trás.',
      'Nunca é tarde para recomeçar.',
      'Não coloque limites em seus sonhos, coloque fé.',
      'A disciplina é a ponte entre metas e realizações.',
      'Você é mais forte do que pensa e será mais feliz do que imagina.',
      'Não espere por uma crise para descobrir o que é importante em sua vida.',
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'A melhor forma de prever o futuro é criá-lo.',
      'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
      'Seja forte o suficiente para deixar ir e paciente o suficiente para esperar o que você merece.',
      'A ação é a chave fundamental para todo sucesso.',
      'A mente é tudo. Você se torna aquilo que você pensa.',
      'O fracasso é apenas a oportunidade de começar de novo com mais inteligência.',
      'Não desista. O começo é sempre o mais difícil.',
    ];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito() {
    this.setState({
      textoFrase: this.frases[Math.floor(Math.random() * this.frases.length)],
      img: require('./src/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.state.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity onPress={this.quebraBiscoito} style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3b3b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 50,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
