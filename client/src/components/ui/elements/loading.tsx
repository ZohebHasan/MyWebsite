import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';
import { useSendMessage } from '../../../contexts/sendMessage';
import { useDarkMode } from '../../../contexts/darkMode';

import SuccessDark from "../../assets/successfulDark.png";
import SuccessLight from "../../assets/successfulLight.png";
import FailedDark from "../../assets/failedDark.png";
import FailedLight from "../../assets/failedLight.png";

import Text from './text';

const DotLoader: React.FC = () => {
    const { isDarkMode } = useDarkMode();
    const { loading, sentSuccessfully, sentError } = useSendMessage();

    const [visible, setVisible] = useState(false);
    const [stage, setStage] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const SuccessDark = "https://zohebhasan.com/assets/successfulDark.webp";
    const SuccessLight = "https://zohebhasan.com/assets/successfulLight.webp";

    const FailedDark = "https://zohebhasan.com/assets/failedDark.webp";
    const FailedLight = "https://zohebhasan.com/assets/failedLight.webp";

    useEffect(() => {
        if (loading) {
            setVisible(true);
            setStage('loading');
        }

        if (!loading && (sentSuccessfully || sentError)) {
            setStage('loading'); // force show spinner for 1s
            setVisible(true);

            setTimeout(() => {
                setStage(sentSuccessfully ? 'success' : 'error');
                setTimeout(() => {
                    setVisible(false);
                    setStage('idle');
                }, 900); // show result for 1s
            }, 700); // show spinner for 1s
        }
    }, [loading, sentSuccessfully, sentError]);

    if (!visible) return null;

    return (
        <LoaderWrapper>
            {stage === 'loading' && (
                <LoadingContainer>
                    <IconContainer>
                        <BallTriangle height={80} width={80} color="white" ariaLabel="loading" visible />
                    </IconContainer>
                    <TextContainer>
                        <Text variant="normal" size="1.3rem" fontWeight="300">
                            Your message is now being sent.
                        </Text>
                    </TextContainer>
                </LoadingContainer>
            )}

            {stage === 'success' && (
                <LoadingContainer>
                    <IconContainer>
                        <Icon src={isDarkMode ? SuccessDark : SuccessLight} />
                    </IconContainer>
                    <TextContainer>
                        <Text variant="normal" size="1.3rem" fontWeight="300">
                            Your message has been sent successfully.
                        </Text>
                    </TextContainer>
                </LoadingContainer>
            )}

            {stage === 'error' && (
                <LoadingContainer>
                    <IconContainer>
                        <Icon src={isDarkMode ? FailedDark : FailedLight} />
                    </IconContainer>
                    <TextContainer>
                        <Text variant="normal" size="1.3rem" fontWeight="300">
                            Something went wrong, please try again.
                        </Text>
                    </TextContainer>
                </LoadingContainer>
            )}
        </LoaderWrapper>
    );
};

export default DotLoader;

const IconContainer = styled.div`
  height: 6rem; /* Fixed space for both spinner and icons */
  min-height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  height: 3rem; /* Fixed space for text */
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem; /* Optional: keeps all icons same height */
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;
`;
