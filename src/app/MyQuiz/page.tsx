"use client"
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  padding: 4rem;
  width: 100%;
`;

const QuizList = styled.div`
  margin-top: 2rem;
`;

const QuizCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const QuizInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const RightContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
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
                                  <div className='flex'>
                                  <QuizImageBox>
                                            <img src="https://via.placeholder.com/150" alt="quiz" />
                                        </QuizImageBox>
                                    <QuizInfo>
                                      
                                        <div style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>Quiz Name</div>
                                        <p>x questions</p>
                                        <p>ended</p>
                                    </QuizInfo>
                                  </div>
                
                                    <RightContainer>
                                    <a href="/MyQuiz/[id]">
                                        <SettingsButton>Settings</SettingsButton>
                                    </a>
                                    </RightContainer>
                                </QuizCard>
                            ))}
                        </QuizList>
                        <CenteredContainer>
                        <a href="/CreateSetting">
                        <CreateQuizButton>Create Quiz</CreateQuizButton>
                        </a>
                    </CenteredContainer>
            </MainContent>
    </Container>
  );
};

export default Home;
