import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequesting, setAttemptsRequesting] = useState<number>();

    function useAttempt(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gain(): void {
        attemptsRequesting !== undefined &&
            setAttemptsLeft(attemptsLeft + attemptsRequesting);
    }

    function updateRequesting(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsRequesting(parseInt(event.target.value));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts:</p>
            {attemptsLeft}
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts Requesting</Form.Label>
                <Form.Control
                    value={attemptsRequesting}
                    onChange={updateRequesting}
                    type="number"
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
        </div>
    );
}
