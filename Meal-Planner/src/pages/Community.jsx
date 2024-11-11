import React, { useState } from 'react';

// Sample user profile data (replace with dynamic data as needed)
const sampleUser = {
  name: 'John Doe',
  profileImage: 'https://via.placeholder.com/40',
};

const CommunityPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        user: sampleUser,
        text: newComment,
        date: new Date().toLocaleString(),
        likes: 0,
        replies: [],
      };
      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };

  const handleReplySubmit = (replyText, parentId) => {
    if (replyText.trim()) {
      const updatedComments = comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now(),
                user: sampleUser,
                text: replyText,
                date: new Date().toLocaleString(),
                likes: 0,
              },
            ],
          };
        }
        return comment;
      });
      setComments(updatedComments);
    }
  };

  const handleLike = (id, isReply = false, parentId = null) => {
    const updatedComments = comments.map((comment) => {
      if (isReply && parentId === comment.id) {
        return {
          ...comment,
          replies: comment.replies.map((reply) =>
            reply.id === id ? { ...reply, likes: reply.likes + 1 } : reply
          ),
        };
      } else if (comment.id === id) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleRemove = (id, isReply = false, parentId = null) => {
    const updatedComments = isReply
      ? comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.filter((reply) => reply.id !== id),
            };
          }
          return comment;
        })
      : comments.filter((comment) => comment.id !== id);

    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Community Feedback</h1>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leave Your Feedback</h2>
        <textarea
          className="w-full h-24 p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue text-white py-2 rounded hover:bg-blue-600 transition-colors">
          Submit
        </button>
      </form>

      {/* Comments List */}
      <div className="w-full max-w-md space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onLike={() => handleLike(comment.id)}
            onReplySubmit={(replyText) => handleReplySubmit(replyText, comment.id)}
            onReplyLike={(replyId) => handleLike(replyId, true, comment.id)}
            onRemove={() => handleRemove(comment.id)}
            onReplyRemove={(replyId) => handleRemove(replyId, true, comment.id)}
          />
        ))}
      </div>
    </div>
  );
};

const CommentItem = ({ comment, onLike, onReplySubmit, onReplyLike, onRemove, onReplyRemove }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* User Info */}
      <div className="flex items-center mb-2">
        <img src={comment.user.profileImage} alt={comment.user.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-gray-800 font-semibold">{comment.user.name}</p>
          <p className="text-gray-400 text-sm">{comment.date}</p>
        </div>
      </div>

      {/* Comment Text */}
      <p className="text-gray-700 mb-2">{comment.text}</p>

      {/* Actions: Like, Reply, Remove */}
      <div className="flex items-center justify-between text-gray-400 text-sm mt-2">
        <div className="flex items-center space-x-4">
          <button onClick={onLike} className="text-blue">👍 {comment.likes}</button>
          <button onClick={() => setShowReplyBox(!showReplyBox)} className="hover:text-blue-500">Reply</button>
          <button onClick={onRemove} className="text-orange">Remove</button>
        </div>
      </div>

      {/* Replies */}
      <div className="ml-6 mt-4 space-y-4">
        {comment.replies.map((reply) => (
          <div key={reply.id} className="bg-gray-50 p-3 rounded">
            <div className="flex items-center mb-2">
              <img src={reply.user.profileImage} alt={reply.user.name} className="w-8 h-8 rounded-full mr-2" />
              <div>
                <p className="text-gray-800 font-semibold">{reply.user.name}</p>
                <p className="text-gray-400 text-sm">{reply.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{reply.text}</p>
            <div className="flex items-center justify-between text-gray-400 text-sm mt-2">
              <button onClick={() => onReplyLike(reply.id)} className="hover:text-blue-500">👍 {reply.likes}</button>
              <button onClick={() => onReplyRemove(reply.id)} className="hover:text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Reply Box */}
      {showReplyBox && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onReplySubmit(replyText);
            setReplyText('');
            setShowReplyBox(false);
          }}
          className="mt-4"
        >
          <textarea
            className="w-full h-16 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button type="submit" className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition-colors">
            Submit Reply
          </button>
        </form>
      )}
    </div>
  );
};

export default CommunityPage;
