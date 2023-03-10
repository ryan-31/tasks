import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function start(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function stop(): void {
        setProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button onClick={start} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
