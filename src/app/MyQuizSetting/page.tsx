"use client"
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  padding: 4rem;
  width: 100%;
`;

const InviteSection = styled.div`
  background-color: #B4CBEE;
  width: 800px;
  height: 200px;
  padding-top: 2rem;
  padding-left: 4rem;
  border-radius: 25px;
  display: flex;
  margin-bottom: 5rem;
`;

const InviteDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const InviteLink = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 500px;
  height: 40px;
  margin-right: 1rem;
`;

const QuizCode = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 150px;
  height: 40px;
`;

const RankTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.th`
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: left;
`;

const CenteredContainer = styled.div`
margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 4.7rem;
  margin-bottom: 0.2rem;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <MainContent>
          <h1 className = "font-bold text-[24px]">My Quiz</h1>
          <div className="border-t-2 border-2 border-neutral-950 flex-grow mt-4"></div>
          <CenteredContainer>
          <InviteSection>
            <InviteDetails>
            <div style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem" }}>Invite Participant</div>
            <FlexContainer>
              <p>Quiz Link</p>
              <p>Quiz Code</p>
            </FlexContainer>
              <div>
                <InviteLink value="joinquizify.com" readOnly />
                <QuizCode value="XXX XXX" readOnly />
              </div>
            </InviteDetails>
          </InviteSection>
          </CenteredContainer>
            <div style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>Rank</div>
          <RankTable>
            <thead>
              <tr>
                <TableHead>Name</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Rank</TableHead>
              </tr>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>90</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fred</TableCell>
                <TableCell>85</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lisa</TableCell>
                <TableCell>70</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
            </tbody>
          </RankTable>
      </MainContent>
    </Container>
  );
};

export default Home;