import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import api from './services/api';

import backgroundimage from './img/Harley.jpg';


function App(){

    const [ project, setProject ] = useState([]);

    useEffect( ()=> {
        api.get('projects').then( response => {
            console.log(response);
        })
    }, [] );

    async function AddProjects(){
        //setProject([... project,`Novo Projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            title: 'Front End',
            owner: 'Marcus Oliveira'
        });

        const project = response.data;

        setProject([...project, project] );

    }

    return ( 
            <> 
                <Header title="Projects">
                    <img width={300} src={backgroundimage}/>


                    <ul>
                        {project.map(project => <li key={project.id}>{project.title}</li>)}
                    </ul>

                    <button type="button" onClick={AddProjects}>Adicionar</button>
                </Header>
                <Header title="Homepage">
                    <ul>
                        <li>Inicio</li>
                        <li>Fim</li>
                    </ul>                
                </Header>
                <Header title="Projetos"> 
                    <ul>
                        <li>Curtos</li>
                        <li>Longos</li>
                        <li>Clientes especiais</li>
                    </ul>                
                </Header>


             </>
    );
}

export default App;
