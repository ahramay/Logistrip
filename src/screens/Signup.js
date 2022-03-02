import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';
///keyboard Avoiding Wrapper
import KeyboardAvoidingWrapper  from '../components/keyboardAvoidingWrapper';
//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import  {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledTextInput,
    StyledInputLabel,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLinkContent,
    TextLink,
} from '../components/styles';

import { View,TouchableOpacity, ActivityIndicator } from "react-native";

//Colors
const {brand,darkLight, primary} = Colors; 

const Signup = ({navigation}) => {
    const[ hidePassword , setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType,setMessageType] = useState();


const handleSignup = (credentials, setSubmitting) =>{
    handleMessage(null);
    const url ='https://staging-api.logistrip.com/user/signup';
    
    axios.post(url,credentials)
        .then((response) => {
            const result = response.data;
            const{message,status,data} = result;
            
            if(status !== 'true'){
                handleMessage(message, status)
            } 
            setSubmitting(false);
        })
        .catch((error) => {
           console.log(error.JSON());
           setSubmitting(false);
           handleMessage("An error occurred. Check your network and try again")
        })
}

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    return (
        <KeyboardAvoidingWrapper>
    <StyledContainer>
            
        <InnerContainer>
            
        <PageTitle>Logistrip</PageTitle>
        <SubTitle>Account Signup </SubTitle>
        <Formik
            initialValues={{name: '', email: '',password: '',confirmPassword:''}}
            onSubmit={(values ,{setSubmitting}) => {
              if(values.email == '' || values.password == '' || values.name == '' || values.confirmPassword == ''){
                    handleMessage('Please fill the fields');
                    setSubmitting(false);
                } else if (values.password !== values.confirmPassword) {
                    handleMessage('Incorrect Password');
                    setSubmitting(false);
                }else {
                  navigation.navigate('HomeScreen');
                }
            }}
        >

        {({handleChange,handleBlur,handleSubmit,values,isSubmitting}) => (
        <StyledFormArea>
            <MyTextInput 
                label="Full Name"
                icon="person"
                placeholder="Ahmad"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                
            />
            <MyTextInput 
                label="Email Address"
                icon="mail"
                placeholder="Email"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
            />
           
            <MyTextInput 
                label="Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}

            />
            <MyTextInput 
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}

            />
            <MsgBox type={messageType}>{message}</MsgBox>
            {!isSubmitting && ( 
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Signup</ButtonText>
              </StyledButton>
            )}

            {isSubmitting && (
                <StyledButton  disabled={true} >
                <ActivityIndicator  size="large" color={primary} />
            </StyledButton>
            )}
            <Line />
            <ExtraView>
            <ExtraText>All ready have an account</ExtraText> 
                <TextLink onPress={() => navigation.navigate('Login')}>
                <TextLinkContent>Login</TextLinkContent>
                </TextLink>
                
            </ExtraView>
        </StyledFormArea> 
        
        )}
        
        </Formik>
        </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
);
}

const MyTextInput = ({label, icon, isPassword, hidePassword,setHidePassword, ...props}) =>{
        return(
            <View>
                <LeftIcon>
                    <Octicons name={icon} size={30} color={brand}/>
                </LeftIcon>
                <StyledInputLabel>{label}</StyledInputLabel>
                <StyledTextInput {...props} />
                {isPassword && (
                    <RightIcon onPress={() => setHidePassword(!hidePassword) }>
                        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye' } size={30} color={ darkLight }/>
                    </RightIcon>
                )}
            </View>
        )
}

export default Signup;