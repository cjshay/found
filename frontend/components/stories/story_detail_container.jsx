import { connect } from 'react-redux';
import StoryDetail from './story_detail';
import { fetchStory, createLike, deleteLike, receiveStories } from '../../actions/story_actions';
import { createFollow, deleteFollow } from '../../actions/user_actions';
import { selectStories } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const storyId = ownProps.params.story_id;
  const story = state.stories[storyId];
  let userId = 'id';
  if (story !== undefined) {
    userId = story.author.id;
  }

  return {
    user: state.users[userId],
    users: state.users,
    storyId: storyId,
    story: story,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStory: (story) => dispatch(fetchStory(story)),
    createLike: (story) => dispatch(createLike(story)),
    deleteLike: (story) => dispatch(deleteLike(story)),
    createFollow: (followeeId) => dispatch(createFollow(followeeId)),
    deleteFollow: (followeeId) => dispatch(deleteFollow(followeeId)),
    receiveStories: () => dispatch(receiveStories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryDetail);
