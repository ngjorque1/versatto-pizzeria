import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



class App extends React.Component {
    render() {
        return (
            <div className="App">{}
                <Header />
                <NavBar />
                <ItemListContainer />

            </div>
        );
    }
}

export default App;