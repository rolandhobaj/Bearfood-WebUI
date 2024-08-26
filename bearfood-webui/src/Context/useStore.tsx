import { createContext, useState, useContext } from "react";

type StoreType = {
    filterText: string | null;
    selectedRecipe : string | null;
    filter: (text: string) => void;
    select: (text: string) => void;
};

type Props = { children: React.ReactNode };

const StoreContext = createContext<StoreType | undefined>(undefined);

export const StoreProvider = ({ children }: Props) => {
    const [filterText, setFilterText] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

    const filter = (text: string) => {
        setFilterText(text);
    };

    const select = (text: string) => {
        setSelectedRecipe(text);
    }

    return (
        <StoreContext.Provider value={{ filterText, selectedRecipe, filter, select }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = (): StoreType => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};