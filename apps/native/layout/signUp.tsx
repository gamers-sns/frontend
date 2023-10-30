import React, {useState} from 'react';
import {Container, SignInButton, Copy, UserName} from '../components/styles';

interface Props{
    onSignUp: () => void;
    onReturnToSignIn: () => void;
}

const SignUp = ({onSignUp, onReturnToSignIn}: Props) => {
    
    const [username, setUsername] = useState<string>('')
    const [displayName, setDisplayName] = useState<string>('')

    
    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayName(e.target.value)
    }

    
    const createPasskey = () => {
    
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
            <UserName
                placeholder='Please enter your display name'
                type='text'
                autoComplete="username webauthn"
                value={displayName}
                onChange={handleDisplayName}
            />
            <SignInButton onClick={createPasskey}>Sign Up</SignInButton>
            <Copy>Already have an Account ?</Copy>
            <SignInButton onClick={onReturnToSignIn}>Sign In</SignInButton>
        </Container>
    );
};

export default SignUp;