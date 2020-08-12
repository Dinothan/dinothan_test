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
    this.state = {
      email: '',
      password: '',
      validEmail: true,
      validPassword: true,
    };
  }
  onClickButton = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === false) {
      this.setState({validEmail: false});
    } else {
      this.setState({validEmail: true});
    }

    if (this.state.password === '') {
      this.setState({validPassword: false});
    } else {
      this.setState({validPassword: true});
    }
  };
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
              style={[
                this.state.validEmail
                  ? {
                      borderColor: 'black',
                    }
                  : {borderColor: 'red'},
                {
                  height: 40,
                  borderWidth: 1,
                  width: 200,
                },
              ]}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 25}}>Password</Text>
            <TextInput
              style={[
                this.state.validPassword
                  ? {
                      borderColor: 'black',
                    }
                  : {borderColor: 'red'},
                {borderWidth: 1, width: 200, height: 40},
              ]}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>

          <TouchableOpacity
            style={{marginLeft: 150}}
            onPress={this.onClickButton}>
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
