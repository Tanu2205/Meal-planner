import React, { useState } from 'react';
import anita from '../assets/anita.jpg';
import Navbar from '../components/Navbar';
const sampleUsers = [
  {
    id: 1,
    name: 'Aman',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLGvcawzO9i0hVsqddANPK4A0gxPj73pX3johsxMTmVZ6g_KGrWMpe36UiJc3bkLSfB8&usqp=CAU',
  },
  {
    id: 2,
    name: 'Anita Gupta',
    profileImage: anita,
  },
  {
    id: 3,
    name: 'Rahul Singh',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFNE2CZZzsF5-Jtx_O7qLS_3x0ZLoR2Tnvg&s',
  },
  {
    id: 4,
    name: 'Khushi Sharma',
    profileImage: 'https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg',
  },{
    id: 5,
    name: 'Vikas Gupta',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy60EbYNRbgIV59YZz_PHcJwkPSwq0SOaS907AxOCs7lebyJqRXl4-ho8ouFkPrLSJ0bY&usqp=CAU',
  }
];


const initialComments = [
  {
    id: 1,
    user: sampleUsers[0],
    text: "This website has been really helpful! Thanks for all the resources.",
    date: '11/11/2024, 10:00 AM',
    likes: 3,
    replies: [
      {
        id: 101,
        user: sampleUsers[1],
        text: 'I agree with you, Aman!',
        date: '11/11/2024, 10:10 AM',
        likes: 1,
      },
    ],
  },
  {
    id: 2,
    user: sampleUsers[2],
    text: 'The website helped me a lot',
    date: '11/10/2024, 9:00 PM',
    likes: 5,
    replies: [],
  },
  {
    id: 4,
    user: sampleUsers[3],
    text: 'The quick basket helped me to get neccesary things',
    date: '11/10/2024, 9:00 PM',
    likes: 5,
    replies: [],
  }
  ,
  {
    id: 2,
    user: sampleUsers[4],
    text: 'The wesbsite is awesome',
    date: '11/10/2024, 9:00 PM',
    likes: 5,
    replies: [],
  }
];

const Community = () => {

  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        user: sampleUsers[0],
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
                user: sampleUsers[1],
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
    <>
        <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center min-w-full">
      <h1 className="text-3xl font-bold mb-6 text-blue font-sans">Community Feedback</h1>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leave Your Feedback</h2>
        <textarea
          className="w-full h-24 p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue text-white py-2 rounded hover:bg-blue transition-colors">
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
    </div></>
    
  );
};

const CommentItem = ({ comment, onLike, onReplySubmit, onReplyLike, onRemove, onReplyRemove }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow w-full">
      
      <div className="flex items-center mb-2">
        <img src={comment.user.profileImage} alt={comment.user.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="text-gray-800 font-semibold">{comment.user.name}</p>
          <p className="text-gray-400 text-sm">{comment.date}</p>
        </div>
      </div>

      
      <p className="text-gray-700 mb-2">{comment.text}</p>

      
      <div className="flex items-center justify-between text-gray-400 text-sm mt-2">
        <div className="flex items-center space-x-4">
          <button onClick={onLike} className="text-blue">👍 {comment.likes}</button>
          <button onClick={() => setShowReplyBox(!showReplyBox)} className="hover:text-blue-500">Reply</button>
          <button onClick={onRemove} className="text-orange">Remove</button>
        </div>
      </div>

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
              <button onClick={() => onReplyLike(reply.id)} className="hover:text-blue">👍 {reply.likes}</button>
              <button onClick={() => onReplyRemove(reply.id)} className="text-orange">Remove</button>
            </div>
          </div>
        ))}
      </div>

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
          <button type="submit" className="mt-2 w-full bg-blue text-white py-1 rounded hover:bg-blue-600 transition-colors">
            Submit Reply
          </button>
        </form>
      )}
    </div>
  );
};

export default Community;
