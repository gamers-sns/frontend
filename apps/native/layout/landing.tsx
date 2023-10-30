import React , {useState} from 'react';
import {Container, SignInButton, Copy, UserName} from '../components/styles';

interface Props{
    onSignUp: () => void;
    onSignIn: () => void;
}

const Landing = ({onSignUp, onSignIn}: Props) => {

    const [username, setUsername] = useState('')


    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const signIn = () => {

    }


    return (
        <Container>
            <UserName
                placeholder='Please enter your email'
                type='text'
                autoComplete="username webauthn"
                value={username}
                onChange={handleUsername}
            />
            <SignInButton onClick={signIn}>Sign In</SignInButton>
            <Copy>Not created an Account ?</Copy>
            <SignInButton onClick={onSignUp}>Sign Up</SignInButton>
        </Container>
    )
}

export default Landing;