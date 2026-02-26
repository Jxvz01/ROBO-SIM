import { create } from 'zustand'

interface SimulationState {
    inventory: any[]
    activeBot: any | null
    gameMode: 'SUMO' | 'SOCCER' | 'SPEED'
    setGameMode: (mode: 'SUMO' | 'SOCCER' | 'SPEED') => void
}

export const useSimulationStore = create<SimulationState>((set) => ({
    inventory: [],
    activeBot: null,
    gameMode: 'SUMO',
    setGameMode: (gameMode) => set({ gameMode }),
}))
