import React from 'react';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hero } = this.props;
    return (
      <div>
        <img src={hero} />
        Hero Name
      </div>
    )
  }
}

export default TeamMember;