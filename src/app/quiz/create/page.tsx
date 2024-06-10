"use client";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useCreateQuiz } from "@/hooks/quiz/useCreateQuiz";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const MainContent = styled.main`
  padding: 2rem;
`;

const SettingsContainer = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 25px;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ccc;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const DateTimeGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateTimePicker = styled.input`
  width: calc(50% - 0.5rem);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CreateQuizButton = styled.button`
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2rem;
  width: 100%;

  &:hover {
    background-color: #1a252f;
  }
`;

const CreateQuizPage: React.FC = () => {
  const router = useRouter();
  const { createQuiz, loading, error } = useCreateQuiz();
  const [quizName, setQuizName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const { user } = useCurrentUser();
  if (localStorage.getItem("authToken") === null) {
    router.push("/sign-in");
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-2xl">Unauthorize Please Log In</h2>
      </div>
    );
  }

  // Fungsi untuk menggabungkan date dan time dengan offset WIB
  const getFullDateTimeWIB = (date: string, time: string) => {
    return `${date}T${time}:00+07:00`;
  };

  const handleCreateQuiz = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createQuiz(
      quizName,
      getFullDateTimeWIB(startDate, startTime),
      getFullDateTimeWIB(endDate, endTime)
    );
  };

  return (
    <Container>
      <MainContent>
        <SettingsContainer>
          <h1 className="font-bold text-[24px]">Quiz Setting</h1>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <form onSubmit={handleCreateQuiz}>
            <FormGroup>
              <Label htmlFor="quiz-name">Name</Label>
              <Input
                required
                id="quiz-name"
                type="text"
                value={quizName}
                onChange={(e) => setQuizName(e.target.value)}
                placeholder="Insert quiz name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Starts</Label>
              <DateTimeGroup>
                <DateTimePicker
                  required
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <DateTimePicker
                  required
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </DateTimeGroup>
            </FormGroup>
            <FormGroup>
              <Label>Ends</Label>
              <DateTimeGroup>
                <DateTimePicker
                  required
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <DateTimePicker
                  required
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </DateTimeGroup>
            </FormGroup>
            <CreateQuizButton type="submit" disabled={loading}>
              {loading ? "Loading..." : "Create Quiz"}
            </CreateQuizButton>
          </form>
        </SettingsContainer>
      </MainContent>
    </Container>
  );
};

export default CreateQuizPage;
