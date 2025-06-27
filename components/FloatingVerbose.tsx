import { useEffect, useState } from 'react';
import {
    FloatingVerboseElement,
    Input,
    Slider,
    SwitchContainer,
} from '../styles/floatingverbose'

const FloatingVerbose = ({ checked, onChange }) => {
    const [isVisible, setIsVisible] = useState(true);
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
        setIsVisible(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            setIsVisible(true);
        }, 200); // Adjust the timeout duration as needed
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <FloatingVerboseElement style={{ transform: isVisible ? 'translateY(0)' : 'translateY(90%)', transition: 'transform 0.3s ease' }}>
            <SwitchContainer>
                <Input type="checkbox" checked={checked} onChange={onChange} />
                <Slider />
            </SwitchContainer>
        </FloatingVerboseElement>
    )
}

export default FloatingVerbose
