<hr></hr>
    <h4>Comments</h4>
    <hr></hr>
    <InputBar>
        <BarInput
            onChange={this.handleInputChange}
            name="post"
            value={this.state.post}
            type="text"
        />
        <InputBarBtn onClick={this.handlePostClick} label="Post" />
    </InputBar>
            {
    this.state.comments.length ? (
        <div>
            {this.state.comments.map(post => (
                <CardDiv>
                    <PostCard
                        key={post._id}
                        id={post._id}
                        firstName={post.firstName}
                        lastName={post.lastName}
                        image={post.userpic}
                        username={post.username}
                        postBody={post.postBody}
                    >
                        <div>likes and comments here</div>
                        <Dropdown>
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
                        </Dropdown>
                        {/* <Link to={'/likes/' + post._id}>
                        Like ({post.likes.length})
                      </Link> */}
                        <i class="far fa-heart"></i>
                        <Link
                            to={'/comments/' + post._id}
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <i class="far fa-comments"></i> ({post.comments.length})
                      </Link>
                    </PostCard>
                </CardDiv>
            ))}
        </div>
    ) : (
        <h3>No Comments to Display</h3>
    )
}
          </CardBody >
        </CardDiv >