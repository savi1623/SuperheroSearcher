import React from 'react';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <SearchImage />
        <SuperInfo />
      </div>
    );
  }
}

export default SuperSearch;
