import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #800080; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #4B0082; 
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
  font-size: 24px; // Increase the font size
  text-align: center; // Center the text
  color: #800080; // Make the text purple
  animation: ${fadeIn} 2s ease-in; // Apply the fade-in animation over 2 seconds
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
			<h2>Random Act of Kindness:</h2>
			{ randomAct && <RandomActText key={ randomAct }>{ randomAct }</RandomActText> }
			<ButtonContainer>
				<Button onClick={ getRandomAct }>Get Random Act</Button>
				<Button onClick={ resetGenerator }>Reset Generator</Button>
			</ButtonContainer>
		</Container>
	);
};

export default KindnessGenerator;