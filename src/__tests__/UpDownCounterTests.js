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
