import React, { createContext, Dispatch, useState, ReactNode, useContext, useEffect } from 'react'
import axios from "axios";

interface contextInterface {
     scoreBoard: typeof initialScoreBoard,
     setScoreBoard: Dispatch<any>,
     fetchQuestion(level: string): void,
     registerUser(userData: any): void,
     question: any[]
}

export const ContextProviderG = createContext<contextInterface>({} as contextInterface);

export const useProvider = () => useContext(ContextProviderG);

export const initialScoreBoard = { correct: 0, wrong: 0, score: 0 }

const CProvider = ({ children }: { children: ReactNode }) => {
     const [question, setQuestion] = useState<any>();
     const [user, setUser] = useState<any>();
     console.log('question: ', question);
     const [scoreBoard, setScoreBoard] = useState<typeof initialScoreBoard>(initialScoreBoard)

     const fetchQuestion = async (level = "Easy") => {
          const data = await axios.get(`/quiz?level=${level}`);
          console.log('data: ', data);
          setQuestion(data.data)
     }

     const registerUser = async (userData: any) => {
          const user: any = await axios.post("/user", userData);
          
          fetchQuestion(user?.level);
     }

     useEffect(() => {
          fetchQuestion();
     }, [])

     return (
          <ContextProviderG.Provider value={{ setScoreBoard, registerUser, scoreBoard, fetchQuestion, question }}>
               {children}
          </ContextProviderG.Provider>
     )

}


export default CProvider;