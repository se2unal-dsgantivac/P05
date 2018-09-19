import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, Alert, Button } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      gameState: [[0,0,0,],
                  [0,0,0,],
                  [0,0,0,]
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount(){
    this.initializeGame();
  }

  initializeGame= () =>{
    this.setState({gameState:
      [[0,0,0,],
       [0,0,0,],
       [0,0,0,]],
       currentPlayer:1
    });
  }

  renderIcon = (row,col) =>{
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1: return <Icon name="close"  style= {styles.titleX} />;
      case -1: return <Icon name="circle-outline"  style= {styles.titleO} />;
      default: return <View/>;
    }
  }

  getWinner = () =>{
    var arr = this.state.gameState;
    var sum = 0;
    for (var i = 0; i < 3; i++) {
      sum = arr[0][i]+arr[1][i]+arr[2][i];
      if (sum == 3) {
        return 1;
      }else if (sum==-3) {
        return -1
      }
    }
    for (var i = 0; i < 3; i++) {
      sum = arr[i][0]+arr[i][1]+arr[i][2];
      if (sum == 3) {
        return 1;
      }else if (sum==-3) {
        return -1
      }
    }

    sum = arr[0][0]+arr[1][1]+arr[2][2];
    if (sum == 3) {
      return 1;
    }else if (sum==-3) {
      return -1
    }
    sum = arr[0][2]+arr[1][1]+arr[2][0];
    if (sum == 3) {
      return 1;
    }else if (sum==-3) {
      return -1
    }
    return 0;
  }

  onTitlePress = (row,col) => {

    if (this.state.gameState[row][col] !=0) {
      return;
    }

    var currentPlayer = this.state.currentPlayer;

    var arr = this.state.gameState.slice();
    arr[row][col]= currentPlayer;
    this.setState({gameState: arr});

    var nextPlayer = (currentPlayer == 1) ? -1:1;
    this.setState({currentPlayer: nextPlayer});

    var winner = this.getWinner();
    if (winner ==1) {
      Alert.alert("gana el player 1");
      this.initializeGame();
    }else if (winner == -1) {
      Alert.alert("gana el player 2");
      this.initializeGame();
    }

  }

  newGame = () =>{
    this.initializeGame();
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => this.onTitlePress(0,0)} style={[styles.title, {borderLeftWidth:0, borderTopWidth:0}]}>

            {this.renderIcon(0,0)}
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.onTitlePress(0,1)} style={[styles.title, {borderTopWidth:0}]}>
            {this.renderIcon(0,1)}
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => this.onTitlePress(0,2)} style={[styles.title, {borderRightWidth:0, borderTopWidth:0}]}>
            {this.renderIcon(0,2)}
          </TouchableOpacity>

        </View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress = {() => this.onTitlePress(1,0)} style={[styles.title, {borderLeftWidth:0}]}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTitlePress(1,1)} style={[styles.title]}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTitlePress(1,2)} style={[styles.title, {borderRightWidth:0}]}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>

        </View>
        <View style={{flexDirection: "row"}}>

          <TouchableOpacity onPress = {() => this.onTitlePress(2,0)} style={[styles.title, {borderLeftWidth:0, borderBottomWidth:0}]}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTitlePress(2,1)} style={[styles.title, { borderBottomWidth:0}]}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => this.onTitlePress(2,2)} style={[styles.title, {borderBottomWidth:0, borderRightWidth:0}]}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>

        </View>
        <View style = {{padding: 10}}/>
        <Button title="New Game" onPress={this.newGame} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    borderWidth: 10,
    width: 100,
    height: 100,
  },
  titleX:{
    color: "red",
    fontSize: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleO:{
    color: "blue",
    fontSize: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }

});
