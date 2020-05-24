import React, { Component } from 'react';
import API from '../utils/API';
import PostCard from '../components/PostCard';
import { CardDiv, CardBody } from '../components/BootstrapCard';
import { Col, Row, Container } from '../components/Grid';
import { InputBar, BarInput, InputBarBtn } from '../components/InputBar';
import thumb from '../images/thumb.png';

class Post extends Component {
  constructor(props) {
    super(props);
    this.route = window.location.pathname;
    this.state = {
      id: '',
      postId: '',
      username: '',
      firstName: '',
      lastName: '',
      comments: '',
      postBody: '',
      userpic: '',
      commentBody: '',
      comments: [],
      commenterData: null,
      commenterImageUrl: '',
    };
  }

  componentDidMount = () => {
    //this.props.getUser(); //i don't think this was needed but leaving the reference in case
    this.setState({ id: this.props.id });
    this.loadPost();
    this.loadCommenterData();
  };

  loadPost = () => {
    API.getPost(this.route).then((res, err) => {
      if (err) {
        console.log(err);
      }
      this.setState({
        postId: res.data._id,
        username: res.data.username,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        postBody: res.data.postBody,
        comments: res.data.comments,
        userpic: res.data.userpic,
      });
    });
  };

  loadCommenterData = () => {
    API.getUser(this.props.id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      this.setState({
        commenterData: res.data,
        commenterImageUrl: res.data.image[0]
          ? res.data.image[0].profileImg
          : thumb,
      });
    });
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleCommentClick = event => {
    event.preventDefault();
    API.makeComment(this.state.postId, {
      username: this.state.commenterData.slug,
      commentBody: this.state.commentBody,
      firstName: this.state.commenterData.firstName,
      lastName: this.state.commenterData.lastName,
      userpic: this.state.commenterImageUrl,
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            commentBody: '',
          });
          this.loadPost();
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      //profile-page css is also good for this
      <div className="profile-page">
        <h4>
          {this.state.firstName} {this.state.lastName}'s Post
        </h4>
        <hr></hr>

        <CardDiv>
          <CardBody>
            <Row>
              <PostCard
                key={this.state.postId}
                id={this.state.postId}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                image={this.state.userpic}
                username={this.state.username}
                postBody={this.state.postBody}
              >
                <Row>
                  <i class="far fa-heart"></i>
                  <div>
                    <i class="far fa-comments"></i> (
                    {this.state.comments.length})
                  </div>
                </Row>
              </PostCard>
            </Row>
            <h4>Comments</h4>
            <hr></hr>
            <InputBar>
              <BarInput
                onChange={this.handleInputChange}
                name="commentBody"
                value={this.state.commentBody}
                type="text"
              />
              <InputBarBtn onClick={this.handleCommentClick} label="Comment" />
            </InputBar>
            {this.state.comments.length ? (
              <div>
                {this.state.comments.map(comment => (
                  <CardDiv>
                    <PostCard
                      key={comment._id}
                      id={comment._id}
                      firstName={comment.firstName}
                      lastName={comment.lastName}
                      image={comment.userpic}
                      username={comment.username}
                      postBody={comment.commentBody}
                    >
                      {/* <Dropdown>
                        <div
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target="#editModal"
                          onClick={event =>
                            this.handleEditBtn(event, post._id, post.postBody)
                          }
                        >
                          Edit
                        </div>
                        <div
                          className="dropdown-item"
                          onClick={() => this.deletePost(post._id)}
                        >
                          {' '}
                          Delete
                        </div>
                      </Dropdown> */}
                      {/* <Link to={'/likes/' + post._id}>
                        Like ({post.likes.length})
                      </Link> */}
                      <i class="far fa-heart"></i>
                    </PostCard>
                  </CardDiv>
                ))}
              </div>
            ) : (
              <h3>No Comments to Display</h3>
            )}
          </CardBody>
        </CardDiv>
      </div>
    );
  }
}

export default Post;
