import React, { createContext, Dispatch, useState, ReactNode, useContext, useReducer } from 'react'

interface contextInterface {
     scoreBoard: typeof initialScoreBoard,
     setScoreBoard: Dispatch<any>
}

export const ContextProviderG = createContext<contextInterface>({} as contextInterface);

export const useProvider = () => useContext(ContextProviderG);

export const initialScoreBoard = { correct: 0, wrong: 0, score: 0 }

const CProvider = ({ children }: { children: ReactNode }) => {

     const [scoreBoard, setScoreBoard] = useState<typeof initialScoreBoard>(initialScoreBoard)


     return (
          <ContextProviderG.Provider value={{ setScoreBoard, scoreBoard }}>
               {children}
          </ContextProviderG.Provider>
     )

}


export default CProvider;