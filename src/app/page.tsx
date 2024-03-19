import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';


export default function Home() {
  return (
  <ChakraProvider>
    <App />
  </ChakraProvider>
  );
}
