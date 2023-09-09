/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext, useState } from 'react';

interface ContextProps {
	stage: number;
	setStage: any;
}

export const GeneralContext = createContext<ContextProps>({} as ContextProps);

export const GeneralProvider = ({ children }: any) => {
	const [stage, setStage] = useState<number>(0);

	return (
		<GeneralContext.Provider
			value={{
				stage,
				setStage,
			}}>
			{children}
		</GeneralContext.Provider>
	);
};

export const useGeneral = (): ContextProps => useContext(GeneralContext);
