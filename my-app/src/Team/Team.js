import React from 'react';
import TeamMember from '../TeamMember/TeamMember.js'

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: ["https://upload.wikimedia.org/wikipedia/en/e/e0/Cover_of_Captain_Marvel_1_-_2013.jpg", "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png", "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg"]
    }
  }

  render() {
    const { team } = this.state;
    return (
      <div className="Team">
        {team.map(hero => {
          return <TeamMember hero={hero} />
        })}
      </div>
    )
  }
}

export default Team;