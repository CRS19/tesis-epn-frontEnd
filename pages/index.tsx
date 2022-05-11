import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Home: NextPage = dynamic(() => import("../src/Screens/Login/Login"), {
  ssr: false,
});

export default Home;
