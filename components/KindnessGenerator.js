import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'lottie-react';
import animationData from '../animations/animation-holidays.json'; // adjust the path as needed


const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  height: 100vh;
  width: 100vw; 
  overflow: hidden;
`;

const BackgroundAnimation = styled(Lottie)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #ff0000; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #008000;
    transform: scale(1.05); 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100%; 
  gap: 20px; 
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const RandomActText = styled.p`
  font-size: 32px;
	font-weight: bold;
  text-align: center;
  color: #008000; 
  animation: ${fadeIn} 2s ease-in;
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  color: #ff0000; // Red color for Christmas
`;


const KindnessGenerator = ({ actsOfKindness }) => {
	const [randomAct, setRandomAct] = useState('');

	const getRandomAct = () => {
		const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
		setRandomAct(actsOfKindness[randomIndex]);
	};

	const resetGenerator = () => {
		setRandomAct('');
	};

	return (
		<Container>
			<BackgroundAnimation animationData={ animationData } autoplay loop />
			<Title>Random Act of Kindness:</Title>
			{ randomAct && <RandomActText key={ randomAct }>{ randomAct }</RandomActText> }
			<ButtonContainer>
				<Button onClick={ getRandomAct }>Get Random Act</Button>
				<Button onClick={ resetGenerator }>Reset Generator</Button>
			</ButtonContainer>
		</Container>
	);
};

export default KindnessGenerator;