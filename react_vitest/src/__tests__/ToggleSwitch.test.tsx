import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test } from 'vitest'
import ToggleSwitch from '../components/ToggleSwitch'

describe('ToggleSwitch', () => {
  test('renders the App component', () => {
    render(<ToggleSwitch initialState={false}/>)
    
    screen.getByRole("button", {name: 'Off'});

    fireEvent.click(screen.getByRole("button", { name: "Off"}));

    screen.getByRole("button", {name: 'On'});

    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})