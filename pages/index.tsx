import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { PageHeader } from '../components/page-header';
import { HomePage } from './homepage';
import { PageFooter } from '../components/page-footer';

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
