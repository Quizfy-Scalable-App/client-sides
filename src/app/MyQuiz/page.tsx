"use client"
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  padding: 4rem;
`;

const QuizList = styled.div`
  margin-top: 2rem;
`;

const QuizCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  
  align-items: center;
  margin-bottom: 1rem;
`;

const QuizInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuizName = styled.h3`
  margin: 0.2;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const QuizImageBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 1rem;
    `; 

const SettingsButton = styled.button`
  background-color: #6aafe6;
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  margin-left: auto;
  margin-top: auto;
  
  &:hover {
    background-color: #5a9fd6;
  }
`;

const CreateQuizButton = styled.button`
  background-color: #264F8D;
  color: white;
  border: none;
  padding: 1rem 3rem;
  border-radius: 10px;
  cursor: pointer;
`;

const CenteredContainer = styled.div`
margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <MainContent>
        <h1 className = "font-bold text-[24px]">My Quiz</h1>
        <div className="border-t-2 border-2 border-neutral-950 flex-grow mt-4"></div>
                <QuizList>
                    {Array(5).fill(0).map((_, index) => (
                                <QuizCard key={index}>
                                    <QuizImageBox>
                                            <img src="https://via.placeholder.com/150" alt="quiz" />
                                        </QuizImageBox>
                                    <QuizInfo>
                                        <QuizName>Quiz Name</QuizName>
                                        <p>x questions</p>
                                        <p>ended</p>
                                    </QuizInfo>
                                    <SettingsButton>Settings</SettingsButton>
                                </QuizCard>
                            ))}
                        </QuizList>
                        <CenteredContainer>
                        <CreateQuizButton>Create Quiz</CreateQuizButton>
                    </CenteredContainer>
            </MainContent>
    </Container>
  );
};

export default Home;
