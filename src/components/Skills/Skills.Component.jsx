import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'


const Skills = () => {
    return (
    <div id="Skills">
    <CardDeck>
        <Card className="text-center">
        <h1 className="pt-3 text-center font-details"><strong>TECH Skills</strong></h1>
            <Card.Body>
                <h3><Card.Text>
                <Badge variant="secondary">
                Vue.js 
                </Badge></Card.Text></h3>
                
                <h3><Card.Text>
                <Badge variant="secondary">
                React.js 
                </Badge></Card.Text></h3>

                <h3><Card.Text>
                <Badge variant="secondary">
                PHP/CSS/HTML 
                </Badge></Card.Text></h3>
            </Card.Body>
        </Card>   
    </CardDeck>
    </div>
    )
}

export default Skills
