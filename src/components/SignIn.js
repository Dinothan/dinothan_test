import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Sign In</Text>
        </View>
        <View style={{marginTop: 15}}>
          <View style={{flexDirection: 'row', marginBottom: 18}}>
            <Text style={{marginRight: 52}}>Email</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'black',
                borderWidth: 1,
                width: 200,
              }}
              //   onChangeText={(text) => this.setState({text})}
              //   value={this.state.text}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 25}}>Password</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'black',
                borderWidth: 1,
                width: 200,
              }}
            />
          </View>

          <TouchableOpacity style={{marginLeft: 150}}>
            <View
              style={{
                backgroundColor: '#D8D4D3',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: 120,
                marginTop: 30,
                height: 40,
              }}>
              <Text style={{color: 'black'}}>Sign-in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignIn;
