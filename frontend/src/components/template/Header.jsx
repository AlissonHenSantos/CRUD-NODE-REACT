import React from "react";
import './Header.css'
import NavItem from "../itens/NavItem";

export default props => {
    return <header className="header">
        <NavItem link="/" nomeCaminho='Tela principal'></NavItem>
        <NavItem icon="users" link="crud" nomeCaminho='Cadastro'></NavItem>
    </header>
}