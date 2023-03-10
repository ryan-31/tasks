import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(2);

    function roll1(): void {
        setDie1(d6());
    }
    function roll2(): void {
        setDie2(d6());
    }
    return (
        <div>
            <Button onClick={roll1}>Roll Left</Button>
            <span data-testid="left-die">{die1}</span>

            <Button onClick={roll2}>Roll Right</Button>
            <span data-testid="right-die">{die2}</span>

            {die1 === die2 && die1 !== 1 && <div>Win</div>}
            {die1 === 1 && die2 === 1 && <div>Lose</div>}
        </div>
    );
}
