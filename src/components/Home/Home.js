import React from 'react';
import Hero from "../Hero/Hero";
import List from "../List/List";

function Home(props) {
    return (
        <div>
            <Hero />
            <List listTitle="Trending Games" gameType="trending" listType="summary" />
            <List listTitle="Top Games" gameType="top" listType="summary" />
        </div>
    )
}

export default Home;
