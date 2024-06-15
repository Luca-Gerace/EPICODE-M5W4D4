import { useState } from 'react';
import SingleComment from './SingleComment';
import UpdateCommentModal from './UpdateComment';
import DeleteCommentModal from './DeleteComment';

export default function CommentList({ comments, handleUpdateComments }) {

  // Hooks
  const [editingReview, setEditingReview] = useState(null);
  const [deletingReview, setDeletingReview] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditReview = (review) => {
    setEditingReview(review);
    setShowUpdateModal(true);
  };

  const handleDeleteReview = (review) => {
    setDeletingReview(review);
    setShowDeleteModal(true);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const updateCommentsList = (updatedComment) => {
    const updatedReviews = comments.map(r => r._id === updatedComment._id ? updatedComment : r);
    handleUpdateComments(updatedReviews);
  };

  const removeCommentFromList = (commentId) => {
    handleUpdateComments(comments.filter(r => r._id !== commentId));
  };

  return (
    <>
      {comments.map(review => (
        <SingleComment 
          key={review._id} 
          review={review}
          handleDeleteReview={handleDeleteReview} 
          handleEditReview={handleEditReview}
        />
      ))}
      {editingReview && (
        <UpdateCommentModal
          showModal={showUpdateModal}
          handleCloseModal={handleCloseUpdateModal}
          comment={editingReview}
          handleUpdateComments={updateCommentsList}
        />
      )}
      {deletingReview && (
        <DeleteCommentModal
          showModal={showDeleteModal}
          handleCloseModal={handleCloseDeleteModal}
          comment={deletingReview}
          handleUpdateComments={removeCommentFromList}
        />
      )}
    </>
  );
}