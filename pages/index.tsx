import * as React from "react";
import type { NextPage } from "next";

import { HeadTitle } from "../src/components/Head";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../src/animation/Tabs";

const Home: NextPage = () => {
  return (
    <>
      <HeadTitle description="Home" />
      <div className="relative group space-y-2 flex flex-col">
        <Tabs defaultValue="account" className="w-[400px] relative">
          <TabsList className='h-16 z-10'>
              <TabsTrigger value="account" >Account</TabsTrigger>
              <TabsTrigger value="password" >Password</TabsTrigger>
              <TabsTrigger value="teste1" >Password</TabsTrigger>
              <TabsTrigger value="teste2" >Password</TabsTrigger>
            </TabsList>
            <div className="absolute w-full border border-gray-600 top-16 z-10" />
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
            <TabsContent value="teste1">Change your password here.</TabsContent>
            <TabsContent value="teste2">Change your password here.</TabsContent>
          </Tabs>
      </div>
    </>
  );
};

export default Home;
