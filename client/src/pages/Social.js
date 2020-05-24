import React, { Component } from 'react';
import API from '../utils/API';
import PostCard from '../components/PostCard';
import { CardDiv, CardBody } from '../components/BootstrapCard';
import { Row } from '../components/Grid';
import { TextArea } from '../components/Form';
import { InputBar, BarInput, InputBarBtn } from '../components/InputBar';
import thumb from '../images/thumb.png';
import {
  FormModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SubmitBtn,
  CloseBtn,
} from '../components/BootstrapModal';
import Dropdown from '../components/Dropdown';
import GridContainer from '../components/GridContainer';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  componentDidMount = () => {
    //this.props.getUser(); //i don't think this was needed but leaving the reference in case
    this.setState({ id: this.props.id });
  };

  render() {
    return (
      //profile-page css is also good for this
      <div className="profile-page">
        <GridContainer style={{ gridTemplateColumns: '1fr 30%' }}>
          <div>
            <h4>Activity</h4>
            <hr></hr>
          </div>
          <div>
            <h4>Find people</h4>
            <hr></hr>
            <InputBar>
              <BarInput
                onChange={this.handleInputChange}
                name="searchForm"
                value={this.state.searchForm}
                type="text"
              />
              <InputBarBtn onClick={this.handleCommentClick} label="Go" />
            </InputBar>
          </div>
        </GridContainer>
      </div>
    );
  }
}

export default Social;
