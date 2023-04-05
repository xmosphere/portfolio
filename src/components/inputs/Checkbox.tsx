import React from "react"
import { ClassAttributes, InputHTMLAttributes } from "react"

const Checkbox = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => (
    <input type="checkbox" {...props} />
  )

class ExampleApp extends React.Component {
    state = { checked: false }
    handleCheckboxChange = (event: { target: { checked: any } }) =>
      this.setState({ checked: event.target.checked })
      render() {
      return (
        <div>
          <label>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>Label Text</span>
          </label>
        </div>    
      ) 
    }
  }