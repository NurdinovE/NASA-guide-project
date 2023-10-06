import { Container } from './WrapperStyles';
import React, {ReactNode} from 'react';

interface WrapperProps{
    children: ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Wrapper;