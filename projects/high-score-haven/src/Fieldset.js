import React, {Component} from "react";

class Fieldset extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      game: '',
      date: '',
      score: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit = (e) => {
    const {name, game, date, score} = this.state;

  }

  render() {
    const {name, game, date, score} = this.state;
    return(
      <div>
        <fieldset>
          <legend>Player Information</legend>
          <form onSubmit={this.handleSubmit}>
            Name: <input type="text" name="name" />
            Game: <input type="text" name="game" />
            Date: <input type="date" name="date" />
            <br />
            Highscore: <input type="number" name="score" />
            <label>
            <input type="checkbox" name="trash" />Hit me with your best shot</label>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </fieldset>
        <br />
        <fieldset>
          <legend>Hall of Fame</legend>
            <table>
              <tr>
                <th>
                  <td>Name</td>
                  <td>Game</td>
                  <td>Date</td>
                  <td>Highscore</td>
                  <td>Message</td>                  
                </th>
              </tr>
            </table>
        </fieldset>
      </div>
    )}
}

export default Fieldset;
