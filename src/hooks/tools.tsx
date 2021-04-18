import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from 'react';

import api from '../services/api';

export interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ToolsContextValue {
  tools: Array<Tool>;
  fetchTools(): void;
  fetchSearch(term: string, isTagOnlySearch?: boolean): void;
}

interface ToolsProviderProps {
  children: ReactNode;
}

const ToolsContext = createContext<ToolsContextValue>({} as ToolsContextValue);

const ToolsProvider = ({ children }: ToolsProviderProps) => {
  const [tools, setTools] = useState<Array<Tool>>([]);

  const fetchTools = useCallback(async () => {
    const response = await api.get('/tools');
    setTools(response.data);
  }, []);

  const fetchSearch = async (term: string, isTagOnlySearch: false) => {
    if (!term) {
      fetchTools();
      return;
    }

    if (isTagOnlySearch) {
      const { data } = await api.get(`/tools?tags_like=${term}`);

      data.length ? setTools(data) : setTools([]);
    } else {
      const { data } = await api.get(`/tools?q=${term}`);

      data.length ? setTools(data) : setTools([]);
    }
  };

  return (
    <ToolsContext.Provider
      value={{
        fetchTools,
        tools,
        fetchSearch,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};

const useTools = (): ToolsContextValue => {
  const context = useContext(ToolsContext);

  if (!context) {
    throw new Error('useTools must be used within a ToolsProvider');
  }

  return context;
};

export { ToolsProvider, useTools };
