import React, {  createContext, useState } from "react";
const INITIAL_DATA = [
  {
    title: "Documentation",
    content: "Find in-depth information about Next.js features and API.",
    url: "https://nextjs.org/docs",
  },
  {
    title: "Learn",
    content: "Learn about Next.js in an interactive course with quizzes!",
    url: "https://nextjs.org/learn",
  },
  {
    title: "Examples",
    content: "Discover and deploy boilerplate example Next.js projects.",
    url: "https://github.com/vercel/next.js/tree/master/examples",
  },
  {
    title: "Deploy",
    content: "Discover and deploy boilerplate example Next.js projects.",
    url: " Instantly deploy your Next.js site to a public URL with Vercel.",
  },
]

const Context = createContext({})

export const InfomationContextProvider = ({ children }) => {
  const [ data, setData ] = useState(INITIAL_DATA)

  return <Context.Provider value ={{ data, setData }}>
      {children}
    </Context.Provider>
}

export default Context