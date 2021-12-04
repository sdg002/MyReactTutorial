import React from "react";
import {RenderResult, fireEvent, act, waitFor, waitForElement} from '@testing-library/react';
import {render} from '@testing-library/react';
import UpDownCounter from "../components/UpDownCounter";
//import  rende


test("When created without any props there should be a up button, down button and display label element",()=>{
    let view=render(<UpDownCounter></UpDownCounter>)
    expect(view.getByTestId("upbutton")).toBeTruthy();
    expect(view.getByTestId("downbutton")).toBeTruthy();
    let displayElement=view.getByTestId("display")
    expect(displayElement).toHaveTextContent("0")
})
test("When created with an initialValue the counter must display the initial value",()=>{
    let expectedInitialValue=212;
    let view=render(<UpDownCounter initialValue={expectedInitialValue}></UpDownCounter>)
    expect(view.getByTestId("upbutton")).toBeTruthy();
    expect(view.getByTestId("downbutton")).toBeTruthy();
    let displayElement=view.getByTestId("display")
    expect(displayElement).toHaveTextContent(expectedInitialValue)
})

test("When Up button of the counter is clicked ",()=>{
    let view=render(<UpDownCounter></UpDownCounter>)
    let upBtton = view.getByTestId("upbutton")
    fireEvent.click(upBtton)
    let displayElement=view.getByTestId("display")
    expect(displayElement).toHaveTextContent("1")
})

it("When down button of the counter is clicked",async ()=>{
    let view=render(<UpDownCounter></UpDownCounter>)
    let downButton = view.getByTestId("downbutton")
    await act(async ()=>{
        fireEvent.click(downButton)
    })

    let displayElement=view.getByTestId("display")
    expect(displayElement).toHaveTextContent("-1")

})

/*

Status update - you were able to get tests to work, rendering, getByTestId and click to work
One problem -
Why does Jest throw the error (but all tests pass)

console.error
    Error: Not implemented: HTMLFormElement.prototype.submit
        at module.exports (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\browser\not-implemented.js:9:17)
        at HTMLFormElementImpl.submit (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\living\nodes\HTMLFormElement-impl.js:88:5)
        at HTMLFormElementImpl._doSubmit (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\living\nodes\HTMLFormElement-impl.js:80:10)
        at HTMLButtonElementImpl._activationBehavior (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\living\nodes\HTMLButtonElement-impl.js:23:14)
        at HTMLButtonElementImpl._dispatch (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:240:26)
        at HTMLButtonElementImpl.dispatchEvent (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:94:17)
        at HTMLButtonElement.dispatchEvent (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\jsdom\lib\jsdom\living\generated\EventTarget.js:231:34)
        at C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\@testing-library\dom\dist\events.js:25:20
        at C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\@testing-library\react\dist\pure.js:63:16
        at batchedUpdates$1 (C:\Users\corresilience\MyTrials\NodeJs\ReactJS\todo\node_modules\react-dom\cjs\react-dom.development.js:22380:12) undefined

      at VirtualConsole.<anonymous> (node_modules/jsdom/lib/jsdom/virtual-console.js:29:45)
      at module.exports (node_modules/jsdom/lib/jsdom/browser/not-implemented.js:12:26)
      at HTMLFormElementImpl.submit (node_modules/jsdom/lib/jsdom/living/nodes/HTMLFormElement-impl.js:88:5)
      at HTMLFormElementImpl._doSubmit (node_modules/jsdom/lib/jsdom/living/nodes/HTMLFormElement-impl.js:80:10)
      at HTMLButtonElementImpl._activationBehavior (node_modules/jsdom/lib/jsdom/living/nodes/HTMLButtonElement-impl.js:23:14)
      at HTMLButtonElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:240:26)

 */