import React from "react";
import memorialhall from "./images/memorialhall.jpg";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Ryan Sanchez - UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>Added another header</h1>
            <img
                src={memorialhall}
                alt="University of Delaware's Memorial Hall"
            />
            <ul>
                <li>Memorial Hall</li>
                <li>Gore Hall</li>
                <li>Sharp Lab</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <div
                        style={{
                            width: "450px",
                            height: "200px",
                            backgroundColor: "red"
                        }}
                    >
                        <Col>First column.</Col>
                    </div>
                    <br></br>
                    <Col>
                        <div
                            style={{
                                width: "450px",
                                height: "200px",
                                backgroundColor: "red",
                                padding: "30px"
                            }}
                        >
                            Second column.
                        </div>
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
