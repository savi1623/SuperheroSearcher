import React from 'react';
import TeamMember from '../TeamMember/TeamMember.js'
import './Team.scss'

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [644, 507, 123, 711, 1, 2]
    }
  }

  render() {
    const { team } = this.state;
    return (
      <div className="Team">
        <div className='teamTitle'>
          Your Team</div>
        <br />
        {team.map(hero => {
          return <TeamMember hero={hero} />
        })}
      </div>
    )
  }
}

export default Team;