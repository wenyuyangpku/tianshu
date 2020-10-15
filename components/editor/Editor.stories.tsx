import React, { FunctionComponent } from 'react';

import { Editor } from './Editor';

export default {
  title: 'Components/Editor',
  component: Editor,
};

const sample = `class Animal {
    constructor(public name: string) { }
    move(meters: number) {
        console.log(this.name + " moved " + meters + "m.");
    }
}
class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}
class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}
var sam = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")
sam.move()
tom.move(34)`;

export const Basic: FunctionComponent = () => (
  <Editor {...{ value: sample }}></Editor>
);
